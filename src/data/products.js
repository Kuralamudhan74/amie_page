// Product data for AMIE LIFE e-commerce platform
import baby_image from '../assets/baby.png';
import adult_diaper from '../assets/diaper.png';
import period_panties from '../assets/knickers.png';

export const CATEGORIES = [
  {
    id: 'all',
    name: 'All Products',
    description: 'Browse our complete collection',
    icon: 'Grid3X3'
  },
  {
    id: 'period',
    name: 'Period Underwear',
    description: 'Stylish, leak-proof underwear for confident period management',
    image: period_panties,
    icon: 'Heart'
  },
  {
    id: 'baby',
    name: 'Baby Diapers',
    description: 'Gentle, reusable protection for your little one',
    image: baby_image,
    icon: 'Baby'
  },
  {
    id: 'incontinence',
    name: 'Adult Incontinence',
    description: 'Discreet, comfortable solutions for active lifestyles',
    image: adult_diaper,
    icon: 'Shield'
  }
];

export const PRODUCTS = [
  // Period Underwear Category
  {
    id: 'period-classic-brief',
    name: 'Classic Brief',
    category: 'period',
    description: 'Everyday comfort with reliable protection for light to moderate flow days',
    price: 1299,
    absorbency: 2,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Nude', 'Navy'],
    image: period_panties,
    isNew: false,
    isComingSoon: true,
    features: [
      'Holds up to 3 tampons worth',
      'Breathable cotton gusset',
      'No-show under clothes'
    ]
  },
  {
    id: 'period-high-waist',
    name: 'High Waist Brief',
    category: 'period',
    description: 'Maximum coverage for heavy flow days and overnight protection',
    price: 1499,
    absorbency: 4,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Burgundy'],
    image: period_panties,
    isNew: true,
    isComingSoon: true,
    features: [
      'Holds up to 6 tampons worth',
      'Full coverage design',
      'Extra-wide gusset'
    ]
  },
  {
    id: 'period-bikini',
    name: 'Bikini Style',
    category: 'period',
    description: 'Low-rise style for everyday wear with moderate protection',
    price: 1199,
    absorbency: 2,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Blush', 'Navy'],
    image: period_panties,
    isNew: false,
    isComingSoon: true,
    features: [
      'Low-rise design',
      'Seamless edges',
      'Quick-dry technology'
    ]
  },
  {
    id: 'period-sports',
    name: 'Sports Performance',
    category: 'period',
    description: 'Designed for active lifestyles - gym, sports, and workouts',
    price: 1599,
    absorbency: 3,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Grey'],
    image: period_panties,
    isNew: true,
    isComingSoon: true,
    features: [
      'Moisture-wicking fabric',
      'Secure fit for movement',
      'Odor-neutralizing'
    ]
  },
  {
    id: 'period-teen',
    name: 'Teen Starter',
    category: 'period',
    description: 'Perfect for teens - comfortable, discreet, and easy to use',
    price: 999,
    absorbency: 2,
    sizes: ['XXS', 'XS', 'S', 'M'],
    colors: ['Black', 'Pink', 'Purple'],
    image: period_panties,
    isNew: false,
    isComingSoon: true,
    features: [
      'Teen-friendly sizing',
      'Fun colors available',
      'Great for beginners'
    ]
  },

  // Baby Diapers Category
  {
    id: 'baby-newborn',
    name: 'Newborn Diaper',
    category: 'baby',
    description: 'Gentle protection for newborns 0-3 months with umbilical cutout',
    price: 899,
    absorbency: 3,
    sizes: ['Newborn', 'Size 1'],
    image: baby_image,
    isNew: false,
    isComingSoon: true,
    features: [
      'Umbilical cord cutout',
      'Wetness indicator',
      'Hypoallergenic materials'
    ]
  },
  {
    id: 'baby-infant',
    name: 'Infant Diaper',
    category: 'baby',
    description: 'For active babies 3-12 months with enhanced leak protection',
    price: 999,
    absorbency: 3,
    sizes: ['Size 2', 'Size 3', 'Size 4'],
    image: baby_image,
    isNew: false,
    isComingSoon: true,
    features: [
      'Stretchy waistband',
      'Extra absorbent core',
      'Gentle on skin'
    ]
  },
  {
    id: 'baby-toddler',
    name: 'Toddler Diaper',
    category: 'baby',
    description: 'For active toddlers 1-3 years with easy pull-up design',
    price: 1099,
    absorbency: 4,
    sizes: ['Size 4', 'Size 5', 'Size 6'],
    image: baby_image,
    isNew: true,
    isComingSoon: true,
    features: [
      'Pull-up design',
      'All-night protection',
      'Easy to change'
    ]
  },

  // Adult Incontinence Category
  {
    id: 'adult-light',
    name: 'Light Absorbency Brief',
    category: 'incontinence',
    description: 'Discreet protection for light bladder leaks - looks like regular underwear',
    price: 1599,
    absorbency: 1,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: adult_diaper,
    isNew: false,
    isComingSoon: true,
    features: [
      'Looks like regular underwear',
      'Odor-neutralizing',
      'Quick-dry technology'
    ]
  },
  {
    id: 'adult-moderate',
    name: 'Moderate Absorbency Brief',
    category: 'incontinence',
    description: 'Reliable protection for moderate incontinence with all-day comfort',
    price: 1799,
    absorbency: 3,
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    image: adult_diaper,
    isNew: false,
    isComingSoon: true,
    features: [
      'All-day protection',
      'Breathable fabric',
      'Secure fit'
    ]
  },
  {
    id: 'adult-overnight',
    name: 'Overnight Protection',
    category: 'incontinence',
    description: 'Maximum absorbency for overnight use - sleep worry-free',
    price: 1999,
    absorbency: 4,
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    image: adult_diaper,
    isNew: true,
    isComingSoon: true,
    features: [
      '12-hour protection',
      'Extra wide coverage',
      'Leak barriers'
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: 'Aruna',
    role: 'Working Professional',
    content: 'Over the last three years, this period underwear has become an indispensable part of my routine. It is a source of confidence for me, drastically simplifying those days. The product delivers excellent coverage, and the fact that it has not stained once, which proves its quality. It is a wonderful, sustainable solution that I can confidently reuse. Happy that I found this!',
    rating: 5
  },
  {
    name: 'Hitha 13Yrs',
    role: 'Tennis Player',
    content: 'I started using AMIE period panties from the very first time I got my period—I\'ve never used pads! I play tennis almost every day, and these are just perfect for me. They feel exactly like my regular sports shorts—soft, stretchable, and super comfortable. I can move freely, play long matches, and never worry about leaks or discomfort. Choosing reusable period panties has been the best and most comfortable decision ever!',
    rating: 5
  },
  {
    name: 'Lekha 32Yrs',
    role: 'Fitness Coach & Weightlifter',
    content: 'I used to experience small leaks every time I lifted heavy at the gym, and it was honestly embarrassing. I tried using sanitary pads, but they felt bulky, shifted during workouts, and made me self-conscious. Then I discovered AMIE reusable period panties—and I\'ve never looked back. They feel just like my regular gym wear, stay perfectly in place, and keep me completely dry and comfortable no matter how intense my workout gets. Now I lift with total confidence, without worrying about leaks or discomfort!',
    rating: 5
  }
];

export const STATS = [
  { icon: 'Award', number: '4x', label: 'Faster Absorption' },
  { icon: 'Users', number: '200+', label: 'Early Adopters' },
  { icon: 'Calendar', number: '3 Yrs', label: 'of Research and Development' },
  { icon: 'Zap', number: '5+', label: 'rounds of Piloting' }
];

export const TEAM_MEMBERS = [
  {
    name: 'Founder',
    role: 'CEO & Founder',
    bio: 'Passionate about creating sustainable solutions for everyday challenges.',
    image: null
  }
];

export const MILESTONES = [
  {
    year: '2022',
    title: 'The Beginning',
    description: 'AMIE was founded with a vision to revolutionize leak protection through sustainable innovation.'
  },
  {
    year: '2023',
    title: 'R&D Phase',
    description: 'Intensive research and development of our proprietary absorption technology began.'
  },
  {
    year: '2024',
    title: 'Pilot Program',
    description: '200+ early adopters tested our products through 5+ rounds of piloting with excellent feedback.'
  },
  {
    year: '2025',
    title: 'Launch Preparation',
    description: 'Finalizing our product line and preparing for market launch.'
  }
];

export const VALUES = [
  {
    title: 'Sustainability',
    description: 'Every product we create is designed with the planet in mind - reusable, eco-friendly, and built to last.',
    icon: 'Leaf'
  },
  {
    title: 'Innovation',
    description: 'We push the boundaries of absorption technology to deliver superior performance.',
    icon: 'Lightbulb'
  },
  {
    title: 'Comfort',
    description: 'Our products feel like your regular underwear - soft, breathable, and designed for real life.',
    icon: 'Heart'
  },
  {
    title: 'Dignity',
    description: 'We believe everyone deserves to live confidently at every stage of life, without compromise.',
    icon: 'Shield'
  }
];
