# 🏗️ Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Client Browser                          │
│                    (React Frontend)                          │
│                     Port: 5173                               │
└──────────────────────┬──────────────────────────────────────┘
                       │ HTTP/REST API
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                  API Gateway / Backend                       │
│              (Express + TypeScript)                          │
│                     Port: 3000                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Routes Layer                                        │   │
│  │  - /api/auth    - /api/rooms   - /api/ai           │   │
│  │  - /api/bookings - /api/payments - /api/reviews    │   │
│  └────────────┬─────────────────────────────────────────┘   │
│               │                                              │
│  ┌────────────▼─────────────────────────────────────────┐   │
│  │  Controllers Layer                                    │   │
│  │  - Auth   - Room   - AI   - Booking   - Payment     │   │
│  └────────────┬─────────────────────────────────────────┘   │
│               │                                              │
│  ┌────────────▼─────────────────────────────────────────┐   │
│  │  Services Layer                                       │   │
│  │  - Business Logic   - Data Validation                │   │
│  └────────────┬─────────────────────────────────────────┘   │
└───────────────┼──────────────────────────────────────────────┘
                │
     ┌──────────┴──────────┬─────────────────┬───────────────┐
     │                     │                 │               │
┌────▼─────┐     ┌────────▼──────┐   ┌─────▼──────┐  ┌────▼─────┐
│PostgreSQL│     │     Redis      │   │  OpenAI    │  │  Email   │
│ Database │     │     Cache      │   │    API     │  │ Service  │
│Port: 5432│     │  Port: 6379    │   │            │  │          │
└──────────┘     └────────────────┘   └────────────┘  └──────────┘
```

## Data Flow

### User Authentication Flow

```
┌──────┐     1. POST /api/auth/register     ┌─────────┐
│Client├──────────────────────────────────►│Backend  │
└──────┘                                     └────┬────┘
                                                  │
                                             2. Hash Password
                                                  │
                                             ┌────▼────┐
                                             │PostgreSQL│
                                             └────┬────┘
   ┌──────┐   4. Return JWT + User Data     │
   │Client│◄──────────────────────────────── 3. Save User
   └──────┘                                  └─────────┘
```

### AI Chat Flow

```
┌──────┐   1. POST /api/ai/chat          ┌────────┐
│Client├─────────────────────────────────►│Backend │
└──────┘   { message: "..." }             └───┬────┘
                                              │
                                    2. Prepare Context
                                              │
                                         ┌────▼──────┐
                                         │  OpenAI   │
                                         │    API    │
                                         └────┬──────┘
                                              │
                                    3. Get AI Response
                                              │
┌──────┐   5. Return Response          ┌─────▼──────┐
│Client│◄──────────────────────────────┤ PostgreSQL │
└──────┘                                │(Save Chat) │
                                        └────────────┘
```

### Room Booking Flow

```
┌──────┐   1. Browse Rooms               ┌────────┐
│Client├─────────────────────────────────►│Backend │
└──────┘   GET /api/rooms                └───┬────┘
                                              │
                                    ┌─────────▼────────┐
                                    │   Redis Cache    │
                                    │  (Check Cache)   │
                                    └─────────┬────────┘
                                              │
                                         No Cache?
                                              │
┌──────┐   3. Return Rooms             ┌─────▼──────┐
│Client│◄──────────────────────────────┤ PostgreSQL │
└───┬──┘                                │(Fetch Data)│
    │                                   └────────────┘
    │
    │ 4. POST /api/bookings
    │
┌───▼──┐   5. Create Booking           ┌────────┐
│Client├─────────────────────────────────►│Backend │
└──────┘                                └───┬────┘
                                            │
                                    ┌───────▼────────┐
                                    │   PostgreSQL   │
                                    │ (Save Booking) │
                                    └───────┬────────┘
                                            │
                                    ┌───────▼────────┐
                                    │  Send Email    │
                                    │ (Confirmation) │
                                    └────────────────┘
```

## Technology Stack Details

### Backend Stack

```
┌─────────────────────────────────────────────────────────┐
│                     Backend                              │
├─────────────────────────────────────────────────────────┤
│  Runtime:        Node.js 18+                            │
│  Framework:      Express.js                             │
│  Language:       TypeScript                             │
│  ORM:            Prisma                                 │
│  Validation:     express-validator                      │
│  Auth:           JWT + bcryptjs                         │
│  Logging:        Winston                                │
│  AI:             OpenAI SDK                             │
└─────────────────────────────────────────────────────────┘
```

### Frontend Stack

```
┌─────────────────────────────────────────────────────────┐
│                     Frontend                             │
├─────────────────────────────────────────────────────────┤
│  Framework:      React 18                               │
│  Language:       TypeScript                             │
│  Build Tool:     Vite                                   │
│  Routing:        React Router v6                        │
│  HTTP Client:    Axios                                  │
│  State:          Context API + Zustand                  │
│  Data Fetching:  React Query                            │
└─────────────────────────────────────────────────────────┘
```

### Database Schema

```
┌──────────┐      ┌──────────┐      ┌──────────┐
│   User   │      │   Room   │      │ Booking  │
├──────────┤      ├──────────┤      ├──────────┤
│ id       │      │ id       │      │ id       │
│ email    │      │ number   │      │ userId   │───┐
│ password │      │ type     │      │ roomId   │───┼──┐
│ name     │      │ price    │      │ checkIn  │   │  │
│ role     │      │ status   │      │ checkOut │   │  │
└────┬─────┘      └────┬─────┘      │ status   │   │  │
     │                 │            └──────────┘   │  │
     │                 │                           │  │
     │                 └───────────────────────────┘  │
     │                                                │
     └────────────────────────────────────────────────┘

┌──────────┐      ┌──────────┐      ┌──────────────┐
│ Payment  │      │  Review  │      │ ChatHistory  │
├──────────┤      ├──────────┤      ├──────────────┤
│ id       │      │ id       │      │ id           │
│ bookingId│      │ userId   │      │ userId       │
│ amount   │      │ rating   │      │ message      │
│ method   │      │ comment  │      │ response     │
│ status   │      └──────────┘      │ context      │
└──────────┘                        └──────────────┘
```

## Security Architecture

```
┌─────────────────────────────────────────────────────────┐
│                  Security Layers                         │
├─────────────────────────────────────────────────────────┤
│  1. HTTPS/TLS    - Encrypted communication              │
│  2. CORS         - Cross-origin protection              │
│  3. Helmet       - HTTP headers security                │
│  4. JWT          - Stateless authentication             │
│  5. bcrypt       - Password hashing                     │
│  6. Rate Limit   - DDoS protection                      │
│  7. Input Valid. - SQL injection prevention             │
│  8. RBAC         - Role-based access control            │
└─────────────────────────────────────────────────────────┘
```

## Deployment Architecture

```
┌──────────────────────────────────────────────────────────┐
│                     Docker Compose                        │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Frontend   │  │   Backend    │  │  PostgreSQL  │  │
│  │   Container  │  │   Container  │  │   Container  │  │
│  │  Port: 5173  │  │  Port: 3000  │  │  Port: 5432  │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                           │
│  ┌──────────────┐                                        │
│  │    Redis     │                                        │
│  │   Container  │                                        │
│  │  Port: 6379  │                                        │
│  └──────────────┘                                        │
│                                                           │
└──────────────────────────────────────────────────────────┘
                           │
                           │ Bridge Network
                           │
┌──────────────────────────▼───────────────────────────────┐
│                    Host Machine                           │
│              Docker Engine + Docker Compose               │
└──────────────────────────────────────────────────────────┘
```

## Feature Modules

```
┌────────────────────────────────────────────────────────┐
│                   Feature Modules                       │
├────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐ │
│  │     Auth     │  │    Rooms     │  │   Booking   │ │
│  │              │  │              │  │             │ │
│  │ • Register   │  │ • List       │  │ • Create    │ │
│  │ • Login      │  │ • Create     │  │ • Update    │ │
│  │ • Logout     │  │ • Update     │  │ • Cancel    │ │
│  │ • JWT        │  │ • Delete     │  │ • History   │ │
│  └──────────────┘  └──────────────┘  └─────────────┘ │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐ │
│  │  AI Agent    │  │   Payment    │  │   Reviews   │ │
│  │              │  │              │  │             │ │
│  │ • Chat       │  │ • Process    │  │ • Create    │ │
│  │ • Recommend  │  │ • Refund     │  │ • List      │ │
│  │ • History    │  │ • History    │  │ • Ratings   │ │
│  └──────────────┘  └──────────────┘  └─────────────┘ │
│                                                         │
└────────────────────────────────────────────────────────┘
```

## API Endpoints Map

```
/api
├── /auth
│   ├── POST /register      - Create new account
│   └── POST /login         - Authenticate user
│
├── /rooms
│   ├── GET    /            - List all rooms
│   ├── GET    /:id         - Get room details
│   ├── POST   /            - Create room (admin)
│   ├── PUT    /:id         - Update room (admin)
│   └── DELETE /:id         - Delete room (admin)
│
├── /bookings
│   ├── GET    /            - List user bookings
│   ├── POST   /            - Create booking
│   ├── PUT    /:id         - Update booking
│   └── DELETE /:id         - Cancel booking
│
├── /payments
│   ├── POST   /            - Process payment
│   └── GET    /:id         - Get payment details
│
├── /reviews
│   ├── GET    /            - List reviews
│   └── POST   /            - Create review
│
├── /ai
│   ├── POST   /chat        - Chat with AI
│   ├── POST   /recommend   - Get recommendations
│   └── GET    /history     - Chat history
│
└── /services
    ├── GET    /            - List service requests
    └── POST   /            - Create service request
```
