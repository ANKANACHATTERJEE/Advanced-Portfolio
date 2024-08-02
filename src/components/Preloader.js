// components/Preloader.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


const Preloader = ({ setIsLoading }) => {
  const preloaderRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setIsLoading(false),
      });

      textRefs.current.forEach((textRef, index) => {
        tl.fromTo(
          textRef,
          { strokeDasharray: 200, strokeDashoffset: 200 },
          { strokeDashoffset: 0, duration: 0.5, ease: 'power1.inOut' },
          index * 0.1 // delay each letter slightly
        );
      });

      tl.to(preloaderRef.current, {
        duration: 0.5,
        scale: 2,
        opacity: 0,
        ease: 'power1.inOut',
        display: 'none',
        delay: 0.5, // Extra delay to keep the preloader visible for a bit after the animation
      });
    }, textRefs.current);

    return () => ctx.revert();
  }, [setIsLoading]);

  return (
    <>
    <div
      ref={preloaderRef}
      className="fixed inset-0 flex items-center justify-center bg-dark z-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="200"
        viewBox="0 0 800 200"
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".35em"
          fontSize="48"
          fontFamily="Montserrat, sans-serif"
          stroke="white"
          strokeWidth="2"
          fill="none"
        >
          {Array.from('ANKANA CHATTERJEE').map((letter, index) => (
            <tspan
              key={index}
              ref={el => textRefs.current[index] = el}
              dx={index === 0 ? 0 : 5} // Adjust spacing between letters
            >
              {letter}
            </tspan>
          ))}
        </text>
      </svg>
    </div>
    </>
  );
};

export default Preloader;
