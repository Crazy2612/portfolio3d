import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Express', icon: '🚂' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'HTML/CSS', icon: '🌐' },
];

function Skills() {
  const skillsRef = useRef();

  useEffect(() => {
    const skillItems = skillsRef.current.children;
    gsap.from(skillItems, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: skillsRef.current,
        start: 'top center+=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div ref={skillsRef} className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;