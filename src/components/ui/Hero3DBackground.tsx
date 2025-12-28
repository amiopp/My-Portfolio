"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function MorphingShape() {
    const meshRef = useRef<THREE.Mesh>(null);
    const mousePosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePosition.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            };
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.getElapsedTime();

        // Rotate based on time
        meshRef.current.rotation.x = time * 0.2;
        meshRef.current.rotation.y = time * 0.3;

        // Move based on mouse position
        meshRef.current.position.x = THREE.MathUtils.lerp(
            meshRef.current.position.x,
            mousePosition.current.x * 0.5,
            0.05
        );
        meshRef.current.position.y = THREE.MathUtils.lerp(
            meshRef.current.position.y,
            mousePosition.current.y * 0.5,
            0.05
        );
    });

    return (
        <Sphere ref={meshRef} args={[1, 200, 200]} scale={2.5}>
            <MeshDistortMaterial
                color="#6366f1"
                attach="material"
                distort={0.6}
                speed={2}
                roughness={0.4}
                metalness={0.8}
            />
        </Sphere>
    );
}

function SecondaryShape() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.getElapsedTime();

        // Counter-rotate
        meshRef.current.rotation.x = -time * 0.15;
        meshRef.current.rotation.z = time * 0.2;
    });

    return (
        <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.8} position={[2, -1, -2]}>
            <MeshDistortMaterial
                color="#a855f7"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.5}
                metalness={0.6}
                transparent
                opacity={0.7}
            />
        </Sphere>
    );
}

export default function Hero3DBackground() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                style={{ background: "transparent" }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#a855f7" />
                <pointLight position={[0, 0, 5]} intensity={1} color="#6366f1" />

                <MorphingShape />
                <SecondaryShape />
            </Canvas>
        </div>
    );
}
