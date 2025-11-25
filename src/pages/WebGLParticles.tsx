'use client';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const WebGLParticles = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Detect mobile device for performance optimization
    const isSmallDevice = window.innerWidth < 768;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isMobileDevice = isSmallDevice || isTouchDevice;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Mobile optimization: Disable antialiasing and reduce precision
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobileDevice,
      powerPreference: isMobileDevice ? 'low-power' : 'high-performance',
      precision: isMobileDevice ? 'mediump' : 'highp'
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Mobile optimization: Reduce pixel ratio
    renderer.setPixelRatio(isMobileDevice ? Math.min(window.devicePixelRatio, 1.5) : window.devicePixelRatio);

    mountRef.current.appendChild(renderer.domElement);

    // Mobile-optimized particle system: 80% reduction for mobile (1000 vs 5000)
    const particleCount = isMobileDevice ? 1000 : 5000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color(0x3b82f6), // blue-500
      new THREE.Color(0x60a5fa), // blue-400
      new THREE.Color(0x93c5fd), // blue-300
      new THREE.Color(0x8b5cf6), // violet-500
      new THREE.Color(0xa855f7), // violet-400
      new THREE.Color(0xc084fc), // violet-300
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Spherical distribution
      const radius = 8 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Random color from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 2 + 0.5;

      // Random velocities
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Mobile optimization: Reduce material complexity
    const material = new THREE.PointsMaterial({
      size: isMobileDevice ? 0.06 : 0.05,
      vertexColors: true,
      transparent: true,
      opacity: isMobileDevice ? 0.7 : 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      depthWrite: false,
      depthTest: !isMobileDevice
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse interaction (disabled on mobile for performance)
    const mouse = new THREE.Vector2(0, 0);
    const handleMouseMove = (event: MouseEvent) => {
      if (!isMobileDevice) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      }
    };

    if (!isMobileDevice) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Animation
    camera.position.z = 25;
    const clock = new THREE.Clock();

    // Mobile optimization: Reduce animation frame rate on mobile
    let lastFrameTime = 0;
    const targetFPS = isMobileDevice ? 30 : 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number = 0) => {
      frameRef.current = requestAnimationFrame(animate);

      // Mobile optimization: Throttle frame rate
      if (isMobileDevice) {
        const deltaTime = currentTime - lastFrameTime;
        if (deltaTime < frameInterval) {
          return;
        }
        lastFrameTime = currentTime - (deltaTime % frameInterval);
      }

      const elapsedTime = clock.getElapsedTime();
      const positions = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        // Mobile optimization: Simplified wave motion (single frequency instead of three)
        if (isMobileDevice) {
          const wave = Math.sin(elapsedTime * 0.4 + positions[i3] * 0.08);
          positions[i3] += velocities[i3] + wave * 0.008;
          positions[i3 + 1] += velocities[i3 + 1] + wave * 0.008;
          positions[i3 + 2] += velocities[i3 + 2] + wave * 0.004;
        } else {
          // Desktop: Multi-frequency wave motion
          const wave1 = Math.sin(elapsedTime * 0.3 + positions[i3] * 0.1);
          const wave2 = Math.cos(elapsedTime * 0.5 + positions[i3 + 1] * 0.1);
          const wave3 = Math.sin(elapsedTime * 0.7 + positions[i3 + 2] * 0.1);

          positions[i3] += velocities[i3] + wave1 * 0.01;
          positions[i3 + 1] += velocities[i3 + 1] + wave2 * 0.01;
          positions[i3 + 2] += velocities[i3 + 2] + wave3 * 0.005;
        }

        // Mouse interaction - only on desktop
        if (!isMobileDevice) {
          const particlePos = new THREE.Vector3(positions[i3], positions[i3 + 1], positions[i3 + 2]);
          const mousePos = new THREE.Vector3(mouse.x * 30, mouse.y * 30, 0);
          const distanceToMouse = particlePos.distanceTo(mousePos);

          if (distanceToMouse < 15) {
            const direction = mousePos.clone().sub(particlePos).normalize();
            const force = (15 - distanceToMouse) / 15 * 0.1;
            positions[i3] += direction.x * force;
            positions[i3 + 1] += direction.y * force;
            positions[i3 + 2] += direction.z * force;
          }
        }

        // Boundary check - wrap around
        if (Math.abs(positions[i3]) > 25) velocities[i3] *= -1;
        if (Math.abs(positions[i3 + 1]) > 25) velocities[i3 + 1] *= -1;
        if (Math.abs(positions[i3 + 2]) > 25) velocities[i3 + 2] *= -1;
      }

      geometry.attributes.position.needsUpdate = true;

      // Smooth rotation (slightly slower on mobile)
      const rotationSpeed = isMobileDevice ? 0.7 : 1;
      particles.rotation.x = elapsedTime * 0.05 * rotationSpeed;
      particles.rotation.y = elapsedTime * 0.03 * rotationSpeed;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (!isMobileDevice) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [isMobile]);

  return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default WebGLParticles;