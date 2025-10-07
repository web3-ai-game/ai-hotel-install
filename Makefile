# Makefile for AI Hotel Install

.PHONY: help install dev build test clean docker-dev docker-prod docker-down

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## Install all dependencies
	npm install
	npm run install:all

dev: ## Run development servers
	npm run dev

dev-frontend: ## Run frontend dev server only
	npm run dev:frontend

dev-backend: ## Run backend dev server only
	npm run dev:backend

build: ## Build for production
	npm run build

test: ## Run all tests
	npm run test

lint: ## Run linters
	npm run lint

clean: ## Clean build artifacts and dependencies
	rm -rf node_modules
	rm -rf frontend/node_modules
	rm -rf backend/node_modules
	rm -rf frontend/dist
	rm -rf backend/dist

docker-dev: ## Start Docker development environment
	docker-compose -f docker-compose.dev.yml up -d

docker-prod: ## Start Docker production environment
	docker-compose up -d

docker-down: ## Stop Docker containers
	docker-compose down
	docker-compose -f docker-compose.dev.yml down

docker-logs: ## View Docker logs
	docker-compose logs -f

docker-rebuild: ## Rebuild Docker containers
	docker-compose build --no-cache
