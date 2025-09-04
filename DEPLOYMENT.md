# Deployment Guide - Arvind Singh Portfolio

This repository includes automated deployment scripts and GitHub Actions workflows for deploying Arvind Singh's portfolio website.

## 🚀 Deployment Options

### 1. GitHub Pages (Automatic)

The portfolio automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

**Setup Requirements:**
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push changes to `main` branch

**Workflow Files:**
- `.github/workflows/deploy.yml` - Simple deployment
- `.github/workflows/build-and-deploy.yml` - Advanced deployment with testing

### 2. Manual Deployment Script

Use the included `deploy.sh` script for flexible deployment options:

```bash
# Interactive deployment (choose target)
./deploy.sh

# Direct deployment to specific platform
./deploy.sh github    # Deploy to GitHub Pages
./deploy.sh netlify   # Deploy to Netlify
./deploy.sh vercel    # Deploy to Vercel
./deploy.sh preview   # Local preview only
```

### 3. Platform-Specific Instructions

#### GitHub Pages
1. Push changes to `main` branch
2. GitHub Actions will automatically build and deploy
3. Visit: `https://[username].github.io/arvind-validation-folio`

#### Netlify
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run: `./deploy.sh netlify`
3. Follow authentication prompts

#### Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `./deploy.sh vercel`
3. Follow setup prompts

## 📁 Build Output

- Build command: `npm run build`
- Output directory: `dist/`
- Preview command: `npm run preview`

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Requirements

- Node.js 18+
- npm or yarn
- Git (for GitHub deployment)

## 🔒 Environment Variables

No environment variables required for basic deployment. The portfolio is a static site.

## 📞 Support

For deployment issues, check:
1. GitHub Actions logs (for GitHub Pages)
2. Build output in terminal
3. Browser console for runtime errors

---

**Portfolio for:** Arvind Singh - System Validation Engineer  
**Built with:** React, TypeScript, Vite, Tailwind CSS
