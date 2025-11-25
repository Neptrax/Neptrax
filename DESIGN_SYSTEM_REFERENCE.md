# Design System Quick Reference

## Color Palette

### Primary Colors
```css
#2563eb  /* Primary Blue - Main brand color */
#1e3a8a  /* Dark Blue - Gradients, hover states */
#3b82f6  /* Light Blue - Accents */
#60a5fa  /* Lighter Blue - Highlights */
```

### Background Colors
```css
#0d1117  /* Main background */
#1e293b  /* Card background */
#111827  /* Section alternate background */
#0f172a  /* Dark sections */
```

### Text Colors
```css
#f1f5f9  /* Primary text (headings, important text) */
#94a3b8  /* Secondary text (body, descriptions) */
#64748b  /* Tertiary text (captions, labels) */
```

### Border Colors
```css
#334155  /* Default borders */
#2563eb  /* Active/hover borders */
rgba(255,255,255,0.1)  /* Subtle borders */
```

## Typography

### Font Family
```css
font-family: 'DM Sans', sans-serif;
```

### Heading Scales
```jsx
// Hero heading
<h1 className="text-heading-1">
  4xl → 5xl → 6xl → 7xl (mobile → desktop)
</h1>

// Section heading
<h2 className="text-heading-2">
  3xl → 4xl → 5xl → 6xl
</h2>

// Subsection heading
<h3 className="text-heading-3">
  2xl → 3xl → 4xl
</h3>
```

### Body Text
```jsx
// Large body text
<p className="text-body-large">
  lg → xl → 2xl
</p>

// Standard body text
<p className="text-body">
  base → lg
</p>
```

## Button Styles

### Primary Button
```jsx
<button className="btn-primary-consistent">
  Book a Call
</button>
```
- Blue gradient background
- White text
- Glow effect on hover
- 44px minimum height

### Secondary Button
```jsx
<button className="btn-secondary-consistent">
  Learn More
</button>
```
- Blue border
- Blue text
- Fills on hover
- 44px minimum height

### Ghost Button
```jsx
<button className="btn-ghost-consistent">
  View Details
</button>
```
- Transparent background
- White border
- Subtle fill on hover

## Card Styles

### Hoverable Card
```jsx
<div className="card-hoverable">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```
- Dark background
- Lifts on hover (-8px)
- Blue border on hover
- Glow shadow

### Glass Card
```jsx
<div className="card-glass">
  <h3>Glassmorphic Card</h3>
  <p>Semi-transparent with blur</p>
</div>
```
- Backdrop blur effect
- Semi-transparent background
- Subtle border

## Layout Utilities

### Responsive Container
```jsx
<div className="container-responsive">
  // Max-width: 1280px (7xl)
  // Responsive padding
</div>
```

### Section Padding
```jsx
<section className="section-padding">
  // py-12 → py-16 → py-20 → py-24
</section>

<section className="section-padding-small">
  // py-8 → py-12 → py-16
</section>
```

### Responsive Grids
```jsx
// 1 column on all devices
<div className="grid-responsive-1 grid-gap">

// 1 col mobile, 2 col tablet+
<div className="grid-responsive-2 grid-gap">

// 1 col mobile, 2 tablet, 3 desktop
<div className="grid-responsive-3 grid-gap">

// 1 mobile, 2 tablet, 3 large, 4 xl
<div className="grid-responsive-4 grid-gap">
```

## Gradients

### Text Gradient
```jsx
<h1 className="gradient-text-primary">
  Gradient Text
</h1>
```

### Background Gradients
```jsx
// Primary gradient
<div className="gradient-bg-primary">

// Secondary gradient
<div className="gradient-bg-secondary">
```

## Interactive States

### Hover Effects
```jsx
// Lift effect
<div className="hover-lift">

// Scale effect
<div className="hover-scale">

// Glow effect
<div className="hover-glow">
```

### Focus States
```jsx
<button className="focus-ring">
  // Adds blue focus ring for accessibility
</button>
```

## Shadows

### Standard Shadows
```css
shadow-card        /* 0 4px 20px rgba(0,0,0,0.2) */
shadow-card-hover  /* 0 8px 30px rgba(0,0,0,0.3) */
```

### Glow Shadows
```css
shadow-glow-sm  /* 0 0 10px blue */
shadow-glow     /* 0 0 20px blue */
shadow-glow-md  /* 0 0 30px blue */
shadow-glow-lg  /* 0 0 40px blue */
shadow-glow-xl  /* 0 0 60px blue */
```

## Animations

### Built-in Animations
```jsx
// Fade in
<div className="animate-fade-in">

// Slide up
<div className="animate-slide-up">

// Float
<div className="animate-float">

// Glow pulse
<div className="animate-glow-pulse">

// Shimmer
<div className="animate-shimmer">
```

## Spacing Scale

### Tailwind Spacing
```css
0.5 = 2px    4 = 16px   10 = 40px
1 = 4px      5 = 20px   12 = 48px
2 = 8px      6 = 24px   16 = 64px
3 = 12px     8 = 32px   20 = 80px
```

### Custom Spacing
```css
18 = 72px (4.5rem)
88 = 352px (22rem)
112 = 448px (28rem)
128 = 512px (32rem)
```

## Border Radius

```css
rounded-lg   = 8px
rounded-xl   = 12px
rounded-2xl  = 16px
rounded-3xl  = 24px
rounded-4xl  = 32px  (custom)
rounded-5xl  = 40px  (custom)
rounded-full = 9999px
```

## Breakpoints

```css
xs:   480px   /* Extra small */
sm:   640px   /* Small */
md:   768px   /* Medium */
lg:   1024px  /* Large */
xl:   1280px  /* Extra large */
2xl:  1536px  /* 2X large */
3xl:  1920px  /* Ultra wide (custom) */
```

## Common Patterns

### Hero Section
```jsx
<section className="min-h-screen flex items-center">
  <div className="container-responsive">
    <h1 className="text-heading-1 mb-6">
      Hero Title
    </h1>
    <p className="text-body-large mb-8">
      Hero description
    </p>
    <button className="btn-primary-consistent">
      CTA Button
    </button>
  </div>
</section>
```

### Feature Grid
```jsx
<section className="section-padding bg-[#111827]">
  <div className="container-responsive">
    <h2 className="text-heading-2 text-center mb-12">
      Features
    </h2>
    <div className="grid-responsive-3 grid-gap">
      {features.map(feature => (
        <div key={feature.id} className="card-hoverable">
          <h3 className="text-xl font-bold mb-3">
            {feature.title}
          </h3>
          <p className="text-body">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
```

### CTA Section
```jsx
<section className="gradient-bg-secondary section-padding">
  <div className="container-responsive text-center">
    <h2 className="text-heading-2 mb-6">
      Ready to Get Started?
    </h2>
    <p className="text-body-large mb-8">
      Join thousands of satisfied customers
    </p>
    <button className="btn-primary-consistent">
      Get Started
    </button>
  </div>
</section>
```

## Accessibility Guidelines

### Contrast Ratios
- Large text (24px+): Minimum 3:1
- Normal text: Minimum 4.5:1
- UI components: Minimum 3:1

### Touch Targets
- Minimum size: 44x44px
- Spacing between targets: 8px

### Focus States
- Always visible
- High contrast
- Consistent styling

### ARIA Labels
```jsx
<button aria-label="Close menu">
  <X size={24} />
</button>
```

## Performance Tips

1. Use GPU-accelerated properties (transform, opacity)
2. Avoid animating width/height
3. Use will-change sparingly
4. Optimize images for device size
5. Lazy load below-fold content
6. Minimize repaints/reflows

## Testing Checklist

- [ ] Mobile (320px, 375px, 414px)
- [ ] Tablet (768px, 834px, 1024px)
- [ ] Laptop (1280px, 1440px)
- [ ] Desktop (1920px+)
- [ ] Portrait orientation
- [ ] Landscape orientation
- [ ] Touch interactions
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Reduced motion preference
- [ ] Color contrast validation
