import { clsx } from 'clsx';

export function cn(...inputs) {
  return clsx(inputs);
}

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Science', href: '#science' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Products', href: '#products' },
  { name: 'Waitlist', href: '#waitlist' },
];

export const FEATURES = [
  {
    icon: 'Droplets',
    title: 'High Absorbency',
    description: 'superior protection you can rely on',
    color: 'text-blue-400'
  },
  {
    icon: 'Leaf',
    title: 'Sustainable by design',
    description: 'reusable solutions that reduce waste',
    color: 'text-green-400'
  },
  {
    icon: 'Shield',
    title: 'Leakproof innovation',
    description: 'advanced absorbency you can trust',
    color: 'text-red-400'
  },
  {
    icon: 'Cloud',
    title: 'Everyday comfort',
    description: 'sleek, discreet, and made for real life',
    color: 'text-gray-300'
  },
  {
    icon: 'Sparkles',
    title: 'Future-focused',
    description: 'protecting people and the planet',
    color: 'text-purple-400'
  },
  {
    icon: 'Waves',
    title: 'One solution for every flow',
    description: 'adaptable protection for all needs',
    color: 'text-blue-400'
  }
];

export const PRODUCTS = [
  {
    icon: 'Baby',
    title: 'Baby diapers',
    description: 'Gentle, reusable protection for your little one\'s delicate skin',
    color: 'text-yellow-400'
  },
  {
    icon: 'Shirt',
    title: 'Adult incontinence wearables',
    description: 'Discreet, comfortable solutions for active adult lifestyles',
    color: 'text-blue-400'
  },
  {
    icon: 'Heart',
    title: 'Teen and women period panties',
    description: 'Stylish, leak-proof underwear for confident period management',
    color: 'text-pink-400'
  }
];

export const SOCIAL_LINKS = [
  { name: 'Instagram', icon: 'Camera', href: '#' },
  { name: 'Twitter', icon: 'Twitter', href: '#' },
  { name: 'LinkedIn', icon: 'Linkedin', href: '#' },
];
