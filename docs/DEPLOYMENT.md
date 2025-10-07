# Deployment Guide

## Table of Contents
- [Docker Deployment](#docker-deployment)
- [Production Setup](#production-setup)
- [Environment Configuration](#environment-configuration)
- [Security Checklist](#security-checklist)
- [Monitoring](#monitoring)
- [Backup Strategy](#backup-strategy)

## Docker Deployment

### Production Deployment with Docker Compose

1. **Prepare environment files**
   ```bash
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```

2. **Edit production environment variables**
   ```bash
   # backend/.env
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=mongodb://mongodb:27017/ai-hotel
   JWT_SECRET=<strong-random-secret>
   LOG_LEVEL=warn
   ```

3. **Build and start services**
   ```bash
   docker-compose up -d --build
   ```

4. **Verify deployment**
   ```bash
   docker-compose ps
   docker-compose logs -f
   ```

5. **Access the application**
   - Frontend: http://your-domain.com
   - Backend API: http://your-domain.com/api

### Docker Commands Reference

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild and restart
docker-compose up -d --build

# Scale backend (if needed)
docker-compose up -d --scale backend=3

# Remove all containers and volumes
docker-compose down -v
```

## Production Setup

### Prerequisites
- Server with Docker and Docker Compose
- Domain name configured
- SSL certificate (Let's Encrypt recommended)
- At least 2GB RAM and 2 CPU cores

### Server Setup

1. **Update system**
   ```bash
   sudo apt update
   sudo apt upgrade -y
   ```

2. **Install Docker**
   ```bash
   curl -fsSL https://get.docker.com -o get-docker.sh
   sudo sh get-docker.sh
   sudo usermod -aG docker $USER
   ```

3. **Install Docker Compose**
   ```bash
   sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   sudo chmod +x /usr/local/bin/docker-compose
   ```

4. **Clone repository**
   ```bash
   git clone <repository-url>
   cd ai-hotel-install
   ```

5. **Configure application**
   ```bash
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   # Edit files with production values
   ```

6. **Deploy**
   ```bash
   docker-compose up -d --build
   ```

### SSL/TLS Configuration

#### Using Nginx with Let's Encrypt

1. **Install Certbot**
   ```bash
   sudo apt install certbot python3-certbot-nginx -y
   ```

2. **Obtain certificate**
   ```bash
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

3. **Update nginx.conf**
   ```nginx
   server {
       listen 443 ssl http2;
       server_name your-domain.com;
       
       ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
       
       # ... rest of configuration
   }
   ```

4. **Auto-renewal**
   ```bash
   sudo certbot renew --dry-run
   ```

## Environment Configuration

### Production Environment Variables

#### Backend (.env)
```bash
# Application
NODE_ENV=production
PORT=5000

# Database
MONGODB_URI=mongodb://mongodb:27017/ai-hotel
# For external MongoDB:
# MONGODB_URI=mongodb://username:password@host:27017/ai-hotel?authSource=admin

# Security
JWT_SECRET=<GENERATE-STRONG-SECRET>
JWT_EXPIRATION=7d

# CORS
CORS_ORIGIN=https://your-domain.com

# Logging
LOG_LEVEL=warn
```

#### Frontend (.env)
```bash
VITE_API_URL=https://your-domain.com/api
```

### Generating Secure Secrets

```bash
# Generate JWT secret
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Or using openssl
openssl rand -hex 64
```

## Security Checklist

### Pre-Deployment

- [ ] Update all dependencies to latest stable versions
- [ ] Remove all console.log and debug code
- [ ] Set NODE_ENV=production
- [ ] Use strong JWT secret (64+ characters)
- [ ] Configure CORS properly
- [ ] Enable rate limiting
- [ ] Set up SSL/TLS certificates
- [ ] Configure security headers (Helmet)
- [ ] Implement input validation
- [ ] Hash passwords with bcrypt
- [ ] Use environment variables for secrets
- [ ] Disable source maps in production

### Post-Deployment

- [ ] Change default MongoDB credentials
- [ ] Set up firewall (ufw or iptables)
- [ ] Configure fail2ban
- [ ] Set up monitoring
- [ ] Enable automated backups
- [ ] Test security with OWASP tools
- [ ] Set up logging aggregation
- [ ] Configure alerts for errors

### Firewall Configuration

```bash
# Allow SSH
sudo ufw allow 22/tcp

# Allow HTTP/HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

## Monitoring

### Application Logging

Logs are managed by Winston and output to:
- Console (for Docker logs)
- Files (if configured)

View logs:
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend

# Last 100 lines
docker-compose logs --tail=100 backend
```

### Health Checks

Test endpoints:
```bash
# Backend health
curl https://your-domain.com/health

# API health
curl https://your-domain.com/api/health
```

### Monitoring Tools (Optional)

1. **Prometheus + Grafana** - Metrics and dashboards
2. **ELK Stack** - Log aggregation and analysis
3. **Uptime Robot** - Uptime monitoring
4. **Sentry** - Error tracking
5. **New Relic** - APM

## Backup Strategy

### MongoDB Backup

1. **Manual backup**
   ```bash
   docker exec ai-hotel-mongodb mongodump --out=/backup/$(date +%Y%m%d)
   ```

2. **Automated backup script**
   ```bash
   #!/bin/bash
   BACKUP_DIR="/backups/mongodb"
   DATE=$(date +%Y%m%d_%H%M%S)
   
   # Create backup
   docker exec ai-hotel-mongodb mongodump --out=/backup/$DATE
   
   # Copy to host
   docker cp ai-hotel-mongodb:/backup/$DATE $BACKUP_DIR/
   
   # Remove old backups (keep last 7 days)
   find $BACKUP_DIR -type d -mtime +7 -exec rm -rf {} \;
   ```

3. **Setup cron job**
   ```bash
   # Edit crontab
   crontab -e
   
   # Add daily backup at 2 AM
   0 2 * * * /path/to/backup-script.sh
   ```

### Restore from Backup

```bash
# Stop application
docker-compose down

# Restore MongoDB
docker exec -i ai-hotel-mongodb mongorestore /backup/20240101_020000

# Start application
docker-compose up -d
```

## Scaling

### Horizontal Scaling

1. **Scale backend instances**
   ```bash
   docker-compose up -d --scale backend=3
   ```

2. **Add load balancer** (Nginx configuration)
   ```nginx
   upstream backend {
       server backend1:5000;
       server backend2:5000;
       server backend3:5000;
   }
   ```

### Database Scaling

1. **MongoDB Replica Set**
   - Set up primary and secondary nodes
   - Configure automatic failover
   - Enable read replicas

2. **Database Indexing**
   ```javascript
   // Add indexes for frequently queried fields
   db.users.createIndex({ email: 1 }, { unique: true })
   db.users.createIndex({ createdAt: -1 })
   ```

## Troubleshooting

### Common Issues

1. **Container won't start**
   ```bash
   # Check logs
   docker-compose logs backend
   
   # Check configuration
   docker-compose config
   ```

2. **Database connection failed**
   ```bash
   # Check MongoDB is running
   docker ps | grep mongodb
   
   # Check connection string
   echo $MONGODB_URI
   ```

3. **Port conflicts**
   ```bash
   # Find process using port
   sudo lsof -i :5000
   
   # Kill process
   sudo kill -9 <PID>
   ```

4. **Out of disk space**
   ```bash
   # Check disk usage
   df -h
   
   # Clean Docker
   docker system prune -a
   ```

### Performance Issues

1. **Check resource usage**
   ```bash
   docker stats
   ```

2. **Optimize MongoDB**
   - Add appropriate indexes
   - Use projection to limit returned fields
   - Implement pagination

3. **Enable caching**
   - Add Redis for session storage
   - Implement API response caching
   - Use CDN for static assets

## Rollback Procedure

1. **Stop current version**
   ```bash
   docker-compose down
   ```

2. **Checkout previous version**
   ```bash
   git checkout <previous-version-tag>
   ```

3. **Deploy previous version**
   ```bash
   docker-compose up -d --build
   ```

4. **Restore database if needed**
   ```bash
   docker exec -i ai-hotel-mongodb mongorestore /backup/<date>
   ```

## CI/CD Pipeline

The project includes GitHub Actions workflow for:
- Automated testing
- Linting
- Building
- (Optional) Deployment

See `.github/workflows/ci.yml` for configuration.

## Maintenance

### Regular Tasks

- [ ] Weekly: Check application logs
- [ ] Weekly: Monitor resource usage
- [ ] Weekly: Review security alerts
- [ ] Monthly: Update dependencies
- [ ] Monthly: Review and rotate secrets
- [ ] Monthly: Test backup restoration
- [ ] Quarterly: Security audit
- [ ] Quarterly: Performance optimization review

### Updates

```bash
# Pull latest changes
git pull origin main

# Rebuild and restart
docker-compose down
docker-compose up -d --build

# Check status
docker-compose ps
docker-compose logs -f
```

## Support

For deployment issues:
1. Check logs: `docker-compose logs -f`
2. Review this documentation
3. Check GitHub issues
4. Contact team lead

---

Remember: Always test in staging before deploying to production!
