"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function disposeScene(scene) {
  scene.traverse((object) => {
    if (object.geometry) object.geometry.dispose();

    if (object.material) {
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.forEach((material) => {
        if (!material) return;
        Object.values(material).forEach((value) => {
          if (value && typeof value === "object" && typeof value.dispose === "function") {
            value.dispose();
          }
        });
        material.dispose();
      });
    }
  });
}

function makeCapsule(radius, length, material, radialSegments = 24) {
  const geometry = new THREE.CapsuleGeometry(radius, length, 12, radialSegments);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

export default function PumpeaLogoScene() {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0.45, 6);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.06;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    host.appendChild(renderer.domElement);

    const root = new THREE.Group();
    root.position.set(0, 0.08, 0);
    scene.add(root);

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf8fbff,
      roughness: 0.18,
      metalness: 0,
      transparent: true,
      opacity: 0.92,
      transmission: 0.42,
      thickness: 0.85,
      ior: 1.18,
      clearcoat: 1,
      clearcoatRoughness: 0.15,
      attenuationColor: new THREE.Color(0xeaf4ff),
      attenuationDistance: 2.2,
    });

    const innerMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xe4edf9,
      roughness: 0.22,
      metalness: 0,
      transparent: true,
      opacity: 0.96,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
    });

    const highlightMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.26,
      depthWrite: false,
    });

    const torus = new THREE.Mesh(new THREE.TorusGeometry(1.33, 0.22, 48, 180), glassMaterial);
    torus.castShadow = true;
    torus.receiveShadow = true;
    torus.position.set(0, 0.12, 0);
    root.add(torus);

    const torusHighlight = new THREE.Mesh(new THREE.TorusGeometry(1.34, 0.018, 12, 180), highlightMaterial);
    torusHighlight.position.set(-0.03, 0.19, 0.25);
    torusHighlight.scale.set(0.96, 0.96, 0.96);
    root.add(torusHighlight);

    const stem = makeCapsule(0.075, 0.34, glassMaterial, 20);
    stem.position.set(0.08, 1.39, 0.02);
    stem.rotation.z = -0.18;
    root.add(stem);

    const leaf = makeCapsule(0.16, 0.38, glassMaterial, 24);
    leaf.position.set(0.28, 1.7, 0.02);
    leaf.rotation.z = -0.48;
    leaf.scale.set(0.82, 1.06, 0.8);
    root.add(leaf);

    [-0.34, 0, 0.34].forEach((x, index) => {
      const bar = makeCapsule(0.11, 0.44, innerMaterial, 22);
      bar.position.set(x, 0.11, 0.22);
      bar.scale.set(1, index === 1 ? 1.04 : 0.98, 1);
      root.add(bar);

      const glint = makeCapsule(0.025, 0.28, highlightMaterial, 10);
      glint.position.set(x - 0.032, 0.22, 0.32);
      glint.scale.set(0.8, 1, 0.5);
      root.add(glint);
    });

    const floor = new THREE.Group();
    floor.position.set(0, -1.52, 0);
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(1.22, 96),
      new THREE.MeshBasicMaterial({
        color: 0xf8fbff,
        transparent: true,
        opacity: 0.66,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    );
    floor.add(disc);

    const ripples = [0, 1, 2].map((index) => {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(1.22 + index * 0.42, 1.25 + index * 0.42, 128),
        new THREE.MeshBasicMaterial({
          color: 0xdcecff,
          transparent: true,
          opacity: 0.78 - index * 0.16,
          side: THREE.DoubleSide,
          depthWrite: false,
        })
      );
      floor.add(ring);
      return ring;
    });

    const shadowPlane = new THREE.Mesh(
      new THREE.CircleGeometry(1.65, 96),
      new THREE.ShadowMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.14,
      })
    );
    shadowPlane.receiveShadow = true;
    shadowPlane.position.set(0, -1.56, 0);
    shadowPlane.rotation.x = -Math.PI / 2;
    scene.add(shadowPlane);

    const ambient = new THREE.AmbientLight(0xffffff, 1.28);
    scene.add(ambient);

    const hemi = new THREE.HemisphereLight(0xffffff, 0xe7f3ff, 1.05);
    scene.add(hemi);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.1);
    keyLight.position.set(4.6, 5.2, 4.2);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 12;
    keyLight.shadow.camera.left = -4;
    keyLight.shadow.camera.right = 4;
    keyLight.shadow.camera.top = 4;
    keyLight.shadow.camera.bottom = -4;
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xd9efff, 1.9, 9);
    fillLight.position.set(-3.8, 2.7, 3.8);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffffff, 1.2, 8);
    rimLight.position.set(1.8, 3.4, -3.4);
    scene.add(rimLight);

    const clock = new THREE.Clock();
    let frameId = 0;

    const resize = () => {
      const rect = host.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
      renderer.setSize(width, height, false);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    const render = () => {
      const elapsed = clock.getElapsedTime();

      root.rotation.y = Math.sin(elapsed * 0.34) * 0.16;
      root.rotation.x = Math.cos(elapsed * 0.28) * 0.035;
      root.position.y = Math.sin(elapsed * 0.58) * 0.055 + 0.08;

      ripples.forEach((ring, index) => {
        const pulse = 1 + Math.sin(elapsed * 0.72 + index * 0.9) * 0.018;
        ring.scale.setScalar(pulse);
        ring.material.opacity = 0.74 - index * 0.16 + Math.sin(elapsed * 0.55 + index) * 0.035;
      });

      torusHighlight.rotation.z = Math.sin(elapsed * 0.32) * 0.05;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      disposeScene(scene);
      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement.parentNode === host) {
        host.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="h-full w-full"
      aria-label="Modelo 3D animado inspirado en el logo de Pumpea"
      role="img"
    />
  );
}
