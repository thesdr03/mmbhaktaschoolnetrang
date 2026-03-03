# Smt. M.M. Bhakta High School — Local Server

This folder contains the static website files for the school. Use the simple instructions below to serve the site locally and access all pages in a browser.

## Quick start (Windows)

1. Make sure Python 3 is installed. You can check by running:

```powershell
python --version
```

2. Double-click `run-server.bat` or run it from CMD/PowerShell in this folder:

```powershell
cd "C:\Users\Admin\OneDrive\Desktop\school website"
run-server.bat
```

3. Open a browser and go to:

```
http://localhost:8000
```

The index will redirect to the main page (`school web.html`). If you need to open any other file directly, use the encoded URL for spaces (example):

```
http://localhost:8000/school%20web.html
http://localhost:8000/management.html
http://localhost:8000/staff.html
http://localhost:8000/alumni-directory.html
```

## Notes & next steps

- Filenames contain spaces (for example `school web.html`). Browsers handle them when URL-encoded (`%20`). If you prefer cleaner URLs, I can rename files to use hyphens (e.g. `school-web.html`) and update internal links accordingly.
- If you want a Node.js server or more advanced routing, tell me and I will add one.

