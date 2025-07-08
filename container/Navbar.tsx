"use client";

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { name: "Accueil", href: "#home" },
  { name: "À propos", href: "#about" },
  { name: "Projets", href: "#projects" },
  { name: "Expérience", href: "#experience" },
  { name: "Éducation", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 space-nav ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-sky-400 neon-text">
              Portfolio
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-12 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-300 hover:text-sky-400 px-3 py-2 text-base font-semibold transition-all duration-200 hover:neon-text rounded-lg hover:bg-slate-800/50"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-6">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 rounded-lg bg-slate-800/50 text-sky-400 hover:bg-sky-900/50 hover:text-sky-300 transition-all duration-200 neon-border text-xl"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6 bg-slate-900/95 backdrop-blur-md rounded-lg mt-4 neon-border">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-300 hover:text-sky-400 block px-4 py-3 text-lg font-semibold transition-all duration-200 rounded-lg hover:bg-slate-800/50 w-full text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 