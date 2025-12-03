/* Services.module.css */

/* ============================================
   SERVICES GRADIENT SECTION - EXACT FROM ORIGINAL
   ============================================ */

/* This is the exact gradient from your original code */
.servicesGradientSection {
  background: linear-gradient(
    180deg,
    #000005 0%,
    #040a16 12%,
    #070f1f 25%,
    #0a1528 40%,
    #0a1528 60%,
    #070f1f 75%,
    #040a16 88%,
    #000005 100%
  );
  position: relative;
}

.servicesGradientSection::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at top,
    rgba(13, 26, 48, 0.3) 0%,
    transparent 60%
  );
  pointer-events: none;
  z-index: 1;
}

.servicesGradientSection > div {
  position: relative;
  z-index: 2;
}

/* Inter font family for all text in the gradient section */
.servicesGradientSection * {
  font-family: 'Inter', 'DM Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ============================================
   MINIMALIST GALLERY ANIMATIONS (from original)
   ============================================ */

.minimalServiceItem {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.serviceVisible {
  animation: serviceReveal 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes serviceReveal {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes numberSlide {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes lineExpand {
  from {
    width: 0;
  }
  to {
    width: 4rem;
  }
}

/* Number animation when visible */
.minimalServiceItem.serviceVisible > div:first-child > div:first-child {
  animation: numberSlide 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* Line expansion on reveal */
.minimalServiceItem.serviceVisible .minimal-line {
  animation: lineExpand 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
}

/* Stagger delays for sequential animation */
.minimalServiceItem:nth-child(1) { animation-delay: 0s; }
.minimalServiceItem:nth-child(2) { animation-delay: 0.1s; }
.minimalServiceItem:nth-child(3) { animation-delay: 0.2s; }
.minimalServiceItem:nth-child(4) { animation-delay: 0.3s; }
.minimalServiceItem:nth-child(5) { animation-delay: 0.4s; }
.minimalServiceItem:nth-child(6) { animation-delay: 0.5s; }
.minimalServiceItem:nth-child(7) { animation-delay: 0s; }
.minimalServiceItem:nth-child(8) { animation-delay: 0.1s; }
.minimalServiceItem:nth-child(9) { animation-delay: 0.2s; }
.minimalServiceItem:nth-child(10) { animation-delay: 0.3s; }
.minimalServiceItem:nth-child(11) { animation-delay: 0.4s; }
.minimalServiceItem:nth-child(12) { animation-delay: 0.5s; }

/* ============================================
   REVEAL ANIMATIONS (from original)
   ============================================ */

.revealUp {
  opacity: 0;
  transform: translateY(18px);
  transition: transform 0.7s cubic-bezier(0.2, 0.9, 0.2, 1), opacity 0.6s;
}

.inView {
  opacity: 1;
  transform: translateY(0);
}

/* ============================================
   GLOW TEXT ANIMATION (from original)
   ============================================ */

@keyframes glowText {
  0%, 100% {
    text-shadow:
      0 0 20px rgba(34, 211, 238, 0.5),
      0 0 40px rgba(34, 211, 238, 0.3),
      0 0 60px rgba(34, 211, 238, 0.2);
  }
  50% {
    text-shadow:
      0 0 30px rgba(34, 211, 238, 0.7),
      0 0 60px rgba(34, 211, 238, 0.5),
      0 0 80px rgba(34, 211, 238, 0.3);
  }
}

.animateGlowText {
  animation: glowText 3s ease-in-out infinite;
}

/* ============================================
   BADGE ANIMATIONS (from original)
   ============================================ */

@keyframes badgePulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(0, 194, 179, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(0, 194, 179, 0);
  }
}

@keyframes dotPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.7;
  }
}

.badgePill {
  animation: badgePulse 2s ease-in-out infinite;
}

.badgeDotPulse {
  animation: dotPulse 1.5s ease-in-out infinite;
}

/* ============================================
   RESPONSIVE BREAKPOINTS (from original)
   ============================================ */

@media (max-width: 1024px) {
  .minimalServiceItem {
    padding-left: 0;
  }
  
  .minimalServiceItem > div:first-child > div:first-child {
    font-size: 4rem;
  }
}

@media (max-width: 640px) {
  .minimalServiceItem > div:first-child > div:first-child {
    font-size: 3rem;
  }
}

/* ============================================
   REDUCED MOTION PREFERENCE (from original)
   ============================================ */

@media (prefers-reduced-motion: reduce) {
  .minimalServiceItem,
  .revealUp {
    opacity: 1;
    transform: none;
    transition: none;
    animation: none;
  }
  
  .serviceVisible,
  .inView {
    animation: none;
  }
  
  .animateGlowText,
  .badgePill,
  .badgeDotPulse {
    animation: none;
  }
}