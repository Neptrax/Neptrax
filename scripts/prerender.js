import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { JSDOM } from 'jsdom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distPath = join(__dirname, '../dist');

// Routes to prerender
const routes = [
  { path: '/', section: 'home' },
  { path: '/services', section: 'services' },
  { path: '/portfolio', section: 'portfolio' },
  { path: '/about', section: 'about' },
  { path: '/contact', section: 'contact' },
  { path: '/faqs', section: 'faqs' },
  { path: '/privacy', section: 'privacy' },
  { path: '/security', section: 'security' },
];

// Read the base index.html
const indexPath = join(distPath, 'index.html');
if (!existsSync(indexPath)) {
  console.error('❌ dist/index.html not found. Run "npm run build" first.');
  process.exit(1);
}

const baseHtml = readFileSync(indexPath, 'utf-8');

console.log('🚀 Starting prerendering...\n');

routes.forEach(({ path, section }) => {
  try {
    // Create enhanced HTML with meta tags for SEO
    const enhancedHtml = enhanceHtmlForRoute(baseHtml, section);

    // Determine output path
    const outputPath = path === '/'
      ? join(distPath, 'index.html')
      : join(distPath, path, 'index.html');

    // Create directory if needed
    const outputDir = dirname(outputPath);
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    // Write the file
    writeFileSync(outputPath, enhancedHtml, 'utf-8');
    console.log(`✅ Generated: ${path === '/' ? '/' : path + '/'}`);
  } catch (error) {
    console.error(`❌ Failed to generate ${path}:`, error.message);
  }
});

console.log('\n✨ Prerendering complete!');

function enhanceHtmlForRoute(html, section) {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Get route-specific metadata
  const metadata = getRouteMetadata(section);

  // Update title
  const titleTag = document.querySelector('title');
  if (titleTag) {
    titleTag.textContent = metadata.title;
  }

  // Update or create meta description
  let descTag = document.querySelector('meta[name="description"]');
  if (!descTag) {
    descTag = document.createElement('meta');
    descTag.setAttribute('name', 'description');
    document.head.appendChild(descTag);
  }
  descTag.setAttribute('content', metadata.description);

  // Add Open Graph tags
  updateOrCreateMetaTag(document, 'og:title', metadata.title);
  updateOrCreateMetaTag(document, 'og:description', metadata.description);
  updateOrCreateMetaTag(document, 'og:type', 'website');
  updateOrCreateMetaTag(document, 'og:url', `https://neptrax.com${section === 'home' ? '' : `/${section}`}`);

  // Add Twitter Card tags
  updateOrCreateMetaTag(document, 'twitter:card', 'summary_large_image', 'name');
  updateOrCreateMetaTag(document, 'twitter:title', metadata.title, 'name');
  updateOrCreateMetaTag(document, 'twitter:description', metadata.description, 'name');

  // Add canonical link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', `https://neptrax.com${section === 'home' ? '' : `/${section}`}`);

  // Add schema.org structured data
  addStructuredData(document, section, metadata);

  // Set initial state in a script tag for hydration
  const stateScript = document.createElement('script');
  stateScript.textContent = `window.__INITIAL_SECTION__ = '${section}';`;
  document.head.appendChild(stateScript);

  return dom.serialize();
}

function updateOrCreateMetaTag(document, property, content, attributeName = 'property') {
  let tag = document.querySelector(`meta[${attributeName}="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attributeName, property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function addStructuredData(document, section, metadata) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: metadata.title,
    description: metadata.description,
    url: `https://neptrax.com${section === 'home' ? '' : `/${section}`}`,
    publisher: {
      '@type': 'Organization',
      name: 'Neptrax',
      url: 'https://neptrax.com',
      logo: 'https://neptrax.com/logo.png'
    }
  };

  if (section === 'home') {
    structuredData['@type'] = 'Organization';
    structuredData.name = 'Neptrax';
    structuredData.alternateName = 'Neptrax Web Development';
    structuredData.description = metadata.description;
  }

  const scriptTag = document.createElement('script');
  scriptTag.setAttribute('type', 'application/ld+json');
  scriptTag.textContent = JSON.stringify(structuredData);
  document.head.appendChild(scriptTag);
}

function getRouteMetadata(section) {
  const metadata = {
    home: {
      title: 'Neptrax | Custom Website & App Development | AI Solutions',
      description: 'Professional web development, custom websites, mobile apps, and AI solutions. Based in Chicago, serving clients nationwide with modern, high-performance digital experiences.'
    },
    services: {
      title: 'Our Services | Web Development & AI Solutions | Neptrax',
      description: 'Custom website design, full-stack development, AI chatbots, SEO optimization, mobile apps, and e-commerce solutions. Comprehensive digital services for business growth.'
    },
    portfolio: {
      title: 'Portfolio | Our Work & Projects | Neptrax',
      description: 'Explore our portfolio of successful web development projects across various industries. From e-commerce to corporate websites, see our proven results.'
    },
    about: {
      title: 'About Us | Chicago Web Development Agency | Neptrax',
      description: 'Based in Chicago since 2018, Neptrax delivers professional web development and digital solutions. Learn about our mission, values, and commitment to client success.'
    },
    contact: {
      title: 'Contact Us | Get in Touch | Neptrax',
      description: 'Ready to start your project? Contact Neptrax for custom web development, app design, and digital solutions. Schedule a free consultation today.'
    },
    faqs: {
      title: 'FAQs | Frequently Asked Questions | Neptrax',
      description: 'Find answers to common questions about our web development services, project timelines, pricing, and process. Get the information you need to get started.'
    },
    privacy: {
      title: 'Privacy Policy | Neptrax',
      description: 'Learn how Neptrax collects, uses, and protects your personal information. Our commitment to privacy and data security.'
    },
    security: {
      title: 'Security Policy | Neptrax',
      description: 'Our comprehensive security measures including data encryption, secure infrastructure, and regular audits to protect your information.'
    }
  };

  return metadata[section] || metadata.home;
}