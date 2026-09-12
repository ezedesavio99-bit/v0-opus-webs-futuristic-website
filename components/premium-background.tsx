/**
 * Global backdrop: a static, near-invisible texture behind the whole app.
 * Individual sections paint their own opaque background (light or the two
 * dark "bookend" sections), so this only needs to read well in the gaps —
 * no canvas, no particles, no motion to gate behind prefers-reduced-motion.
 */
export function PremiumBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: "var(--surface)" }}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(10,10,11,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[140px]"
        style={{ background: "rgba(47,156,255,0.06)" }}
      />
    </div>
  )
}
