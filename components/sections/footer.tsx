"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Facebook, Instagram, ArrowUp } from "lucide-react"

export default function Footer() {
  useEffect(() => {
    // Scroll to top button
    const scrollToTopBtn = document.getElementById("scroll-to-top")
    if (scrollToTopBtn) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
          scrollToTopBtn.style.display = "block"
        } else {
          scrollToTopBtn.style.display = "none"
        }
      })
    }
  }, [])

  return (
    <footer className="bg-text-dark text-white">
      {/* Main Footer */}
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <img src="/logo-augeval.svg" alt="Villa Augeval" className="h-16 w-auto mb-4" />
            <p className="font-serif italic text-neutral-beige mb-6">L'art de recevoir à la française</p>
            <p className="text-sm text-text-gray mb-6 leading-relaxed">
              Hôtel de charme 4★ & Spa à Deauville. Architecture Belle Époque, confort moderne, accueil familial depuis
              1993.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-full border border-primary-beige text-primary-beige hover:bg-primary-beige hover:text-white transition-all flex items-center justify-center"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h4 className="font-serif text-white uppercase text-sm mb-6 tracking-wider">Navigation</h4>
            <nav className="space-y-3">
              {[
                { label: "Accueil", href: "#top" },
                { label: "Chambres", href: "#chambres" },
                { label: "Spa", href: "#spa" },
                { label: "Offres", href: "#offres" },
                { label: "Galerie", href: "#galerie" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-text-gray hover:text-primary-beige transition-colors block"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 - Info */}
          <div>
            <h4 className="font-serif text-white uppercase text-sm mb-6 tracking-wider">Informations</h4>
            <nav className="space-y-3">
              {[
                { label: "Mentions Légales", href: "#" },
                { label: "Politique de Confidentialité", href: "#" },
                { label: "CGV", href: "#" },
                { label: "Politique Cookies", href: "#" },
                { label: "Plan du Site", href: "#" },
                { label: "Carrières", href: "#" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-text-gray hover:text-primary-beige transition-colors block"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-serif text-white uppercase text-sm mb-6 tracking-wider">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-text-gray leading-relaxed mb-3">
                  15 Avenue Hocquart de Turtot
                  <br />
                  14800 Deauville, France
                </p>
              </div>
              <div>
                <a href="tel:+33231811318" className="text-primary-beige hover:text-accent-red font-bold block mb-1">
                  02 31 81 13 18
                </a>
                <a href="mailto:infos@augeval.com" className="text-primary-beige hover:text-accent-red text-sm block">
                  infos@augeval.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-text-gray">
            <p>© 2025 Villa Augeval. Tous droits réservés.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary-beige transition-colors">
                Mentions Légales
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-primary-beige transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button
        id="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hidden z-40"
        style={{ backgroundColor: "#D4AF8F", color: "white" }}
      >
        <ArrowUp className="ml-[18px]" size={20} />
      </button>
    </footer>
  )
}
