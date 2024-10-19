import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import { Text, Html } from '@react-three/drei';
import { gsap } from 'gsap';

function Hero() {
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    cubeRef.current.rotation.x += delta * 0.2;
    cubeRef.current.rotation.y += delta * 0.2;
  });

  const handleHover = (event) => {
    setHovered(event.type === 'pointerenter');
  };

  const handleClick = () => {
    setActive(!active);
    gsap.to(cubeRef.current.scale, {
      x: active ? 1 : 1.5,
      y: active ? 1 : 1.5,
      z: active ? 1 : 1.5,
      duration: 0.5,
    });
  };

  return (
    <group>
      <mesh
        ref={cubeRef}
        onPointerEnter={handleHover}
        onPointerLeave={handleHover}
        onClick={handleClick}
      >
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "royalblue"} />
        <Html position={[0, 0, 1.51]} className="hero-content" center>
          <div>
            <h1>Faij Alam</h1>
            <p>Full Stack Developer</p>
            <p>Specializing in MERN Stack</p>
          </div>
        </Html>
      </mesh>
      <Text
        position={[0, 4, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Welcome to my Portfolio
      </Text>
    </group>
  );
}

export default Hero;