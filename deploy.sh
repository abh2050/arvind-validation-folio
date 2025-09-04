#!/bin/bash

# Deployment script for Arvind Singh Portfolio
# This script builds and deploys the portfolio to various platforms

set -e

echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js and try again."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm and try again."
    exit 1
fi

print_status "Node.js version: $(node --version)"
print_status "npm version: $(npm --version)"

# Install dependencies
print_status "Installing dependencies..."
npm ci

# Run linting (if available)
if npm run lint --dry-run &> /dev/null; then
    print_status "Running linter..."
    npm run lint
    print_success "Linting passed!"
else
    print_warning "Linter not configured, skipping..."
fi

# Build the project
print_status "Building the project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    print_error "Build failed: dist directory not found"
    exit 1
fi

if [ ! -f "dist/index.html" ]; then
    print_error "Build failed: index.html not found in dist directory"
    exit 1
fi

print_success "Build completed successfully!"

# Get deployment target from argument or prompt user
DEPLOY_TARGET=${1:-""}

if [ -z "$DEPLOY_TARGET" ]; then
    echo ""
    echo "Select deployment target:"
    echo "1) GitHub Pages"
    echo "2) Netlify"
    echo "3) Vercel"
    echo "4) Local preview only"
    read -p "Enter choice (1-4): " choice
    
    case $choice in
        1) DEPLOY_TARGET="github";;
        2) DEPLOY_TARGET="netlify";;
        3) DEPLOY_TARGET="vercel";;
        4) DEPLOY_TARGET="preview";;
        *) print_error "Invalid choice"; exit 1;;
    esac
fi

# Deploy based on target
case $DEPLOY_TARGET in
    "github")
        print_status "Deploying to GitHub Pages..."
        print_warning "Make sure GitHub Pages is enabled in repository settings"
        print_status "Building for GitHub Pages with correct base path..."
        export VITE_BASE_PATH="/arvind-validation-folio/"
        npm run build
        print_status "Pushing changes to trigger GitHub Actions deployment..."
        git add .
        git commit -m "Deploy portfolio $(date '+%Y-%m-%d %H:%M:%S')" || true
        git push origin main
        print_success "Deployment initiated! Check GitHub Actions for progress."
        ;;
    
    "netlify")
        print_status "Deploying to Netlify..."
        export VITE_BASE_PATH="/"
        npm run build
        if command -v netlify &> /dev/null; then
            netlify deploy --prod --dir=dist
            print_success "Deployed to Netlify!"
        else
            print_error "Netlify CLI not installed. Install with: npm install -g netlify-cli"
            exit 1
        fi
        ;;
    
    "vercel")
        print_status "Deploying to Vercel..."
        export VITE_BASE_PATH="/"
        npm run build
        if command -v vercel &> /dev/null; then
            vercel --prod
            print_success "Deployed to Vercel!"
        else
            print_error "Vercel CLI not installed. Install with: npm install -g vercel"
            exit 1
        fi
        ;;
    
    "preview")
        print_status "Starting local preview..."
        export VITE_BASE_PATH="/"
        npm run build
        npm run preview &
        PREVIEW_PID=$!
        print_success "Preview server started! Check http://localhost:4173"
        print_status "Press Ctrl+C to stop the preview server"
        wait $PREVIEW_PID
        ;;
    
    *)
        print_error "Unknown deployment target: $DEPLOY_TARGET"
        exit 1
        ;;
esac

print_success "Deployment process completed!"
