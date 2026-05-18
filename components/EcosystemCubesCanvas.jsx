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

function roundedRectShape(width, height, radius) {
  const x = -width / 2;
  const y = -height / 2;
  const shape = new THREE.Shape();
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);
  return shape;
}

function roundedBoxGeometry(width, height, depth, radius = 0.1) {
  const geometry = new THREE.ExtrudeGeometry(roundedRectShape(width, height, radius), {
    depth,
    bevelEnabled: true,
    bevelSize: radius * 0.18,
    bevelThickness: radius * 0.22,
    bevelSegments: 10,
    curveSegments: 16,
  });
  geometry.center();
  geometry.computeVertexNormals();
  return geometry;
}

function createBlock({ width, height, depth, radius = 0.12, position, material, name }) {
  const mesh = new THREE.Mesh(roundedBoxGeometry(width, height, depth, radius), material);
  mesh.position.set(...position);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData = { home: mesh.position.clone(), name };
  return mesh;
}

function addEdges(parent, mesh, opacity = 0.34) {
  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(mesh.geometry, 22),
    new THREE.LineBasicMaterial({ color: 0xd6ecff, transparent: true, opacity, depthWrite: false })
  );
  edges.position.copy(mesh.position);
  edges.rotation.copy(mesh.rotation);
  edges.scale.copy(mesh.scale);
  parent.add(edges);
  return edges;
}

function makeVerticalLine(points, material) {
  return new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material);
}

export default function EcosystemCubesCanvas() {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-3, 3, 2.25, -2.25, 0.1, 80);
    camera.position.set(4.25, 3.18, 5.05);
    camera.lookAt(-0.08, 0.58, 0.02);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.23;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    host.appendChild(renderer.domElement);

    const root = new THREE.Group();
    root.position.set(-0.22, -0.38, 0);
    root.rotation.y = -0.08;
    root.rotation.x = 0.01;
    scene.add(root);

    const matWhite = new THREE.MeshPhysicalMaterial({
      color: 0xf9fcff,
      roughness: 0.34,
      metalness: 0.01,
      transparent: true,
      opacity: 0.95,
      transmission: 0.14,
      thickness: 0.55,
      ior: 1.18,
      clearcoat: 1,
      clearcoatRoughness: 0.13,
      attenuationColor: new THREE.Color(0xe7f4ff),
      attenuationDistance: 2.2,
    });

    const matIce = new THREE.MeshPhysicalMaterial({
      color: 0x9ed6ff,
      roughness: 0.22,
      metalness: 0.02,
      transparent: true,
      opacity: 0.66,
      transmission: 0.36,
      thickness: 0.48,
      ior: 1.2,
      clearcoat: 1,
      clearcoatRoughness: 0.09,
    });

    const matSoftBlue = new THREE.MeshPhysicalMaterial({
      color: 0xd8efff,
      roughness: 0.26,
      metalness: 0,
      transparent: true,
      opacity: 0.72,
      transmission: 0.18,
      thickness: 0.4,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
    });

    const blocks = [];
    const edgeGroup = new THREE.Group();
    root.add(edgeGroup);

    const specs = [
      { name: "left-tower", width: 0.74, height: 1.72, depth: 0.86, radius: 0.12, position: [-1.22, 0.86, -0.1], material: matWhite },
      { name: "main-base", width: 1.18, height: 1.18, depth: 1.18, radius: 0.15, position: [-0.1, 0.59, 0.02], material: matWhite },
      { name: "right-box", width: 0.74, height: 0.88, depth: 0.74, radius: 0.12, position: [0.96, 0.44, 0.34], material: matWhite },
      { name: "front-mini", width: 0.45, height: 0.53, depth: 0.48, radius: 0.09, position: [1.58, 0.27, 0.62], material: matWhite },
    ];

    specs.forEach((spec) => {
      const block = createBlock(spec);
      blocks.push(block);
      root.add(block);
      addEdges(edgeGroup, block, 0.3);
    });

    const topStack = new THREE.Group();
    topStack.position.set(-0.12, 1.31, 0.02);
    topStack.userData.home = topStack.position.clone();
    root.add(topStack);

    const topBase = createBlock({ width: 0.96, height: 0.16, depth: 0.96, radius: 0.09, position: [0, 0, 0], material: matWhite, name: "top-base" });
    topStack.add(topBase);
    addEdges(topStack, topBase, 0.46);

    const topGlass = createBlock({ width: 0.67, height: 0.18, depth: 0.67, radius: 0.08, position: [0, 0.15, 0], material: matIce, name: "top-glass" });
    topStack.add(topGlass);
    addEdges(topStack, topGlass, 0.5);

    const innerPlate = createBlock({ width: 0.42, height: 0.1, depth: 0.42, radius: 0.06, position: [0, 0.3, 0], material: matSoftBlue, name: "inner-plate" });
    topStack.add(innerPlate);

    const leftCap = createBlock({ width: 0.5, height: 0.14, depth: 0.54, radius: 0.07, position: [-1.22, 1.78, -0.1], material: matSoftBlue, name: "left-cap" });
    root.add(leftCap);
    blocks.push(leftCap);
    addEdges(edgeGroup, leftCap, 0.44);

    const rightCap = createBlock({ width: 0.45, height: 0.12, depth: 0.45, radius: 0.06, position: [0.96, 0.91, 0.34], material: matSoftBlue, name: "right-cap" });
    root.add(rightCap);
    blocks.push(rightCap);
    addEdges(edgeGroup, rightCap, 0.42);

    const baseHalo = new THREE.Mesh(
      new THREE.CircleGeometry(2.12, 120),
      new THREE.MeshBasicMaterial({ color: 0x85ceff, transparent: true, opacity: 0.12, depthWrite: false, side: THREE.DoubleSide })
    );
    baseHalo.position.set(0.02, -0.02, 0.08);
    baseHalo.rotation.x = -Math.PI / 2;
    root.add(baseHalo);

    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(1.85, 120),
      new THREE.ShadowMaterial({ color: 0x2c7cff, transparent: true, opacity: 0.2 })
    );
    shadow.position.set(0.04, -0.025, 0.1);
    shadow.rotation.x = -Math.PI / 2;
    shadow.receiveShadow = true;
    root.add(shadow);

    const floorLines = new THREE.Group();
    floorLines.position.set(0, 0.005, 0);
    root.add(floorLines);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x8ed3ff, transparent: true, opacity: 0.25, depthWrite: false });
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xbce8ff, transparent: true, opacity: 0.82, depthWrite: false });
    const nodeGeo = new THREE.SphereGeometry(0.032, 20, 20);
    const nodes = [
      [-1.9, 0, -0.7], [-1.46, 0, 0.78], [-0.55, 0, 1.13],
      [0.15, 0, 1.0], [0.98, 0, 0.92], [1.64, 0, 0.2],
      [1.26, 0, -0.78], [-0.58, 0, -1.02],
    ];
    nodes.forEach(([x, y, z]) => {
      const node = new THREE.Mesh(nodeGeo, nodeMaterial);
      node.position.set(x, y, z);
      floorLines.add(node);
    });
    const segmentIndexes = [0, 7, 7, 6, 6, 5, 1, 2, 2, 3, 3, 4, 4, 5, 7, 2, 3, 6];
    const segmentPoints = segmentIndexes.map((index) => new THREE.Vector3(...nodes[index]));
    floorLines.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(segmentPoints), lineMaterial));

    const riserMaterial = new THREE.LineBasicMaterial({ color: 0xcdeeff, transparent: true, opacity: 0.2, depthWrite: false });
    [[-1.58, 0.02, -0.9, 0.9], [1.64, 0.02, 0.65, 0.62], [0.52, 0.02, -1.03, 0.72]].forEach(([x, y, z, h]) => {
      floorLines.add(makeVerticalLine([new THREE.Vector3(x, y, z), new THREE.Vector3(x, h, z)], riserMaterial));
    });

    const sparkleMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.72, depthWrite: false });
    const sparkles = [[-1.82, 1.98, -0.38], [0.66, 1.94, 0.58], [1.58, 0.98, 0.94], [-0.35, 2.05, -0.92]].map(([x, y, z], i) => {
      const sparkle = new THREE.Mesh(new THREE.OctahedronGeometry(0.042 + i * 0.004, 0), sparkleMat.clone());
      sparkle.position.set(x, y, z);
      root.add(sparkle);
      return sparkle;
    });

    scene.add(new THREE.AmbientLight(0xffffff, 1.35));
    scene.add(new THREE.HemisphereLight(0xffffff, 0xdcefff, 1.42));

    const key = new THREE.DirectionalLight(0xffffff, 2.45);
    key.position.set(4.4, 6.2, 4.6);
    key.castShadow = true;
    key.shadow.mapSize.set(1536, 1536);
    key.shadow.camera.near = 0.5;
    key.shadow.camera.far = 14;
    key.shadow.camera.left = -4.8;
    key.shadow.camera.right = 4.8;
    key.shadow.camera.top = 4.8;
    key.shadow.camera.bottom = -4.8;
    scene.add(key);

    const fill = new THREE.PointLight(0x8bd4ff, 2.7, 7);
    fill.position.set(-2.6, 1.3, 2.4);
    scene.add(fill);

    const rim = new THREE.PointLight(0xffffff, 1.1, 6);
    rim.position.set(2.4, 3.2, -2.5);
    scene.add(rim);

    const interaction = { x: 0, y: 0, targetX: 0, targetY: 0, hover: 0, targetHover: 0 };

    const handlePointerMove = (event) => {
      const rect = host.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      interaction.targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      interaction.targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const handlePointerEnter = () => { interaction.targetHover = 1; };
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
      const aspect = width / height;
      const viewHeight = 4.15;
      const viewWidth = viewHeight * aspect;
      camera.left = -viewWidth / 2;
      camera.right = viewWidth / 2;
      camera.top = viewHeight / 2;
      camera.bottom = -viewHeight / 2;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
      renderer.setSize(width, height, false);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    const clock = new THREE.Clock();
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    let frameId = 0;

    const render = () => {
      const elapsed = clock.getElapsedTime();
      const t = reducedMotion ? 0 : elapsed;
      interaction.x = THREE.MathUtils.lerp(interaction.x, interaction.targetX, 0.075);
      interaction.y = THREE.MathUtils.lerp(interaction.y, interaction.targetY, 0.075);
      interaction.hover = THREE.MathUtils.lerp(interaction.hover, interaction.targetHover, 0.08);

      root.rotation.y = -0.08 + Math.sin(t * 0.32) * 0.026 + interaction.x * 0.05;
      root.rotation.x = 0.01 - interaction.y * 0.025;
      root.position.y = -0.38 + Math.sin(t * 0.56) * 0.024 + interaction.hover * 0.035;
      root.scale.setScalar(1 + interaction.hover * 0.018);
      topStack.position.y = topStack.userData.home.y + Math.sin(t * 0.72) * 0.028 + interaction.hover * 0.03;
      topStack.rotation.y = Math.sin(t * 0.5) * 0.04 + interaction.x * 0.025;
      topGlass.material.opacity = 0.64 + Math.sin(t * 1.05) * 0.05 + interaction.hover * 0.06;
      baseHalo.material.opacity = 0.11 + Math.sin(t * 0.6) * 0.018 + interaction.hover * 0.025;
      fill.intensity = 2.7 + interaction.hover * 0.65;

      blocks.forEach((block, index) => {
        block.position.y = block.userData.home.y + Math.sin(t * 0.42 + index * 0.7) * 0.012;
      });
      sparkles.forEach((sparkle, index) => {
        sparkle.rotation.x = t * (0.35 + index * 0.04);
        sparkle.rotation.y = t * (0.42 + index * 0.05);
        sparkle.material.opacity = 0.44 + Math.sin(t * 1.08 + index) * 0.22;
        sparkle.scale.setScalar(0.92 + Math.sin(t * 1.1 + index) * 0.14);
      });

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

  return <div ref={hostRef} className="ecosystem-cubes-canvas" aria-label="Gráfico 3D de módulos conectados para ecosistema digital" role="img" />;
}
