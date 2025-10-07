#!/bin/bash

# Quick start script for AI Hotel Install

echo "🚀 AI Hotel Install - Quick Start Setup"
echo "========================================"
echo ""

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js $(node --version) detected"

# Check for npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm $(npm --version) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install root dependencies"
    exit 1
fi

npm run install:all

if [ $? -ne 0 ]; then
    echo "❌ Failed to install workspace dependencies"
    exit 1
fi

echo "✅ All dependencies installed"
echo ""

# Setup environment files
echo "📝 Setting up environment files..."

if [ ! -f "backend/.env" ]; then
    cp backend/.env.example backend/.env
    echo "✅ Created backend/.env from example"
else
    echo "⚠️  backend/.env already exists, skipping"
fi

if [ ! -f "frontend/.env" ]; then
    cp frontend/.env.example frontend/.env
    echo "✅ Created frontend/.env from example"
else
    echo "⚠️  frontend/.env already exists, skipping"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "To start development:"
echo "  npm run dev              # Start both frontend and backend"
echo "  npm run dev:frontend     # Start frontend only"
echo "  npm run dev:backend      # Start backend only"
echo ""
echo "Using Docker:"
echo "  docker-compose -f docker-compose.dev.yml up -d"
echo ""
echo "For more information, see README.md"
