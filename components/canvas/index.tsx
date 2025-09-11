import React from 'react';
import dynamic from 'next/dynamic';

// Composants de chargement séparés
const StarsLoading = () => (
  <div style={{ width: '100%', height: 'auto', position: 'absolute', inset: 0, zIndex: -1, backgroundColor: 'transparent' }} />
);

const EarthLoading = () => (
  <div style={{ width: '100%', height: 'auto', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
);

const StarsBackgroundLoading = () => (
  <div style={{ width: '100%', height: 'auto', position: 'absolute', inset: 0, zIndex: -1, backgroundColor: 'transparent' }} />
);

const EarthWrapperLoading = () => (
  <div style={{ width: '100%', height: 'auto', position: 'relative' }} />
);

// Dynamic imports pour éviter les erreurs d'hydration
const StarsCanvas = dynamic(() => import("./Stars"), {
  ssr: false,
  loading: StarsLoading
});

const EarthCanvas = dynamic(() => import("./Earth"), {
  ssr: false,
  loading: EarthLoading
});

const StarsBackground = dynamic(() => import("./StarsBackground"), {
  ssr: false,
  loading: StarsBackgroundLoading
});

const EarthWrapper = dynamic(() => import('./EarthWrappe'), {
  ssr: false,
  loading: EarthWrapperLoading
});

export { StarsCanvas, EarthCanvas, StarsBackground, EarthWrapper };