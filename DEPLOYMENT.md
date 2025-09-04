# Deployment Guide - Arvind Singh Portfolio

This repository includes automated deployment scripts and GitHub Actions workflows for deploying Arvind Singh's portfolio website to multiple platforms.

## 🚀 Deployment Options

### 1. GitHub Pages (Automatic)

The portfolio automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

**Setup Requirements:**
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push changes to `main` branch

**URL:** `https://abh2050.github.io/arvind-validation-folio/`

### 2. Netlify

For Netlify deployment, the app uses root path configuration.

**Manual Deployment:**
```bash
# Set environment for root path
export VITE_BASE_PATH="/"
npm run build
netlify deploy --prod --dir=dist
```

**Or use the deployment script:**
```bash
./deploy.sh netlify
```

### 3. Vercel

For Vercel deployment, the app uses root path configuration.

**Manual Deployment:**
```bash
# Set environment for root path
export VITE_BASE_PATH="/"
npm run build
vercel --prod
```

**Or use the deployment script:**
```bash
./deploy.sh vercel
```

### 4. Custom Domain/Server

For deployment to custom domains or servers:

```bash
# Build with root path
export VITE_BASE_PATH="/"
npm run build

# Deploy the contents of dist/ folder to your server
```

## 🔧 Environment Configuration

The app automatically configures the base path based on environment variables:

- **`VITE_BASE_PATH`**: Override the base path for assets and routing
- **Development**: Uses `/` (root path)
- **Production**: Uses `/arvind-validation-folio/` for GitHub Pages, or value from `VITE_BASE_PATH`

### Platform-Specific Base Paths:

| Platform | Base Path | Environment Variable |
|----------|-----------|---------------------|
| GitHub Pages | `/arvind-validation-folio/` | Auto-set in CI |
| Netlify | `/` | `VITE_BASE_PATH="/"` |
| Vercel | `/` | `VITE_BASE_PATH="/"` |
| Custom Domain | `/` | `VITE_BASE_PATH="/"` |

## 📋 Build Commands

### Standard Build (GitHub Pages)
```bash
npm run build
```

### Build for Root Domain
```bash
export VITE_BASE_PATH="/"
npm run build
```

### Build for Custom Subdirectory
```bash
export VITE_BASE_PATH="/my-portfolio/"
npm run build
```

## 🧪 Testing Builds Locally

```bash
# Build and preview
export VITE_BASE_PATH="/"
npm run build
npm run preview

# Or use deployment script
./deploy.sh preview
```

## 🔄 Deployment Script Usage

The included `deploy.sh` script handles multiple deployment scenarios:

```bash
# Interactive deployment (choose platform)
./deploy.sh

# Direct deployment
./deploy.sh github    # GitHub Pages with correct base path
./deploy.sh netlify   # Netlify with root path
./deploy.sh vercel    # Vercel with root path
./deploy.sh preview   # Local preview with root path
```

## ⚠️ Important Notes

1. **Always build before deploying**: Never deploy the source code directly
2. **Use correct base path**: Set `VITE_BASE_PATH` appropriately for your deployment target
3. **Deploy `dist/` folder**: Only deploy the built files, not the source code
4. **Test locally**: Use `npm run preview` to test the production build

## 🐛 Troubleshooting

### Blank Page Issues
- Ensure you're deploying the `dist/` folder contents
- Check that `VITE_BASE_PATH` matches your deployment URL structure
- Verify assets are loading correctly in browser dev tools

### 404 Errors
- For single-page apps, configure your host for client-side routing
- Ensure the base path in router matches the deployment path

### Asset Loading Issues
- Check that the base path is set correctly
- Verify asset URLs in the built HTML match your deployment structure

---

**Portfolio for:** Arvind Singh - System Validation Engineer  
**Built with:** React, TypeScript, Vite, Tailwind CSS
