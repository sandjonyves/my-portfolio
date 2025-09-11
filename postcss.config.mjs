const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Menlo', 'Monaco', 'monospace'],
      },
    }
  }
};

export default config;
