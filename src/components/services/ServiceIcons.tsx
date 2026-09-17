// src/components/services/ServiceIcons.tsx
import React from "react";

interface IconProps {
  className?: string;
}

export function ChillerIcon({ className = "w-6 h-6 text-[#ea580c]" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 7v2" />
      <path d="M12 15v2" />
      <path d="M7 12h2" />
      <path d="M15 12h2" />
      <circle cx="12" cy="12" r="1.5" fill="#ea580c" />
    </svg>
  );
}

export function ACIcon({ className = "w-6 h-6 text-[#ea580c]" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="4" width="20" height="9" rx="1" />
      <path d="M6 9h12" />
      <path d="M6 17c1-1 2-1 3 0s2 1 3 0 2-1 3 0" />
      <path d="M6 20c1-1 2-1 3 0s2 1 3 0 2-1 3 0" />
      <circle cx="18" cy="7" r="1" fill="#ea580c" />
    </svg>
  );
}

export function FridgeIcon({ className = "w-6 h-6 text-[#ea580c]" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="5" y="2" width="14" height="20" rx="1" />
      <path d="M5 9h14" />
      <path d="M9 5v2" />
      <path d="M9 13v4" />
    </svg>
  );
}

export function WasherIcon({ className = "w-6 h-6 text-[#ea580c]" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <circle cx="12" cy="13" r="5" />
      <path d="M8 5h2" />
      <circle cx="16" cy="5" r="1" fill="#ea580c" />
      <path d="M12 11a2 2 0 0 1 2 2" />
    </svg>
  );
}