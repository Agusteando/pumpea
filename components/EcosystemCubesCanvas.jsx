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

function roundedBoxGeometry(width, height, depth, radius = 0.12) {
  const geometry = new THREE.ExtrudeGeometry(roundedRectShape(width, height, radius), {
    depth,
    bevelEnabled: true,
    bevelSize: radius * 0.22,
    bevelThickness: radius * 0.22,
    bevelSegments: 8,
    curveSegments: 14,
  });
  geometry.center();
  geometry.computeVertexNormals();
  return geometry;
}

function makePrism({ width, height, depth, radius, material, position, name }) {
  const mesh = new THREE.Mesh(roundedBoxGeometry(width, height, depth, radius), material);
  mesh.position.set(position[0], position[1], position[2]);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData.homeY = position[1];
  mesh.userData.name = name;
  return mesh;
}

function makeEdgeOverlay(mesh, color = 0xdcefff, opacity = 0.42) {
  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(mesh.geometry, 32),
    new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false })
  );
  edges.position.copy(mesh.position);
  edges.rotation.copy(mesh.rotation);
  edges.scale.copy(mesh.scale);
  return edges;
}

function makeLabelPlate(width, depth, material) {
  const plate = new THREE.Mesh(roundedBoxGeometry(width, 0.08, depth, 0.08), material);
  plate.castShadow = true;
  plate.receiveShadow = true;
  return plate;
}

export default function EcosystemCubesCanvas() {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-3.4, 3.4, 2.35, -2.35, 0.1, 100);
    camera.position.set(4.4, 3.4, 5.2);
    camera.lookAt(0, 0.55, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.14;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    host.appendChild(renderer.domElement);

    const root = new THREE.Group();
    root.position.set(-0.22, -0.16, 0);
    root.rotation.y = -0.08;
    scene.add(root);

    const porcelain = new THREE.MeshPhysicalMaterial({
      color: 0xf8fcff,
      roughness: 0.28,
      metalness: 0,
      transparent: true,
      opacity: 0.94,
      transmission: 0.18,
      thickness: 0.82,
      ior: 1.2,
      clearcoat: 1,
      clearcoatRoughness: 0.14,
      attenuationColor: new THREE.Color(0xe4f3ff),
      attenuationDistance: 2.4,
    });

    const blueIce = new THREE.MeshPhysicalMaterial({
      color: 0x8fc7ff,
      roughness: 0.2,
      metalness: 0.02,
      transparent: true,
      opacity: 0.58,
      transmission: 0.36,
      thickness: 0.72,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    });

    const whiteGlow = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.42,
      depthWrite: false,
    });

    const blockSpecs = [
      { name: "left", width: 0.72, height: 1.72, depth: 0.88, radius: 0.13, position: [-1.05, 0.86, -0.1], material: porcelain },
      { name: "main", width: 1.18, height: 1.16, depth: 1.16, radius: 0.15, position: [0, 0.58, 0], material: porcelain },
      { name: "right", width: 0.68, height: 0.82, depth: 0.7, radius: 0.12, position: [0.94, 0.41, 0.26], material: porcelain },
      { name: "tiny", width: 0.44, height: 0.52, depth: 0.46, radius: 0.09, position: [1.58, 0.26, 0.58], material: porcelain },
    ];

    const blocks = blockSpecs.map((spec) => {
      const mesh = makePrism(spec);
      root.add(mesh);
      root.add(makeEdgeOverlay(mesh));
      return mesh;
    });

    const topGroup = new THREE.Group();
    topGroup.position.set(0, 1.34, 0);
    root.add(topGroup);

    const topBase = makeLabelPlate(0.92, 0.92, porcelain);
    topBase.position.set(0, 0, 0);
    topGroup.add(topBase);
    topGroup.add(makeEdgeOverlay(topBase, 0xffffff, 0.52));

    const topGlow = makeLabelPlate(0.62, 0.62, blueIce);
    topGlow.position.set(0, 0.085, 0);
    topGlow.scale.set(0.96, 1, 0.96);
    topGroup.add(topGlow);

    const centerGem = new THREE.Mesh(roundedBoxGeometry(0.34, 0.16, 0.34, 0.055), blueIce);
    centerGem.position.set(0, 0.205, 0);
    centerGem.castShadow = true;
    topGroup.add(centerGem);

    const halo = new THREE.Mesh(
      new THREE.CircleGeometry(2.2, 96),
      new THREE.MeshBasicMaterial({ color: 0x91d7ff, transparent: true, opacity: 0.12, depthWrite: false, side: THREE.DoubleSide })
    );
    halo.position.set(0.1, -0.02, 0.04);
    halo.rotation.x = -Math.PI / 2;
    root.add(halo);

    const groundShadow = new THREE.Mesh(
      new THREE.CircleGeometry(1.9, 96),
      new THREE.ShadowMaterial({ color: 0x3d8dff, transparent: true, opacity: 0.18 })
    );
    groundShadow.position.set(0.18, -0.035, 0.1);
    groundShadow.rotation.x = -Math.PI / 2;
    groundShadow.receiveShadow = true;
    root.add(groundShadow);

    const network = new THREE.Group();
    network.position.set(0, 0.018, 0);
    root.add(network);

    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x8ecfff, transparent: true, opacity: 0.74, depthWrite: false });
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x8ecfff, transparent: true, opacity: 0.34, depthWrite: false });
    const nodePositions = [
      [-1.86, 0, -0.78],
      [-1.28, 0, 0.92],
      [-0.16, 0, 1.18],
      [0.82, 0, 1.04],
      [1.76, 0, -0.06],
      [1.28, 0, -0.86],
      [-0.68, 0, -1.12],
    ];
    const nodeGeo = new THREE.SphereGeometry(0.035, 18, 18);
    nodePositions.forEach((point) => {
      const node = new THREE.Mesh(nodeGeo, nodeMaterial);
      node.position.set(point[0], point[1], point[2]);
      network.add(node);
    });
    const linePoints = [0, 6, 6, 5, 5, 4, 1, 2, 2, 3, 3, 4, 6, 2].flatMap((index) => {
      const point = nodePositions[index];
      return [new THREE.Vector3(point[0], point[1], point[2])];
    });
    const lines = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(linePoints), lineMaterial);
    network.add(lines);

    const sparkleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7, depthWrite: false });
    const sparkles = [[-1.66, 1.82, -0.28], [0.62, 1.82, 0.48], [1.5, 0.94, 0.92]].map(([x, y, z], index) => {
      const sparkle = new THREE.Mesh(new THREE.OctahedronGeometry(0.045 + index * 0.005, 0), sparkleMaterial.clone());
      sparkle.position.set(x, y, z);
      root.add(sparkle);
      return sparkle;
    });

    scene.add(new THREE.AmbientLight(0xffffff, 1.42));
    scene.add(new THREE.HemisphereLight(0xffffff, 0xddefff, 1.25));

    const key = new THREE.DirectionalLight(0xffffff, 2.1);
    key.position.set(4.2, 6.4, 4.8);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.near = 0.5;
    key.shadow.camera.far = 15;
    key.shadow.camera.left = -5;
    key.shadow.camera.right = 5;
    key.shadow.camera.top = 5;
    key.shadow.camera.bottom = -5;
    scene.add(key);

    const blueFill = new THREE.PointLight(0x79c8ff, 2.4, 7);
    blueFill.position.set(-2.6, 1.2, 2.6);
    scene.add(blueFill);

    const rim = new THREE.PointLight(0xffffff, 1.1, 6);
    rim.position.set(2.3, 3.1, -2.6);
    scene.add(rim);

    const interaction = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      hover: 0,
      targetHover: 0,
    };

    const handlePointerMove = (event) => {
      const rect = host.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      interaction.targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      interaction.targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const handlePointerEnter = () => {
      interaction.targetHover = 1;
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
      const aspect = width / height;
      const viewHeight = 4.52;
      const viewWidth = viewHeight * aspect;
      camera.left = -viewWidth / 2;
      camera.right = viewWidth / 2;
      camera.top = viewHeight / 2;
      camera.bottom = -viewHeight / 2;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
      renderer.setSize(width, height, false);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    const clock = new THREE.Clock();
    let frameId = 0;
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const render = () => {
      const elapsed = clock.getElapsedTime();
      interaction.x = THREE.MathUtils.lerp(interaction.x, interaction.targetX, 0.07);
      interaction.y = THREE.MathUtils.lerp(interaction.y, interaction.targetY, 0.07);
      interaction.hover = THREE.MathUtils.lerp(interaction.hover, interaction.targetHover, 0.08);

      const slow = reducedMotion ? 0 : elapsed;
      root.rotation.y = -0.08 + Math.sin(slow * 0.36) * 0.035 + interaction.x * 0.055;
      root.rotation.x = -interaction.y * 0.025;
      root.position.y = -0.16 + Math.sin(slow * 0.62) * 0.025 + interaction.hover * 0.035;
      root.scale.setScalar(1 + interaction.hover * 0.018);
      topGroup.position.y = 1.34 + Math.sin(slow * 0.82) * 0.025 + interaction.hover * 0.025;
      topGroup.rotation.y = Math.sin(slow * 0.52) * 0.035;
      centerGem.rotation.y = slow * 0.18;
      topGlow.material.opacity = 0.5 + Math.sin(slow * 1.15) * 0.07 + interaction.hover * 0.08;
      halo.material.opacity = 0.12 + Math.sin(slow * 0.7) * 0.025 + interaction.hover * 0.025;
      blueFill.intensity = 2.4 + interaction.hover * 0.7;

      blocks.forEach((block, index) => {
        block.position.y = block.userData.homeY + Math.sin(slow * 0.48 + index * 0.7) * 0.012;
      });

      sparkles.forEach((sparkle, index) => {
        sparkle.rotation.x = slow * (0.35 + index * 0.08);
        sparkle.rotation.y = slow * (0.45 + index * 0.06);
        sparkle.material.opacity = 0.38 + Math.sin(slow * 1.2 + index) * 0.2;
        sparkle.scale.setScalar(0.9 + Math.sin(slow * 1.1 + index) * 0.12);
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

  return <div ref={hostRef} className="ecosystem-cubes-canvas" aria-label="Gráfico 3D de cubos conectados para ecosistema digital" role="img" />;
}
