# Create the GitHub repo (do this first)

The push fails because **the repo does not exist yet**. Create it on GitHub, then push.

## Steps

1. **Go to:** https://github.com/new

2. **Owner:** Marjoki (your account)

3. **Repository name:** `Marjoki.co.uk` (exactly as you want it)

4. **Visibility:** Private or Public — your choice

5. **Do NOT** add:
   - README
   - .gitignore
   - License

6. Click **Create repository**

7. **Then run this in your project folder:**

```powershell
cd C:\Users\tahir\Desktop\MARJOKI
git push -u origin main
```

If GitHub asks for login, use your username and a **Personal Access Token** (not your password) for HTTPS.
