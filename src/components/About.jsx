import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef();

  useEffect(() => {
    gsap.from(aboutRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top center+=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <section className="about" ref={aboutRef}>
      <h2>About Me</h2>
      <p>
        Hi, I'm Faij Alam, a passionate Full Stack Developer specializing in the MERN stack.
        With a strong foundation in Data Structures and Algorithms, I love solving complex
        problems and building efficient, scalable web applications.
      </p>
      <p>
        My journey in web development started with a fascination for creating interactive
        user experiences. This led me to master React for frontend development, while also
        diving deep into backend technologies like Node.js and Express.
      </p>
      <p>
        When I'm not coding, you can find me leading my team to victory in tug-of-war
        competitions or exploring new technologies to expand my skill set.
      </p>
    </section>
  );
}

export default About;