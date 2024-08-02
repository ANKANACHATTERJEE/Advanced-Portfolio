import React, { useEffect, useRef, useState } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [speed, setSpeed] = useState(8);
  const [numStars, setNumStars] = useState(3000);
  const stars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    setMousePosition({ x: canvas.width / 2, y: canvas.height / 2 });

    const createStar = () => {
      let x, y;
      do {
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
      } while (Math.hypot(x - mousePosition.x, y - mousePosition.y) < 3);

      return {
        x,
        y,
        z: Math.random() * canvas.width,
        o: Math.random(),
        size: Math.random() * 3 + 2,
      };
    };

    const populateStars = () => {
      stars.current.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.current.push(createStar());
      }
    };

    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleKeyDown = (event) => {
      if (event.code === 'ArrowUp' || event.code === 'KeyW') {
        setSpeed((prevSpeed) => prevSpeed + 1);
      } else if (event.code === 'ArrowDown' || event.code === 'KeyS') {
        setSpeed((prevSpeed) => Math.max(1, prevSpeed - 1));
      } else if (event.code === 'NumpadAdd') {
        setNumStars((prevNumStars) => prevNumStars + 100);
        populateStars();
      } else if (event.code === 'NumpadSubtract') {
        setNumStars((prevNumStars) => Math.max(100, prevNumStars - 100));
        populateStars();
      }
    };

    const updateStars = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let star of stars.current) {
        star.z -= speed;

        if (star.z <= 0) {
          Object.assign(star, createStar());
          star.z = canvas.width;
        }

        const sx = (star.x - mousePosition.x) * (canvas.width / star.z) + mousePosition.x;
        const sy = (star.y - mousePosition.y) * (canvas.width / star.z) + mousePosition.y;
        const size = (1 - star.z / canvas.width) * star.size;
        context.fillStyle = 'white';
        context.fillRect(sx, sy, size, size);
      }

      requestAnimationFrame(updateStars);
    };

    populateStars();
    updateStars();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mousePosition, speed, numStars]);

  return <canvas ref={canvasRef} className="w-full h-full"></canvas>;
};

export default StarryBackground;
