const SPRITE_WIDTH = 8432;
const SPRITE_HEIGHT = 985;

const logos = [
  { name: "Colegio Monte Cristo", x: 88, width: 877 },
  { name: "El Trébol", x: 1088, width: 985 },
  { name: "IECS", x: 2108, width: 1054 },
  { name: "K-T Kids", x: 3260, width: 858 },
  { name: "Vivebol", x: 4250, width: 985 },
  { name: "Trío de Alientos", x: 5304, width: 985 },
  { name: "Coffiss Terraza", x: 6358, width: 985 },
  { name: "IEDIS", x: 7378, width: 1054 },
];

function SpriteLogo({ logo, height }) {
  const scale = height / SPRITE_HEIGHT;
  const width = Math.round(logo.width * scale);

  return (
    <span
      aria-label={logo.name}
      className="inline-block shrink-0"
      role="img"
      style={{
        width,
        height,
        backgroundImage: "url('/spritesheet.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: `${Math.round(SPRITE_WIDTH * scale)}px ${height}px`,
        backgroundPosition: `-${Math.round(logo.x * scale)}px 0`,
      }}
    />
  );
}

export default function SpriteLogoRail({
  compact = false,
  className = "",
  framed = true,
}) {
  const height = compact ? 42 : 54;

  return (
    <div
      className={`${framed ? "rounded-2xl border border-blue-100 bg-white/75 shadow-sm shadow-blue-100/70" : ""} ${className}`}
    >
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 px-4 py-4 md:gap-x-8">
        {logos.map((logo) => (
          <SpriteLogo key={logo.name} logo={logo} height={height} />
        ))}
      </div>
    </div>
  );
}
