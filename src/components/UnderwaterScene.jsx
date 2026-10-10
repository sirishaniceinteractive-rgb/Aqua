import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const UnderwaterScene = () => {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03132f, 0.028);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background to blend with CSS
    container.appendChild(renderer.domElement);

    // 2. Underwater Lighting
    const ambientLight = new THREE.AmbientLight(0x063a67, 1.8);
    scene.add(ambientLight);

    const topSunlight = new THREE.DirectionalLight(0x4dd9ed, 2.5);
    topSunlight.position.set(0, 20, 5);
    scene.add(topSunlight);

    const pinkBacklight = new THREE.PointLight(0xf05dbd, 2.0, 30);
    pinkBacklight.position.set(8, -6, -4);
    scene.add(pinkBacklight);

    const cyanRimlight = new THREE.PointLight(0x27c8f5, 2.2, 30);
    cyanRimlight.position.set(-8, -5, -3);
    scene.add(cyanRimlight);

    // 3. Floating Marine Dust / Plankton Particles
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 28;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      scales[i] = Math.random() * 0.18 + 0.04;
      speeds[i] = Math.random() * 0.4 + 0.2;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Particle Canvas Texture for soft glowing orb
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(77, 217, 237, 0.8)');
      grad.addColorStop(0.7, 'rgba(39, 200, 245, 0.2)');
      grad.addColorStop(1, 'rgba(3, 19, 47, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const particleMat = new THREE.PointsMaterial({
      size: 0.25,
      map: createParticleTexture(),
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Rising Underwater Bubbles
    const bubbleCount = 70;
    const bubbleGeo = new THREE.BufferGeometry();
    const bPositions = new Float32Array(bubbleCount * 3);
    const bSpeeds = new Float32Array(bubbleCount);
    const bWobbles = new Float32Array(bubbleCount);

    for (let i = 0; i < bubbleCount; i++) {
      bPositions[i * 3] = (Math.random() - 0.5) * 20;
      bPositions[i * 3 + 1] = Math.random() * 24 - 12;
      bPositions[i * 3 + 2] = (Math.random() - 0.5) * 14;
      bSpeeds[i] = Math.random() * 0.03 + 0.015;
      bWobbles[i] = Math.random() * Math.PI * 2;
    }

    bubbleGeo.setAttribute('position', new THREE.BufferAttribute(bPositions, 3));

    // Bubble Texture (spherical bubble with light refraction rim)
    const createBubbleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.arc(32, 32, 28, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.lineWidth = 3;
      ctx.stroke();

      const grad = ctx.createRadialGradient(24, 24, 2, 32, 32, 28);
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      grad.addColorStop(0.4, 'rgba(77, 217, 237, 0.4)');
      grad.addColorStop(1, 'rgba(3, 19, 47, 0.1)');
      ctx.fillStyle = grad;
      ctx.fill();
      return new THREE.CanvasTexture(canvas);
    };

    const bubbleMat = new THREE.PointsMaterial({
      size: 0.38,
      map: createBubbleTexture(),
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const bubbles = new THREE.Points(bubbleGeo, bubbleMat);
    scene.add(bubbles);

    // 5. Volumetric God Rays (Light Beams penetrating from surface)
    const rayGroup = new THREE.Group();
    const rayCount = 7;
    const rayGeo = new THREE.ConeGeometry(3.5, 28, 16, 1, true);

    const rayMat = new THREE.MeshBasicMaterial({
      color: 0x27c8f5,
      transparent: true,
      opacity: 0.065,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    for (let i = 0; i < rayCount; i++) {
      const ray = new THREE.Mesh(rayGeo, rayMat.clone());
      const angle = (i / rayCount) * Math.PI * 0.6 - Math.PI * 0.3;
      ray.position.set((i - rayCount / 2) * 2.8, 11, -3 + (i % 2) * 1.5);
      ray.rotation.z = angle * 0.4;
      ray.rotation.x = Math.PI;
      ray.userData = {
        baseOpacity: Math.random() * 0.05 + 0.04,
        pulseSpeed: Math.random() * 1.5 + 0.8,
        pulseOffset: Math.random() * Math.PI * 2,
      };
      rayGroup.add(ray);
    }
    scene.add(rayGroup);

    // 6. Interactive Mouse Tracking
    const handleMouseMove = (e) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 1.8;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight - 0.5) * 1.2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 7. Scroll Tracking for Ocean Depth Descent
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 8. Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // 9. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Camera parallax and scroll depth descent
      const scrollDepth = (scrollY / (document.body.scrollHeight || 4000)) * 6;
      camera.position.x = mouseRef.current.x * 1.2;
      camera.position.y = mouseRef.current.y * 0.8 - scrollDepth;
      camera.lookAt(0, -scrollDepth * 0.5, 0);

      // Animate Marine Dust Particles
      const pPos = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        // Subtle drift
        pPos[i * 3 + 1] -= Math.sin(elapsedTime * 0.5 + i) * 0.003;
        pPos[i * 3] += Math.cos(elapsedTime * 0.4 + i) * 0.002;
      }
      particleGeo.attributes.position.needsUpdate = true;
      particles.rotation.y = elapsedTime * 0.015;

      // Animate Rising Bubbles
      const bPos = bubbleGeo.attributes.position.array;
      for (let i = 0; i < bubbleCount; i++) {
        bPos[i * 3 + 1] += bSpeeds[i]; // Rise up
        bPos[i * 3] += Math.sin(elapsedTime * 2 + bWobbles[i]) * 0.01; // Wobble

        // Reset if reached top
        if (bPos[i * 3 + 1] > 12) {
          bPos[i * 3 + 1] = -12;
          bPos[i * 3] = (Math.random() - 0.5) * 20;
        }
      }
      bubbleGeo.attributes.position.needsUpdate = true;

      // Animate Volumetric God Rays flicker & shimmer
      rayGroup.children.forEach((ray) => {
        const u = ray.userData;
        ray.material.opacity = u.baseOpacity + Math.sin(elapsedTime * u.pulseSpeed + u.pulseOffset) * 0.025;
      });
      rayGroup.rotation.z = Math.sin(elapsedTime * 0.2) * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="hero-canvas-wrap" style={{ position: 'fixed', zIndex: 0 }} />;
};
