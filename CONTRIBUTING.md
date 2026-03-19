# Contributing to Smt. M.M. Bhakta High School Website

Thank you for your interest in contributing to our school website! Here are some guidelines to help you get started.

## How to Contribute

### 1. Fork and Clone
```bash
git clone https://github.com/YOUR-USERNAME/school-website.git
cd school-website
```

### 2. Create a Branch
```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names:
- `feature/add-alumni-directory`
- `fix/broken-links`
- `docs/update-readme`

### 3. Make Changes
- Edit HTML, CSS, or JavaScript files as needed
- Keep file naming conventions consistent
- Test changes locally before submitting

### 4. Test Locally
```bash
python run-server.bat
```
Then open `http://localhost:8000` in your browser.

### 5. Commit Changes
```bash
git add .
git commit -m "Brief description of changes"
```

Use clear commit messages:
- `Add alumni gallery page`
- `Fix mobile responsive design`
- `Update contact information`

### 6. Push and Create Pull Request
```bash
git push origin feature/your-feature-name
```
Then create a Pull Request on GitHub with:
- Clear title
- Description of changes
- Any related issues

## Guidelines

- **HTML/CSS**: Follow Tailwind CSS conventions used in the project
- **Images**: Keep high-quality images in respective `/photos/` folders
- **Performance**: Optimize images before uploading
- **Responsive Design**: Test on mobile, tablet, and desktop
- **Accessibility**: Ensure proper alt text for images and semantic HTML

## File Structure

```
school-website/
├── index.html                 # Main landing page
├── alumani-directory.html     # Alumni directory
├── staff.html                 # Staff page
├── management.html            # Management page
├── *-gallery.html            # Event galleries
├── New folder/
│   └── school.css            # Stylesheets
├── photos/                    # Photo directories
├── README.md                  # This file
├── LICENSE                    # MIT License
└── .gitignore               # Git ignore rules
```

## Contact

For questions or discussions about the website:
- 📧 Email: mmbhaktaschoolnet1961@gmail.com
- 📱 Phone: +91 63517 38499

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.
