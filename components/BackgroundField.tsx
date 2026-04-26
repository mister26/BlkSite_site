export function BackgroundField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-blacksite-bg"
    >
      <div className="radial-field absolute inset-0 opacity-90" />
      <div className="background-grid absolute inset-0 opacity-35" />
      <div className="scan-texture absolute inset-0 opacity-18 mix-blend-screen" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blacksite-red/45 to-transparent" />
      <div className="absolute inset-y-0 left-[14%] w-px bg-blacksite-red/10" />
      <div className="absolute inset-y-0 right-[18%] w-px bg-blacksite-red/10" />
    </div>
  );
}
