const fs = require('fs');
const path = require('path');

// SEO data for each category
const SEO_DATA = {
  buttons: {
    title: "React Buttons for AI & Vibe Coding | Motionary",
    description: "Copy-paste production-ready Button components optimized for Cursor, v0, and AI code generation. Interactive buttons with hover effects, click animations, and modern UI.",
    keywords: ["react buttons", "tailwind button", "ai coding", "vibe coding", "cursor compatible", "interactive buttons", "hover effects", "click animations", "ui components"]
  },
  cards: {
    title: "React Cards for AI & Vibe Coding | Motionary",
    description: "Beautiful Card components for AI-assisted development. Copy-paste React & Tailwind cards with animations, hover effects, and responsive design.",
    keywords: ["react cards", "tailwind cards", "ai generated cards", "vibe coding", "ui cards", "animated cards", "responsive design", "component library"]
  },
  typography: {
    title: "Typography Components for AI & Vibe Coding | Motionary",
    description: "Dynamic Typography components optimized for AI coding tools. Animated text effects, gradient fonts, and modern typographic designs for React apps.",
    keywords: ["react typography", "animated text", "ai coding", "vibe coding", "text effects", "gradient fonts", "modern typography", "cursor components"]
  },
  navigation: {
    title: "Navigation Components for AI & Vibe Coding | Motionary",
    description: "Modern Navigation components for AI-assisted development. Menus, breadcrumbs, and nav bars with smooth animations and interactive effects.",
    keywords: ["react navigation", "ui menus", "ai generated nav", "vibe coding", "animated menus", "interactive navigation", "responsive nav", "component library"]
  },
  backgrounds: {
    title: "Background Components for AI & Vibe Coding | Motionary",
    description: "Dynamic Background components with gradients, particles, and animations. Perfect for AI-generated interfaces and modern web design.",
    keywords: ["react backgrounds", "animated backgrounds", "ai coding", "vibe coding", "gradient backgrounds", "particle effects", "modern design", "ui backgrounds"]
  },
  data: {
    title: "Data Visualization Components for AI & Vibe Coding | Motionary",
    description: "Interactive Data Visualization components for AI coding. Charts, graphs, and data displays with smooth animations and modern aesthetics.",
    keywords: ["data visualization", "react charts", "ai generated viz", "vibe coding", "interactive charts", "animated graphs", "ui data", "visual components"]
  },
  feedback: {
    title: "Feedback Components for AI & Vibe Coding | Motionary",
    description: "User Feedback components optimized for AI development. Toasts, notifications, alerts, and loading states with engaging animations.",
    keywords: ["react feedback", "ui notifications", "ai coding", "vibe coding", "toast messages", "loading states", "alert components", "user feedback"]
  },
  social: {
    title: "Social Components for AI & Vibe Coding | Motionary",
    description: "Social Media components for modern web apps. Share buttons, social feeds, and interaction elements designed for AI-assisted coding.",
    keywords: ["react social", "social media ui", "ai generated social", "vibe coding", "share buttons", "social feeds", "interactive social", "web components"]
  },
  inputs: {
    title: "Input Components for AI & Vibe Coding | Motionary",
    description: "Form Input components with animations and modern design. Text fields, selects, checkboxes optimized for AI code generation and Cursor compatibility.",
    keywords: ["react inputs", "form components", "ai coding", "vibe coding", "animated inputs", "modern forms", "ui inputs", "cursor compatible"]
  },
  loaders: {
    title: "Loading Components for AI & Vibe Coding | Motionary",
    description: "Beautiful Loading and Spinner components. Skeleton loaders, progress bars, and loading states designed for modern AI-generated interfaces.",
    keywords: ["react loaders", "loading animations", "ai generated loaders", "vibe coding", "spinner components", "skeleton loaders", "progress bars", "ui loading"]
  },
  images: {
    title: "Image Components for AI & Vibe Coding | Motionary",
    description: "Image and Gallery components with hover effects and animations. Optimized for AI coding workflows and modern responsive design.",
    keywords: ["react images", "image galleries", "ai coding", "vibe coding", "hover effects", "responsive images", "animated galleries", "ui images"]
  },
  ecom: {
    title: "Ecommerce Components for AI & Vibe Coding | Motionary",
    description: "Ecommerce UI components for AI-assisted development. Product cards, shopping carts, and checkout flows with smooth animations.",
    keywords: ["react ecommerce", "shopping cart", "ai generated ecom", "vibe coding", "product cards", "checkout ui", "commerce components", "animated shopping"]
  },
  game: {
    title: "Gamification Components for AI & Vibe Coding | Motionary",
    description: "Gamification UI components for modern apps. Badges, progress indicators, and game-like elements designed for AI code generation.",
    keywords: ["react gamification", "game ui", "ai coding", "vibe coding", "progress indicators", "badges", "game components", "interactive ui"]
  },
  media: {
    title: "Media Components for AI & Vibe Coding | Motionary",
    description: "Media Player components with animations. Video players, audio controls, and media interfaces optimized for modern web applications.",
    keywords: ["react media", "video players", "ai generated media", "vibe coding", "audio controls", "media ui", "animated players", "web media"]
  },
  device: {
    title: "Device UI Components for AI & Vibe Coding | Motionary",
    description: "Device and Mobile UI components. Phone frames, device mockups, and mobile interfaces designed for AI-assisted development.",
    keywords: ["react device ui", "mobile components", "ai coding", "vibe coding", "device mockups", "mobile ui", "responsive design", "ui components"]
  },
  transitions: {
    title: "Transition Components for AI & Vibe Coding | Motionary",
    description: "Page Transition and Animation components. Smooth transitions, page loaders, and navigation animations for modern React apps.",
    keywords: ["react transitions", "page transitions", "ai generated animations", "vibe coding", "smooth transitions", "navigation animations", "ui transitions", "component library"]
  },
  micro: {
    title: "Micro-Interactions for AI & Vibe Coding | Motionary",
    description: "Micro-Interaction components for detailed UI polish. Hover states, click feedback, and subtle animations optimized for AI coding workflows.",
    keywords: ["micro interactions", "ui animations", "ai coding", "vibe coding", "hover states", "click feedback", "subtle animations", "react components"]
  }
};

// Function to update metadata in a page file
function updatePageMetadata(category, seoData) {
  const pagePath = path.join(__dirname, '..', 'src', 'app', category, 'page.tsx');

  if (!fs.existsSync(pagePath)) {
    console.log(`Skipping ${category} - page not found`);
    return;
  }

  let content = fs.readFileSync(pagePath, 'utf8');

  // Find the metadata export
  const metadataRegex = /export const metadata: Metadata = \{[\s\S]*?\};/;
  const match = content.match(metadataRegex);

  if (!match) {
    console.log(`No metadata found in ${category}`);
    return;
  }

  // Create new metadata
  const newMetadata = `export const metadata: Metadata = {
  title: "${seoData.title}",
  description: "${seoData.description}",
  keywords: ${JSON.stringify(seoData.keywords)},
};`;

  // Replace the old metadata
  content = content.replace(metadataRegex, newMetadata);

  // Write back to file
  fs.writeFileSync(pagePath, content, 'utf8');
  console.log(`Updated SEO for ${category}`);
}

// Main execution
console.log('Starting SEO metadata updates...');

Object.entries(SEO_DATA).forEach(([category, seoData]) => {
  updatePageMetadata(category, seoData);
});

console.log('SEO metadata updates completed!');





