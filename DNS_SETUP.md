# Custom Domain Setup for McFall Productions Website

## Current GitHub Pages URL
Your site is currently live at: https://scottmcfalldev-bot.github.io/mcfallprod_website/

## Setting Up Your Custom Domain

### Step 1: Update CNAME File (Already Done)
The `public/CNAME` file has been created. Update it with your actual domain:
1. Edit `/public/CNAME`
2. Replace `www.mcfallproductions.com` with your actual domain
3. Commit and push the change

### Step 2: Configure DNS at Your Domain Registrar

Choose one of these configurations based on your domain type:

#### Option A: For apex domain (example.com)
Add these **A records** pointing to GitHub's IP addresses:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

#### Option B: For subdomain (www.example.com)
Add a **CNAME record**:
```
Type: CNAME
Name: www
Value: scottmcfalldev-bot.github.io
```

#### Option C: For both apex and www (Recommended)
1. Add the A records for the apex domain (Option A)
2. Add a CNAME record for www pointing to your apex domain:
```
Type: CNAME  
Name: www
Value: example.com
```

### Step 3: Popular Domain Registrar Instructions

#### GoDaddy
1. Log in to your GoDaddy account
2. Go to "My Products" → Find your domain → "DNS"
3. Delete any existing A records for @ (if replacing)
4. Add the GitHub A records with Name: @ and the IPs above
5. Add CNAME with Name: www and Value: scottmcfalldev-bot.github.io

#### Namecheap
1. Sign in to Namecheap
2. Go to "Domain List" → "Manage" next to your domain
3. Click "Advanced DNS"
4. Add A Records with Host: @ and the GitHub IPs
5. Add CNAME Record with Host: www and Value: scottmcfalldev-bot.github.io

#### Google Domains / Squarespace Domains
1. Sign in to your account
2. Click on your domain
3. Go to "DNS" → "Manage custom records"
4. Add the A records with Host name: @ and the IPs
5. Add CNAME with Host name: www and Data: scottmcfalldev-bot.github.io

#### Cloudflare
1. Log in to Cloudflare
2. Select your domain
3. Go to "DNS"
4. Add A records with Name: @ and the GitHub IPs (Proxy status: DNS only)
5. Add CNAME with Name: www and Target: scottmcfalldev-bot.github.io

### Step 4: Enable HTTPS in GitHub
1. After DNS propagation (can take up to 48 hours, usually much faster)
2. Go to your repository Settings → Pages
3. Check "Enforce HTTPS" when it becomes available

### Step 5: Verify Setup
- DNS changes can take 10 minutes to 48 hours to propagate
- Check propagation status at: https://www.whatsmydns.net/
- Your site will be available at your custom domain once propagation is complete

### Troubleshooting
- If you see a 404 error: Wait for DNS propagation
- If HTTPS doesn't work immediately: GitHub needs time to provision SSL certificate (up to 24 hours)
- Certificate error: Make sure "Enforce HTTPS" is checked in GitHub Pages settings

### Need to Update Your Domain?
1. Edit `public/CNAME` with your new domain
2. Run: `npm run build`
3. Commit and push changes
4. The GitHub Action will automatically deploy with the new domain