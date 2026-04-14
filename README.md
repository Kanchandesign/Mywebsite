# My Portfolio Website

A modern, responsive portfolio website built with React and Vite.

## Features

✨ **Modern Design**
- Beautiful gradient background
- Smooth animations and transitions
- Fully responsive layout (mobile, tablet, desktop)

📁 **Main Sections**
- **Projects**: Showcase your work with project cards, descriptions, and tech stack
- **About**: Tell your story with a profile section and skills breakdown
- **Resume**: Display your professional experience, education, and certifications

🎨 **Components**
- Header with navigation
- Project showcase with hover effects
- About section with skills categories
- Resume/CV section with timeline
- Footer with social links

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kanchandesign/Mywebsite.git
   cd Mywebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The site will open automatically at `http://localhost:3000`

## Customization

### Update Your Information

1. **Header & Navigation**
   - Edit the logo text in `src/components/Header.jsx`

2. **Projects Section**
   - Update the projects array in `src/components/Projects.jsx`
   - Add your actual project links, descriptions, and images

3. **About Section**
   - Update the bio text in `src/components/About.jsx`
   - Add your profile image URL
   - Update skills categories and items
   - Add your social media links

4. **Resume Section**
   - Update experience entries in `src/components/Resume.jsx`
   - Add your education details
   - List your certifications
   - Replace placeholder PDF link with your actual resume

5. **Footer**
   - Update social links and email in `src/components/Footer.jsx`

### Styles

- Global styles: `src/index.css`
- Component styles: Individual `.css` files in `src/components/`
- Colors: Primary gradient is `#667eea` to `#764ba2` - easily customizable

## Building for Production

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Preview the production build**
   ```bash
   npm run preview
   ```

   The optimized files will be in the `dist/` directory

## Deployment

The built `dist/` folder can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

### Deploy to Netlify (recommended)
```bash
npm run build
# Drag and drop the dist folder to Netlify
```

### Deploy to GitHub Pages
Add this to your `package.json`:
```json
"homepage": "https://yourusername.github.io/Mywebsite"
```

## Project Structure

```
Mywebsite/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Resume.jsx
│   │   ├── Resume.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients, animations, and flexbox/grid
- **JavaScript** - Interactivity

## Tips for Content

### Adding Projects
Edit the projects array in `Projects.jsx`:
```javascript
{
  id: 1,
  title: 'Your Project Title',
  description: 'Brief description of what this project does',
  technologies: ['React', 'Node.js', 'MongoDB'],
  link: 'https://github.com/yourusername/project',
  image: 'https://your-image-url.com/project.jpg'
}
```

### Adding Experience
Edit the experience array in `Resume.jsx`:
```javascript
{
  id: 1,
  title: 'Your Job Title',
  company: 'Company Name',
  duration: '2023 - Present',
  description: 'What you did and accomplished'
}
```

## License

This project is open source and available under the ISC License.

## Support

For questions or issues, please open an issue on the GitHub repository.

---

**Happy coding! 🚀** Make it your own and showcase your amazing work!