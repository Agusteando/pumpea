feat: replace ecosystem banner illustration with direct Three.js cubes scene

- Replaced the CSS-only "Todo lo que tu negocio necesita" cube graphic with a direct Three.js canvas component.
- Built a production-safe vanilla Three.js scene for the ecosystem banner using translucent beveled cuboids, layered top plates, soft shadows, glows, network nodes, and subtle sparkle details to better match the reference graphic.
- Added calm animation and pointer hover response to the cubes scene without introducing React Three Fiber or additional runtime dependencies.
- Removed the unused CSS cube construction styles and kept the banner layout/scaling intact for the existing section flow.
- Preserved existing business logic and excluded package-lock.json from the deliverable.
