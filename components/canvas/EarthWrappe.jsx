"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Chargement dynamique sans SSR
 const EarthCanvas = dynamic(() => import('./Earth'), { ssr: false });

export default function EarthWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-[400px] md:h-[500px] xl:h-[550px] relative">
      <EarthCanvas />
    </div>
  );
}
