"use client";

import { useState } from "react";

export type PillarKey =
  | "gov"
  | "fullstack"
  | "growth"
  | "realEstate"
  | "why-strategy"
  | "why-compliance"
  | "why-execution"
  | "why-synergy";

export function useServiceModal() {
  const [active, setActive] = useState<PillarKey | null>(null);
  const open = (key: PillarKey) => setActive(key);
  const close = () => setActive(null);

  return { active, open, close };
}
