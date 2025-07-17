
export default function GlassPanel({ children, className = "" }) {
  return (
    <div
      className={
        "rounded-2xl border border-blue-200 shadow-lg " +
        "bg-gradient-to-br from-white/75 via-sky-50/90 to-white/80 " +
        "backdrop-blur-xl backdrop-saturate-150 p-8 " +
        className
      }
      style={{
        boxShadow:
          "0 8px 40px -10px #36a9e1af, 0 2px 44px 0 #e5f3ffb0, 0 1.5px 2.5px rgba(70,90,220,0.09)",
        border: "1.5px solid #79c4fa66",
      }}
    >
      {children}
    </div>
  );
}
