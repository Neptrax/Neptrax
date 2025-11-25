# ScrollReveal Animation System - Usage Guide

## Overview
A lightweight, performant scroll animation system built with React and Intersection Observer API. Provides smooth, premium-quality animations inspired by Apple.com, Stripe, and Linear.app.

## Features
- Fade + Slide motion for text elements
- Zoom + Depth motion for images and cards
- Subtle 3D depth with perspective transforms
- Staggered animations with customizable delays
- Re-triggering animations on scroll (up and down)
- Lightweight CSS transforms (no heavy JS libraries)

## Basic Usage

```tsx
import ScrollReveal from './components/ScrollReveal';

<ScrollReveal>
  <h1>Your content here</h1>
</ScrollReveal>
```

## Props

### direction (optional)
Controls the animation direction. Default: `'up'`

**Options:**
- `'up'` - Slides up from below (best for text)
- `'down'` - Slides down from above
- `'left'` - Slides in from left
- `'right'` - Slides in from right
- `'fade'` - Simple fade-in (no slide)
- `'zoom'` - Scale animation (best for cards/images)

**Examples:**
```tsx
<ScrollReveal direction="up">
  <h1>Slides up from below</h1>
</ScrollReveal>

<ScrollReveal direction="zoom">
  <img src="..." alt="..." />
</ScrollReveal>

<ScrollReveal direction="fade">
  <p>Simple fade-in</p>
</ScrollReveal>
```

### delay (optional)
Animation delay in milliseconds. Default: `0`

**Examples:**
```tsx
<ScrollReveal delay={100}>
  <h1>Appears after 100ms</h1>
</ScrollReveal>

{items.map((item, index) => (
  <ScrollReveal key={index} delay={index * 100}>
    <div>{item}</div>
  </ScrollReveal>
))}
```

### depth (optional)
Adds 3D perspective rotation. Default: `0`

**Options:**
- `0` - No depth effect
- `1` - Light depth (5deg rotation)
- `2` - Medium depth (10deg rotation)
- `3` - Heavy depth (15deg rotation + vertical offset)

**Examples:**
```tsx
<ScrollReveal direction="up" depth={1}>
  <div className="card">Subtle 3D effect</div>
</ScrollReveal>

<ScrollReveal direction="left" depth={2}>
  <img src="..." alt="..." />
</ScrollReveal>
```

### threshold (optional)
Percentage of element visible before triggering. Default: `0.1` (10%)

```tsx
<ScrollReveal threshold={0.3}>
  <h1>Triggers when 30% visible</h1>
</ScrollReveal>
```

### resetOnExit (optional)
Re-trigger animation when scrolling back. Default: `true`

```tsx
<ScrollReveal resetOnExit={false}>
  <h1>Only animates once</h1>
</ScrollReveal>
```

### className (optional)
Additional CSS classes

```tsx
<ScrollReveal className="my-custom-class">
  <div>Content</div>
</ScrollReveal>
```

## Common Patterns

### Hero Section
```tsx
<ScrollReveal direction="up" delay={100}>
  <h1>Launch your brand online</h1>
</ScrollReveal>

<ScrollReveal direction="up" delay={200}>
  <p>Your description text</p>
</ScrollReveal>

<ScrollReveal direction="up" delay={300}>
  <button>Call to Action</button>
</ScrollReveal>
```

### Staggered Cards
```tsx
{services.map((service, index) => (
  <ScrollReveal
    key={index}
    direction="up"
    delay={index * 80}
    depth={1}
  >
    <div className="card">
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  </ScrollReveal>
))}
```

### Image with Text (Split Layout)
```tsx
<div className="grid grid-cols-2 gap-12">
  <ScrollReveal direction="left" delay={0} depth={2}>
    <img src="..." alt="..." />
  </ScrollReveal>

  <ScrollReveal direction="right" delay={150}>
    <div>
      <h2>About Us</h2>
      <p>Description text</p>
    </div>
  </ScrollReveal>
</div>
```

### Stats Counter
```tsx
{stats.map((stat, index) => (
  <ScrollReveal key={index} direction="zoom" delay={index * 100}>
    <div className="stat-card">
      <div className="number">{stat.number}</div>
      <div className="label">{stat.label}</div>
    </div>
  </ScrollReveal>
))}
```

### CTA Section
```tsx
<ScrollReveal direction="up" delay={0}>
  <h2>Ready to Start?</h2>
</ScrollReveal>

<ScrollReveal direction="fade" delay={150}>
  <p>Let's discuss your project</p>
</ScrollReveal>

<ScrollReveal direction="up" delay={250}>
  <button>Book a Call</button>
</ScrollReveal>
```

## CSS Customization

All animations are defined in `src/index.css`. You can adjust:

### Animation Speed
```css
.reveal {
  transition: all 0.9s cubic-bezier(0.25, 1, 0.5, 1);
}
```

### Distance
```css
.reveal-up {
  transform: translateY(60px) translateZ(0);
}
```

### Blur & Brightness
```css
.reveal {
  filter: blur(4px) brightness(0.8);
}

.reveal-visible {
  filter: blur(0) brightness(1);
}
```

### Depth Levels
```css
.reveal-depth-light {
  transform: perspective(1000px) rotateX(5deg);
}

.reveal-depth-medium {
  transform: perspective(1000px) rotateX(10deg);
}

.reveal-depth-heavy {
  transform: perspective(1000px) rotateX(15deg) translateY(20px);
}
```

## Performance Tips

1. Use `direction="zoom"` for images and cards
2. Use `direction="up"` or `direction="fade"` for text
3. Stagger delays by 80-150ms for smooth sequencing
4. Use `depth` sparingly (only on key elements)
5. Set `resetOnExit={false}` for heavy sections to improve performance

## Browser Support

Works on all modern browsers with Intersection Observer support:
- Chrome 51+
- Firefox 55+
- Safari 12.1+
- Edge 15+

## Accessibility

- Uses CSS transforms for GPU acceleration
- Respects `prefers-reduced-motion` (add to CSS if needed)
- No layout shift during animation
- Semantic HTML preserved

## Examples in Project

See implemented examples in:
- `src/pages/Home.tsx` - Hero section, cards, stats
- `src/components/MissionSection.tsx` - Split layouts, features grid

## Troubleshooting

**Animation not triggering:**
- Check `threshold` prop (lower values trigger earlier)
- Ensure element has content/height
- Verify parent containers don't have `overflow: hidden`

**Animation too fast/slow:**
- Adjust CSS `transition` duration in `src/index.css`

**Stagger not working:**
- Ensure each element has unique `delay` values
- Use formula: `delay={index * 80}` or similar

**Depth effect not visible:**
- Increase `depth` value (1-3)
- Ensure parent has `perspective` CSS property
