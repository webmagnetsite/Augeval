"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { ArrowRight, MapPin, Calendar } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      // Hero title entrance with stagger
      tl.from(".hero-overline", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6",
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-ctas",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5",
        )

      // Image parallax effect on scroll
      gsap.to(".hero-image", {
        y: -100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          markers: false,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden pt-24"
      style={{ backgroundColor: "rgba(32, 32, 32, 0.9)" }}
    >
      <div className="absolute inset-0">
        {/* Full-width image */}
        <div
          ref={imageRef}
          className="hero-image absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url(https://www.augeval.com/wp-content/uploads/2020/04/diapo_1-1920x960.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(29,29,32,0.9) 0%, rgba(39,39,42,0.1) 100%, transparent 100%)",
              zIndex: 2,
              pointerEvents: "none"
            }}
          ></div>
        </div>

        {/* Subtle vignette overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.10) 100%)",
          }}
        ></div>
      </div>

      {/* Content - positioned on left side */}
      <div ref={contentRef} className="mt-6 relative z-10 w-full max-w-6xl container-max">
        <div className="w-full md:w-1/2 pr-8">
          <div className="hero-overline flex items-center gap-3 mb-6">
            <div style={{ backgroundColor: "var(--accent-red)" }} className="w-1 h-6"></div>
            <span
              className="text-sm mt-10 font-sans font-semibold tracking-widest uppercase"
              style={{ color:"white" }}
            >
              Bienvenue à la Villa Augeval
            </span>
          </div>

          <h1
            className="hero-title font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
            style={{ color: "white", whiteSpace: "nowrap" }}
          >
            Votre Havre <span style={{ color: "var(--primary-beige)" }}>de Paix</span>
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl font-serif italic mb-8" style={{ color: "#f0f0f0" }}>
            Où le confort rencontre l'élégance
          </p>

          <p
            className="hero-description text-base md:text-lg font-sans mb-10 leading-relaxed max-w-md"
            style={{ color: "#e0e0e0" }}
          >
            Découvrez un havre de paix en Normandie. Un hôtel de charme avec spa 5-étoiles pour votre détente absolue.
          </p>

          {/* Call-to-action buttons with premium styling */}
          <div className="hero-ctas flex flex-row gap-6 mb-12">
            <button
              className="flex items-center gap-2 px-10 py-5 rounded-full font-medium text-white transition-transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: "#6B5B4F" }}
              onMouseEnter={e => { gsap.to(e.currentTarget, { scale: 1.07, duration: 0.3 }) }}
              onMouseLeave={e => { gsap.to(e.currentTarget, { scale: 1, duration: 0.3 }) }}
            >
              <Calendar size={18} />
              Réserver un séjour
            </button>

            <button
              className="flex items-center gap-2 px-10 py-5 rounded-full font-medium transition-transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: "#D4AF8F", color: "#1a1a1a" }}
              onMouseEnter={e => { gsap.to(e.currentTarget, { scale: 1.07, duration: 0.3 }) }}
              onMouseLeave={e => { gsap.to(e.currentTarget, { scale: 1, duration: 0.3 }) }}
            >
              <Calendar size={18} />
              Réserver un soin
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-8 pt-6 border-t" style={{ borderColor: "rgba(212, 175, 143, 0.9)" }}>
            <div>
              <p className="text-sm font-sans text-foreground" style={{ color: "#d0d0d0" }}>
                15 ans d'excellence
              </p>
              <p className="text-sm font-sans text-primary" style={{ color: "white" }}>
                depuis 2009
              </p>
            </div>
            <div className="w-px h-12" style={{ backgroundColor: "rgba(32, 175, 143, 0.3)" }}></div>
            <div className="flex items-center gap-2">
              <MapPin size={20} style={{ color: "rgba(212, 175, 143, 0.7)" }} />
              <p className="text-sm font-serif text-foreground" style={{ color: "#d0d0d0" }}>
                Honfleur, Normandie
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
