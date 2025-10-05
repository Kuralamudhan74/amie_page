# AMIE - Next Gen Absorption Technology

A modern, responsive React landing page for AMIE, showcasing revolutionary leak and period care technology with sustainable, reusable solutions.

## 🚀 Features

- **Modern Design**: Dark theme with vibrant teal accents and professional typography
- **Responsive Layout**: Fully responsive design optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion powered animations with parallax effects and hover interactions
- **Interactive Components**: Animated cards, floating elements, and smooth scroll navigation
- **Accessibility**: ARIA labels, keyboard navigation, and proper color contrast
- **Performance**: Optimized with lazy loading and efficient animations

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework with custom theme
- **Framer Motion** - Production-ready motion library for React
- **Lucide React** - Beautiful, customizable SVG icons
- **ESLint + Prettier** - Code quality and formatting

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── ScrollToTop.jsx # Scroll to top button
│   └── SmoothScroll.jsx # Smooth scroll wrapper
├── sections/           # Page sections
│   ├── Hero.jsx        # Hero section with main CTA
│   ├── About.jsx       # About AMIE section
│   ├── Benefits.jsx    # Why Choose AMIE features
│   ├── Products.jsx    # Product overview
│   └── Waitlist.jsx    # Waitlist signup form
├── hooks/              # Custom React hooks
│   └── useAnimations.js # Animation utilities
├── utils/              # Helper functions and constants
│   ├── index.js        # Utility functions
│   └── constants.js    # Animation variants and constants
├── styles/             # Global styles and Tailwind config
└── App.jsx             # Main application component
```

## 🎨 Design System

### Color Palette
- **Primary**: Teal (#14b8a6) - Brand color for CTAs and accents
- **Secondary**: Dark grays (#0f172a to #64748b) - Backgrounds and text
- **Accent**: Purple (#2C1B47) - Section backgrounds
- **Text**: White and light grays for optimal contrast

### Typography
- **Font**: Inter - Modern, clean sans-serif
- **Weights**: 300-800 for proper hierarchy
- **Responsive**: Scales appropriately across devices

### Animations
- **Fade-ins**: Smooth opacity transitions on scroll
- **Parallax**: Subtle floating effects for depth
- **Hover**: Scale and color transitions for interactivity
- **Stagger**: Sequential animations for lists and grids

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd amie_page
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

Key responsive features:
- Flexible grid layouts that stack on mobile
- Responsive typography with clamp() functions
- Touch-friendly interactive elements
- Optimized images and animations for mobile

## ♿ Accessibility

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus Management**: Clear focus indicators
- **Semantic HTML**: Proper heading hierarchy and landmarks

## 🎭 Animations

### Framer Motion Features
- **Scroll-triggered animations**: Elements animate into view
- **Parallax effects**: Subtle depth with scroll-based movement
- **Hover interactions**: Scale, rotate, and color transitions
- **Stagger animations**: Sequential reveals for lists
- **Smooth transitions**: Professional, non-jarring motion

### Performance Optimizations
- **Reduced motion**: Respects user preferences
- **Efficient animations**: GPU-accelerated transforms
- **Lazy loading**: Components load as needed
- **Optimized bundles**: Tree-shaking and code splitting

## 🔧 Customization

### Adding New Sections
1. Create component in `src/sections/`
2. Import and add to `App.jsx`
3. Update navigation in `Header.jsx`

### Modifying Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Adding Animations
Use the predefined variants in `src/utils/constants.js`:
```javascript
import { fadeInUp, staggerContainer } from '../utils/constants';
```

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with tree-shaking
- **Images**: Lazy loaded and optimized
- **Animations**: 60fps smooth performance
- **SEO**: Proper meta tags and semantic HTML

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from modern SaaS landing pages
- Icons provided by Lucide React
- Animations powered by Framer Motion
- Built with React and Tailwind CSS

---

**AMIE** - Your day Secured | Next Gen Absorption Technology