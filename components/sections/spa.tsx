"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Calendar } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Spa() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".spa-badge, .spa-title, .spa-subtitle", {
        scrollTrigger: {
          trigger: ".spa-title",
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      })

      gsap.from(".spa-ctas", {
        scrollTrigger: {
          trigger: ".spa-ctas",
          start: "top 75%",
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        ease: "back.out(1.7)",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="spa"
      className="relative section-padding bg-cover bg-center flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: "url(https://www.augeval.com/wp-content/uploads/2020/04/diapo_4-1920x960.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-brown/80 to-neutral-brown/40"></div>

      <div className="relative z-10 text-center max-w-3xl mx-4">
        <div className="spa-badge inline-block mb-6 px-4 py-2 border-2 bg-zinc-800 border-[#D4AF8F] text-white rounded-full text-sm font-medium">
          Spa Augeval
        </div>

        <h2 className="spa-title text-white mb-4">Spa Augeval</h2>
        <h3 className="spa-subtitle font-serif italic text-2xl text-neutral-cream mb-8">
          Votre Sanctuaire de Bien-Être
        </h3>

        <p className="spa-text text-neutral-cream text-lg leading-relaxed mb-12">
          Plongez dans un espace de 200m² dédié à votre relaxation absolue. Notre spa privatif vous invite à une
          parenthèse hors du temps avec sauna finlandais, hammam oriental, table hydrojet dernière génération et espace
          détente cocooning. Nos massages signature aux huiles essentielles normandes prolongent cette évasion
          sensorielle.
        </p>

        <div className="spa-ctas flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white transition-transform hover:scale-105"
              style={{ backgroundColor: '#6B5B4F' }}
            >
              Découvrir le Spa Complet
            </button>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-transform hover:scale-105"
              style={{ backgroundColor: '#D4AF8F', color: '#1a1a1a' }}
            >
              <Calendar size={20} />
              Réserver un Soin
            </button>
        </div>
      </div>
    </section>
  )
}
