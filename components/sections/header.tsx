"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Calendar } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Chambres", href: "#chambres" },
    { label: "Spa", href: "#spa" },
    { label: "Offres", href: "#offres" },
    { label: "Séminaires", href: "#seminaires" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-zinc-800/95 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="absolute inset-0 -z-10 h-24">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url(https://www.augeval.com/wp-content/uploads/2020/04/diapo_1-1920x960.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: isScrolled ? "scroll" : "fixed",
          }}
        >
          {!isScrolled && <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>}
          {isScrolled && (
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(32, 32, 32, 0.7)" }}></div>
          )}
        </div>
      </div>

      <div className="container-max relative z-10 flex items-center justify-between h-24">
        <Link href="#top" className="flex-shrink-0">
          <img
            src="/logo-augeval.svg"
            alt="Villa Augeval"
            className="h-16 w-auto transition-opacity duration-300"
            style={{ backgroundColor: "transparent" }}
            onError={(e) => {
              if (!e.currentTarget.src.endsWith("placeholder-logo.svg")) {
                e.currentTarget.src = "/placeholder-logo.svg";
              }
            }}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-sm transition-colors"
              style={{
                color: isScrolled ? "white" : "white",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isScrolled ? "#6B5B4F" : "#D4AF8F"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isScrolled ? "#1a1a1a" : "white"
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white transition-transform hover:scale-105"
            style={{ backgroundColor: "#6B5B4F" }}
          >
            <Calendar size={18} />
            Réserver un séjour
          </button>

          <button
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-transform hover:scale-105"
            style={{ backgroundColor: "#D4AF8F", color: "#1a1a1a" }}
          >
            <Calendar size={18} />
            Réserver un soin
          </button>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden">
            {isMobileMenuOpen ? (
              <X size={24} style={{ color: isScrolled ? "#1a1a1a" : "white" }} />
            ) : (
              <Menu className="text-background" size={24} style={{ color: isScrolled ? "#1a1a1a" : "white" }} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t" style={{ borderColor: "#e8e3d6" }}>
          <nav className="container-max py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium transition-colors"
                style={{ color: "#1a1a1a" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#6B5B4F"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#1a1a1a"
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <button
                className="w-full px-8 py-3 rounded-full font-medium text-white transition-transform hover:scale-105"
                style={{ backgroundColor: "#6B5B4F" }}
              >
                Réserver un séjour
              </button>
              <button
                className="w-full px-8 py-3 rounded-full font-medium transition-transform hover:scale-105"
                style={{ backgroundColor: "#D4AF8F", color: "#1a1a1a" }}
              >
                Réserver un soin
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
