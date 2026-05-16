fix: tighten hero mockup proportions and rebuild 3D logo silhouette

- Reworked the homepage hero visual cluster for cleaner desktop scaling, closer Figma spacing, controlled text wrapping, and stronger alignment at wide layouts.
- Rebuilt the phone mockup containment using measured frame coordinates so the screen content is clipped inside the transparent mobile frame instead of leaking through the sides.
- Tuned the browser mockup, stat cards, automation card, phone placement, and service cards as a single proportional composition rather than independent oversized elements.
- Rebuilt the Three.js logo model to follow the Pumpea mark reference more closely: circular ring, side caps, upward arrow, two vertical inner eyes, soft material, shadows, and calm motion.
- Removed React Three Fiber/Drei usage from the source path and kept the implementation on direct Three.js to avoid the ReactCurrentOwner/runtime fiber error.
- Left package-lock.json out of the codebase package.
