# How to Push to GitHub - Authentication Fix

## Problem
Git is trying to use credentials for "asayewt-byte" but your repository is "wutatege-del/yeneport".

## Solution Options

### Option 1: Use Personal Access Token (Recommended)

1. **Create a Personal Access Token on GitHub:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Give it a name like "Portfolio Push"
   - Select scopes: `repo` (full control of private repositories)
   - Click "Generate token"
   - **Copy the token** (you won't see it again!)

2. **Push using the token:**
   ```bash
   git push -u origin main
   ```
   - When prompted for username: enter `wutatege-del`
   - When prompted for password: paste your **Personal Access Token** (not your GitHub password)

### Option 2: Clear Windows Credentials

1. **Open Windows Credential Manager:**
   - Press `Win + R`
   - Type: `control /name Microsoft.CredentialManager`
   - Press Enter

2. **Remove GitHub credentials:**
   - Go to "Windows Credentials"
   - Find any entries for "github.com"
   - Click and remove them

3. **Try pushing again:**
   ```bash
   git push -u origin main
   ```

### Option 3: Use SSH (If you have SSH keys set up)

1. **Change remote to SSH:**
   ```bash
   git remote set-url origin git@github.com:wutatege-del/yeneport.git
   ```

2. **Push:**
   ```bash
   git push -u origin main
   ```

## Quick Fix - Use GitHub Desktop

If you have GitHub Desktop installed:
1. Open GitHub Desktop
2. File → Add Local Repository
3. Select your project folder
4. Click "Publish repository" or "Push origin"

## Verify After Push

After successfully pushing:
1. Go to: https://github.com/wutatege-del/yeneport
2. Verify that `src/main.jsx` is visible in the repository
3. Netlify should automatically detect the changes and rebuild

## Current Status

✅ Git repository initialized
✅ All files committed (including src/main.jsx)
✅ Remote repository added
⏳ Waiting for authentication to push

