#!/bin/bash
# Quick reference for pushing to GitHub

# 1. Create a repository on GitHub at https://github.com/new
#    Name: school-website
#    Description: Official website of Smt. M.M. Bhakta High School
#    Visibility: Public (to make it accessible to everyone)
#    Do NOT initialize with README (we already have one)

# 2. After creating, you'll see instructions. Copy your HTTPS URL:
#    https://github.com/YOUR-USERNAME/school-website.git

# 3. Run these commands in PowerShell (replacing YOUR-USERNAME):

# Option A: HTTPS (Easier for beginners)
# ---------
git remote add origin https://github.com/YOUR-USERNAME/school-website.git
git push -u origin main

# When asked for password, use a Personal Access Token from:
# GitHub Settings → Developer Settings → Personal Access Tokens → Generate New Token
# Check "repo" scope and copy the token


# Option B: SSH (More secure, requires setup)
# --------
git remote add origin git@github.com:YOUR-USERNAME/school-website.git
git push -u origin main

# First time SSH? Follow this:
# 1. Generate key: ssh-keygen -t ed25519 -C "your.email@gmail.com"
# 2. Copy public key to GitHub Settings → SSH and GPG keys


# After first push, future updates are simple:
# ==========================================
git add .
git commit -m "Update: description of what changed"
git push
