export default function GlassPanel({ children, className = "" }) {
  return (
    <div className={`glass-card-strong p-7 md:p-9 ${className}`}>
      {children}
    </div>
  );
}
