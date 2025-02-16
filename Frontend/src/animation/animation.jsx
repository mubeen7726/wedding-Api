


import { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Animations = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 50 }, () => createParticle(canvas));

    function createParticle(canvas) {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2, // Prevent full opacity
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
      };
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function updateParticles() {
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap particles when they move off-screen
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
      });
    }

    function animate() {
      drawParticles();
      updateParticles();
      requestAnimationFrame(animate);
    }

    animate();

    // Resize canvas on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="position-fixed top-0 start-0 w-100 h-100"
      style={{
        pointerEvents: "none", // Ensure it doesn’t block clicks
      }}
    />
  );
};

export default Animations;
