# Deployment Guide - Vercel

This guide will walk you through deploying Khushboo Shukla's portfolio website to Vercel.

## Quick Deploy (Recommended)

### Option 1: Deploy from GitHub

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect the Vite configuration
   - Click "Deploy"

3. **Done!** Your site will be live in under a minute.

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No**
   - What's your project's name? **khushboo-portfolio** (or your choice)
   - In which directory is your code located? **./**
   - Want to override settings? **No**

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

## Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Click on "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Environment Variables

This project doesn't require any environment variables for basic deployment.

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy every push to the main branch to production
- Create preview deployments for pull requests
- Run builds and show deployment status in GitHub

## Vercel Configuration

The project includes a `vercel.json` file that configures:
- SPA routing (all routes redirect to index.html)
- Optimal settings for React applications

## Build Settings

Vercel automatically detects these settings:
- **Framework Preset**: Vite
- **Build Command**: `npm run build` or `vite build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Troubleshooting

### Build Fails
- Ensure all dependencies are in `package.json`
- Check Node.js version (should be 18+)
- Review build logs in Vercel dashboard

### 404 Errors
- The `vercel.json` file handles SPA routing
- Ensure the file is in the root directory

### Styling Issues
- Clear browser cache
- Check if CSS files are being loaded in the Network tab

## Performance Optimization

The site is already optimized with:
- Production build minification
- Tree-shaking for unused code
- Optimized asset loading
- Gzip compression

## Monitoring

After deployment, you can:
- View analytics in Vercel dashboard
- Monitor build and deployment logs
- Set up custom alerts

## Support

For Vercel-specific issues, visit:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

---

**Your portfolio is now ready to deploy!**

For the fastest deployment, use Option 1 (GitHub + Vercel Dashboard).
