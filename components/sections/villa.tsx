"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Waves, ConciergeBell as Concierge, Coffee, Wine } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const services = [
  { icon: Waves, title: "Piscine Chauffée 28°C", desc: "Mi-Avril → Septembre" },
  { icon: Concierge, title: "Room Service Raffiné", desc: "7 jours / 7" },
  { icon: Coffee, title: "Petit-Déjeuner Gourmand", desc: "Produits locaux" },
  { icon: Wine, title: "Bar Lounge", desc: "Terrasse & Cheminée" },
]

export default function Villa() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".villa-image", {
        scrollTrigger: {
          trigger: ".villa-image",
          start: "top 75%",
        },
        clipPath: "circle(0%)",
        scale: 1.3,
        duration: 1.2,
        ease: "power3.out",
      })

      gsap.from(".villa-content > *", {
        scrollTrigger: {
          trigger: ".villa-content",
          start: "top 75%",
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      })

      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".service-card",
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-neutral-cream">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="villa-image rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/design-mode/diapo_7-1920x960.jpg"
              alt="Villa Augeval"
              className="w-full h-168 aspect-[9/16] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="villa-content">
            <div className="inline-block mb-4 px-4 py-2 border-2 border-accent-red text-accent-red rounded-full text-sm font-medium">
              Nos Services
            </div>

            <h2 className="mb-4">La Villa Augeval</h2>
            <h3 className="text-2xl text-text-gray mb-6">Votre Refuge de Charme</h3>

            <p className="text-lg text-text-gray mb-8 leading-relaxed">
              Découvrez nos 41 chambres climatisées élégamment décorées, alliant confort moderne et raffinement.
              Profitez de notre piscine extérieure chauffée à 28°C de mi-avril à septembre, de notre service en chambre
              personnalisé 7j/7, et d'un petit-déjeuner gourmand aux saveurs normandes servi dans notre salle voûtée aux
              vitraux colorés ou en terrasse.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="service-card bg-white p-6 rounded-lg border border-neutral-beige hover:border-accent-red transition-colors"
                  >
                    <Icon className="w-8 h-8 text-accent-red mb-3" />
                    <h4 className="font-serif font-bold text-text-dark mb-1">{service.title}</h4>
                    <p className="text-sm text-text-gray">{service.desc}</p>
                  </div>
                )
              })}
            </div>

            <button className="cta-red">Découvrir nos Chambres →</button>
          </div>
        </div>
      </div>
    </section>
  )
}
