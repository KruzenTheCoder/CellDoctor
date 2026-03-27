export function Logo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Phone body */}
      <rect x="12" y="4" width="24" height="40" rx="5" className="fill-primary" />
      {/* Screen */}
      <rect x="15" y="9" width="18" height="26" rx="2" className="fill-primary-foreground" opacity="0.9" />
      {/* Stethoscope / cross — doctor symbol */}
      <path
        d="M20 18 L28 18 M24 14 L24 22"
        className="stroke-primary"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Heartbeat line */}
      <path
        d="M16 27 L20 27 L22 23 L24 31 L26 27 L32 27"
        className="stroke-primary"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Home button */}
      <circle cx="24" cy="40" r="2" className="fill-primary-foreground" opacity="0.5" />
    </svg>
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Logo />
      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-tight leading-none">Cell Doctor</span>
        <span className="text-[10px] text-muted-foreground tracking-wider uppercase">Phone Repairs</span>
      </div>
    </div>
  );
}
