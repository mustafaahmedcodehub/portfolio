# Mustafa Ahmed - Portfolio Website

A premium, modern, and responsive personal portfolio website built with HTML5, CSS3, and Vanilla JavaScript. Features Flutter-inspired design, glassmorphism, smooth animations, and full dark/light theme support.

## Features

- **Premium Design**: Glassmorphism, soft UI, floating elements, and gradient effects
- **Fully Responsive**: Optimized for mobile, tablet, laptop, desktop, and ultra-wide screens
- **Dark/Light Theme**: Flutter-inspired dark theme with neon blue glow effects
- **Smooth Animations**: Typing effect, scroll reveal, count-up, progress bars, parallax
- **Interactive Elements**: Magnetic buttons, custom cursor, mouse glow effects
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation and ARIA labels
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, Schema.org JSON-LD
- **Performance**: Lazy loading, optimized animations, minimal JavaScript

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, grid, flexbox, backdrop-filter
- **JavaScript (ES6+)**: Modules, Intersection Observer, requestAnimationFrame
- **No Frameworks**: Pure vanilla implementation for maximum performance

## Project Structure

```
portfolio/
├── index.html                 # Main HTML file
├── robots.txt                 # SEO robots file
├── sitemap.xml                # SEO sitemap
├── site.webmanifest           # PWA manifest
├── PROTOFILE.md              # Project requirements document
├── README.md                 # This file
│
├── assets/
│   ├── css/
│   │   ├── main.css           # Main CSS entry point
│   │   ├── tokens/            # Design tokens
│   │   ├── base/              # Reset, root, globals
│   │   ├── layout/            # Container, grid, section
│   │   ├── themes/            # Light and dark themes
│   │   ├── components/        # Reusable components
│   │   ├── sections/          # Section-specific styles
│   │   ├── effects/           # Animations and effects
│   │   └── utilities/         # Utility classes
│   │
│   ├── js/
│   │   ├── main.js            # Main JavaScript entry point
│   │   ├── config.js          # Configuration constants
│   │   ├── modules/           # Feature modules
│   │   └── utils/             # Utility functions
│   │
│   ├── images/                # Image assets
│   │   ├── profile/           # Profile images
│   │   ├── projects/          # Project screenshots
│   │   ├── testimonials/      # Testimonial avatars
│   │   ├── og/                # Open Graph images
│   │   └── logo/              # Logo and icons
│   │
│   └── files/                 # Downloadable files
│       └── mustafa-ahmed-cv.pdf
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for testing)

### Installation

1. Clone or download the project
2. Open `index.html` in a web browser
3. Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

### Customization

#### Update Personal Information

Edit `index.html` to update:
- Name and title in the hero section
- About section content
- Contact information (email, phone)
- Social media links
- Project details
- Experience entries

#### Update Colors

Edit `assets/css/tokens/_colors.css` to customize:
- Primary, secondary, accent colors
- Background colors
- Text colors
- Gradient definitions

#### Update Typography

Edit `assets/css/tokens/_typography.css` to customize:
- Font families
- Type scale
- Line heights
- Letter spacing

#### Update Content

Edit `assets/js/config.js` to update:
- Typing roles array
- Skills data
- Projects data
- Services data
- Experience data

#### Replace Images

Replace placeholder images in `assets/images/`:
- `profile/mustafa-hero.webp` - Your profile photo (420x420px)
- `projects/smart-chess.webp` - Project screenshot (1200x750px)
- `projects/ecommerce-app.webp` - Project screenshot (1200x750px)
- `testimonials/nour-el-din.webp` - Testimonial avatar (200x200px)
- `og/og-image.jpg` - Open Graph image (1200x630px)
- `logo/logo.svg` - Your logo

#### Add CV

Replace `assets/files/mustafa-ahmed-cv.pdf` with your actual CV.

### Deployment

#### Static Hosting

Deploy to any static hosting service:

- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Push to a repository and enable Pages
- **AWS S3**: Upload to an S3 bucket with static hosting

#### Update Domain

Before deploying, update these files with your actual domain:

1. `index.html` - Update `canonical` URL and `og:url`
2. `sitemap.xml` - Update all URLs
3. `site.webmanifest` - Update if needed

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Performance

The website is optimized for performance:

- Lazy loading for images
- Throttled scroll handlers
- Hardware-accelerated animations
- Minimal JavaScript bundle
- CSS-only animations where possible
- Intersection Observer for efficient scroll detection

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Skip to main content link
- `prefers-reduced-motion` support
- Color contrast compliance (WCAG 2.1 AA)

## SEO

- Meta tags for search engines
- Open Graph tags for social sharing
- Twitter Card tags
- Schema.org JSON-LD structured data
- Semantic heading hierarchy
- Robots.txt and sitemap.xml

## Animations

The website includes various animations:

- **Typing Effect**: Rotating roles in hero section
- **Scroll Reveal**: Elements fade in on scroll
- **Count Up**: Statistics animate when visible
- **Progress Bars**: Skills animate when visible
- **Parallax**: Subtle depth effects on scroll
- **Magnetic Buttons**: Buttons follow cursor slightly
- **Custom Cursor**: Custom cursor on desktop
- **Background Effects**: Animated gradient mesh and particles

All animations respect `prefers-reduced-motion` and can be disabled for users who prefer reduced motion.

## Theme Switching

The website supports light and dark themes:

- Automatic detection of system preference
- Manual toggle via navbar button
- Theme persistence in localStorage
- Smooth transitions between themes

## License

This project is for personal use. Feel free to customize it for your own portfolio.

## Credits

- **Icons**: Lucide Icons (https://lucide.dev/)
- **Fonts**: Google Fonts (Plus Jakarta Sans, Inter, Great Vibes)
- **Design**: Inspired by Flutter design principles

## Contact

- **Email**: mustafaahmadkasem@gmail.com
- **Phone**: 01102495288
- **LinkedIn**: https://www.linkedin.com/in/mustafa-ahmed-9a77353b4
- **Instagram**: https://www.instagram.com/mustafaahmedkasem
- **Facebook**: https://www.facebook.com/share/1atE9Py1z5/

---

Built with ❤️ using HTML, CSS, and JavaScript
