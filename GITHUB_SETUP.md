# GitHub Setup Instructions

This document will guide you through pushing this project to GitHub.

## Prerequisites

1. **Git installed**: Download from [git-scm.com](https://git-scm.com/)
2. **GitHub account**: Sign up at [github.com](https://github.com)
3. **Project ready**: You already have the local project set up

## Step-by-Step Guide

### Step 1: Create a New Repository on GitHub

1. Go to [github.com](https://github.com) and log in
2. Click the **+** icon (top right) → **New repository**
3. Fill in the form:
   - **Repository name**: `school-website` (or your preferred name)
   - **Description**: `Official website of Smt. M.M. Bhakta High School`
   - **Visibility**: **Public** (to share publicly)
   - **Initialize repository**: Leave all unchecked (we have local files already)
   - Click **Create repository**

4. You'll see a page with setup instructions. Copy your repository URL (looks like):
   ```
   https://github.com/YOUR-USERNAME/school-website.git
   ```

### Step 2: Initialize & Configure Git Locally

Open PowerShell in your project folder and run:

```powershell
cd "C:\Users\Admin\OneDrive\Desktop\school website"

# Configure Git with your GitHub info
git config --global user.name "Your Full Name"
git config --global user.email "your.email@gmail.com"

# Initialize the repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: School website with galleries and staff pages"

# Rename branch to main (GitHub standard)
git branch -M main
```

### Step 3: Connect to GitHub & Push

Replace `YOUR-USERNAME` with your actual GitHub username:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/school-website.git
git push -u origin main
```

**First time push?** GitHub may ask you to authenticate:
- For HTTPS: Use your GitHub Personal Access Token (see below)
- For SSH: Set up SSH keys (optional, but more secure)

### Step 4: Authentication (Important!)

#### Option A: Personal Access Token (Easier)

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Click **Generate new token**
3. Name it: "school-website"
4. Select scopes: Check `repo` (gives full control of repositories)
5. Click **Generate token**
6. Copy the token (it won't show again!)

When Git asks for password during push:
- **Username**: Your GitHub username
- **Password**: Paste the token you just created

#### Option B: SSH Keys (More Secure)

1. Generate SSH key:
   ```powershell
   ssh-keygen -t ed25519 -C "your.email@gmail.com"
   ```
   Press Enter for all prompts to accept defaults.

2. Add public key to GitHub:
   - Go to GitHub Settings → SSH and GPG keys
   - Click **New SSH key**
   - Copy your public key from `C:\Users\YOUR-USERNAME\.ssh\id_ed25519.pub`
   - Paste it and save

3. Update your remote (replace URL with SSH version):
   ```powershell
   git remote set-url origin git@github.com:YOUR-USERNAME/school-website.git
   ```

### Step 5: Verify Upload

1. Refresh your GitHub repository page
2. You should see all your files now on GitHub
3. The README.md will display as the project description

## Future Updates

Once set up, updating your repository is simple:

```powershell
# Make your changes in the files
# Then:
git add .
git commit -m "Update: Added new gallery"
git push
```

## Optional: Enable GitHub Pages

To serve your website directly from GitHub:

1. Go to Repository Settings → Pages
2. Under "Source", select "Deploy from a branch"
3. Choose branch: `main`
4. Choose folder: `/root`
5. Click **Save**

Your site will be available at: `https://YOUR-USERNAME.github.io/school-website/`

## Troubleshooting

**Error: "fatal: not a git repository"**
- Make sure you're in the correct folder (school website folder)
- Run `git init` first

**Error: "remote origin already exists"**
```powershell
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/school-website.git
```

**Error: "Permission denied (publickey)"** (SSH only)
- Make sure your SSH key is added to GitHub
- Check: `ssh -T git@github.com`

**Still need help?** Contact GitHub support or ask in the school Slack/Discord channel.

---

**That's it!** Your website is now on GitHub and ready to be shared with the world! 🎉
