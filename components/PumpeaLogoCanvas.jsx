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
          if (value && typeof value === "object" && typeof value.dispose === "function") value.dispose();
        });
        material.dispose();
      });
    }
  });
}

function capsuleMesh(radius, length, material, radialSegments = 32) {
  const mesh = new THREE.Mesh(new THREE.CapsuleGeometry(radius, length, 14, radialSegments), material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function arrowGeometry() {
  const shape = new THREE.Shape();
  shape.moveTo(-0.24, -0.44);
  shape.lineTo(-0.24, 0.28);
  shape.lineTo(-0.58, 0.28);
  shape.lineTo(0, 0.96);
  shape.lineTo(0.58, 0.28);
  shape.lineTo(0.24, 0.28);
  shape.lineTo(0.24, -0.44);
  shape.quadraticCurveTo(0.24, -0.56, 0.12, -0.56);
  shape.lineTo(-0.12, -0.56);
  shape.quadraticCurveTo(-0.24, -0.56, -0.24, -0.44);

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.24,
    bevelEnabled: true,
    bevelSize: 0.035,
    bevelThickness: 0.04,
    bevelSegments: 9,
    curveSegments: 18,
  });
  geometry.center();
  return geometry;
}

export default function PumpeaLogoCanvas() {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 0.42, 6.9);

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

    const logo = new THREE.Group();
    logo.position.set(0, 0.06, 0);
    logo.scale.setScalar(0.88);
    scene.add(logo);

    const porcelain = new THREE.MeshPhysicalMaterial({
      color: 0xf9fbff,
      roughness: 0.22,
      metalness: 0,
      transparent: true,
      opacity: 0.96,
      transmission: 0.26,
      thickness: 0.9,
      ior: 1.18,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
      attenuationColor: new THREE.Color(0xeaf4ff),
      attenuationDistance: 2.1,
    });

    const blueGlass = new THREE.MeshPhysicalMaterial({
      color: 0x6d78ff,
      roughness: 0.26,
      metalness: 0.02,
      transparent: true,
      opacity: 0.92,
      transmission: 0.08,
      clearcoat: 1,
      clearcoatRoughness: 0.14,
    });

    const gleam = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.24,
      depthWrite: false,
    });

    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.24, 0.19, 48, 192), porcelain);
    ring.castShadow = true;
    ring.receiveShadow = true;
    ring.position.set(0, -0.08, 0);
    logo.add(ring);

    const ringHighlight = new THREE.Mesh(new THREE.TorusGeometry(1.245, 0.014, 12, 192), gleam);
    ringHighlight.position.set(-0.05, 0.01, 0.24);
    ringHighlight.scale.set(0.96, 0.96, 1);
    logo.add(ringHighlight);

    const leftEar = capsuleMesh(0.18, 0.22, porcelain, 28);
    leftEar.rotation.z = Math.PI / 2;
    leftEar.position.set(-1.38, -0.06, 0.01);
    leftEar.scale.set(1.05, 0.98, 0.9);
    logo.add(leftEar);

    const rightEar = leftEar.clone();
    rightEar.material = porcelain;
    rightEar.position.x = 1.38;
    logo.add(rightEar);

    const arrow = new THREE.Mesh(arrowGeometry(), porcelain);
    arrow.position.set(0, 1.34, 0.02);
    arrow.scale.set(0.9, 0.9, 0.86);
    arrow.castShadow = true;
    arrow.receiveShadow = true;
    logo.add(arrow);

    const arrowGleam = new THREE.Mesh(arrowGeometry(), gleam);
    arrowGleam.position.set(-0.045, 1.39, 0.18);
    arrowGleam.scale.set(0.72, 0.72, 0.18);
    logo.add(arrowGleam);

    [-0.34, 0.34].forEach((x) => {
      const eye = capsuleMesh(0.12, 0.44, blueGlass, 30);
      eye.position.set(x, -0.14, 0.25);
      eye.scale.set(0.88, 1.04, 0.82);
      logo.add(eye);

      const eyeGlow = capsuleMesh(0.034, 0.29, gleam, 12);
      eyeGlow.position.set(x - 0.04, -0.02, 0.35);
      eyeGlow.scale.set(0.7, 1, 0.5);
      logo.add(eyeGlow);
    });

    const base = new THREE.Group();
    base.position.set(0, -1.55, 0);
    base.rotation.x = -Math.PI / 2;
    scene.add(base);

    const softDisc = new THREE.Mesh(
      new THREE.CircleGeometry(1.36, 128),
      new THREE.MeshBasicMaterial({ color: 0xf8fbff, transparent: true, opacity: 0.62, side: THREE.DoubleSide, depthWrite: false })
    );
    base.add(softDisc);

    const ripples = [0, 1, 2].map((index) => {
      const ringMesh = new THREE.Mesh(
        new THREE.RingGeometry(1.26 + index * 0.42, 1.29 + index * 0.42, 144),
        new THREE.MeshBasicMaterial({
          color: 0xdbeaff,
          transparent: true,
          opacity: 0.76 - index * 0.15,
          side: THREE.DoubleSide,
          depthWrite: false,
        })
      );
      base.add(ringMesh);
      return ringMesh;
    });

    const shadowPlane = new THREE.Mesh(
      new THREE.CircleGeometry(1.66, 128),
      new THREE.ShadowMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.17 })
    );
    shadowPlane.receiveShadow = true;
    shadowPlane.position.set(0, -1.5, 0);
    shadowPlane.rotation.x = -Math.PI / 2;
    scene.add(shadowPlane);

    scene.add(new THREE.AmbientLight(0xffffff, 1.22));
    scene.add(new THREE.HemisphereLight(0xffffff, 0xe6f3ff, 0.94));

    const key = new THREE.DirectionalLight(0xffffff, 2.05);
    key.position.set(4.4, 5.1, 4.4);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.near = 0.5;
    key.shadow.camera.far = 12;
    key.shadow.camera.left = -4;
    key.shadow.camera.right = 4;
    key.shadow.camera.top = 4;
    key.shadow.camera.bottom = -4;
    scene.add(key);

    const fill = new THREE.PointLight(0xd9efff, 1.7, 9);
    fill.position.set(-3.7, 2.8, 3.8);
    scene.add(fill);

    const rim = new THREE.PointLight(0xffffff, 1.15, 8);
    rim.position.set(1.7, 3.4, -3.5);
    scene.add(rim);

    const clock = new THREE.Clock();
    let frameId = 0;

    const interaction = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      hover: 0,
      targetHover: 0,
      spin: 0,
      spinVelocity: 0,
    };

    const handlePointerMove = (event) => {
      const rect = host.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      interaction.targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      interaction.targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const handlePointerEnter = () => {
      interaction.targetHover = 1;
      interaction.spinVelocity += 0.018;
    };

    const handlePointerLeave = () => {
      interaction.targetHover = 0;
      interaction.targetX = 0;
      interaction.targetY = 0;
    };

    host.addEventListener("pointermove", handlePointerMove);
    host.addEventListener("pointerenter", handlePointerEnter);
    host.addEventListener("pointerleave", handlePointerLeave);

    const resize = () => {
      const rect = host.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
      renderer.setSize(width, height, false);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    const render = () => {
      const elapsed = clock.getElapsedTime();
      interaction.x = THREE.MathUtils.lerp(interaction.x, interaction.targetX, 0.075);
      interaction.y = THREE.MathUtils.lerp(interaction.y, interaction.targetY, 0.075);
      interaction.hover = THREE.MathUtils.lerp(interaction.hover, interaction.targetHover, 0.08);
      interaction.spinVelocity *= 0.952;
      interaction.spin += interaction.hover * 0.012 + interaction.spinVelocity;

      logo.rotation.y = Math.sin(elapsed * 0.32) * 0.14 + interaction.x * 0.18 + interaction.spin;
      logo.rotation.x = Math.cos(elapsed * 0.24) * 0.035 - interaction.y * 0.1;
      logo.position.y = Math.sin(elapsed * 0.56) * 0.05 + 0.04 + interaction.hover * 0.035;
      logo.scale.setScalar(0.88 + interaction.hover * 0.035);
      fill.intensity = 1.7 + interaction.hover * 0.48;
      rim.intensity = 1.15 + interaction.hover * 0.3;

      ripples.forEach((item, index) => {
        const pulse = 1 + Math.sin(elapsed * 0.62 + index * 0.8) * 0.017;
        item.scale.setScalar(pulse);
        item.material.opacity = 0.73 - index * 0.14 + Math.sin(elapsed * 0.48 + index) * 0.03;
      });
      ringHighlight.rotation.z = Math.sin(elapsed * 0.3) * 0.045;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(frameId);
      host.removeEventListener("pointermove", handlePointerMove);
      host.removeEventListener("pointerenter", handlePointerEnter);
      host.removeEventListener("pointerleave", handlePointerLeave);
      observer.disconnect();
      disposeScene(scene);
      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={hostRef} className="h-full w-full cursor-grab active:cursor-grabbing" aria-label="Modelo 3D animado inspirado en el logo de Pumpea" role="img" />;
}
