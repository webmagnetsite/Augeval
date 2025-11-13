"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const soins = [
  {
    id: 1,
    badge: "Le Plus Demandé",
    title: "Massage Signature",
    duration: "60 minutes",
    description:
      "Notre soin phare aux huiles essentielles normandes (lavande, romarin). Détente profonde des tensions musculaires et rééquilibrage énergétique.",
    price: "85",
    benefits: ["Relaxation musculaire profonde", "Amélioration circulation", "Réduction stress"],
    image: "https://www.augeval.com/wp-content/uploads/2020/05/soins__massage_compress.jpg",
  },
  {
    id: 2,
    badge: "Expérience Couple",
    title: "Spa Privatif Duo",
    duration: "2 heures",
    description:
      "Moment d'intimité exclusive avec jacuzzi bouillonnant, hammam vapeur, sauna finlandais et espace détente privé pour 2 personnes.",
    price: "120",
    benefits: ["Espace 100% privatisé", "Ambiance romantique", "Détente à votre rythme"],
    image: "https://www.augeval.com/wp-content/uploads/2020/05/spa_privatif_compress.jpg",
  },
  {
    id: 3,
    badge: "Rituel Complet",
    title: "Rituel Évasion",
    duration: "90 minutes",
    description:
      "Voyage sensoriel complet : gommage corporel, massage relaxant corps entier 60min, soin visage hydratant express.",
    price: "140",
    benefits: ["Peau douce et régénérée", "Détente corps et esprit", "Effet coup d'éclat"],
    image: "https://www.augeval.com/wp-content/uploads/2020/05/intro_spa.jpg",
  },
]

export default function Soins() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.set(".soins-title, .soins-subtitle", { opacity: 0, y: 20 })
        gsap.to(".soins-title, .soins-subtitle", {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
        })

        gsap.set(".soin-card", { opacity: 0, scale: 0.95 })
        gsap.to(".soin-card", {
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
        })
      }, sectionRef)

      return () => {
        ctx.revert()
        clearTimeout(timer)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section ref={sectionRef} style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "white" }}>
      <div className="container-max">
        <div className="text-center mb-12">
          <h3
            className="soins-title"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "2.25rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#1a1a1a",
            }}
          >
            Nos Soins Signature
          </h3>
          <p className="soins-subtitle text-lg" style={{ color: "#666" }}>
            Rituels bien-être aux essences normandes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {soins.map((soin) => (
            <div
              key={soin.id}
              className="soin-card overflow-hidden bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {/* Badge */}
              <div className="relative h-64 overflow-hidden">
                <img src={soin.image || "/placeholder.svg"} alt={soin.title} className="w-full h-full object-cover" />
                <div
                  className="absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-bold"
                  style={{ backgroundColor: "#D4AF8F", color: "#1a1a1a" }}
                >
                  {soin.badge}
                </div>
              </div>

              <div className="p-8">
                <h4 className="font-serif text-2xl font-bold mb-2" style={{ color: "#1a1a1a" }}>
                  {soin.title}
                </h4>
                <p className="text-sm mb-4" style={{ color: "#999" }}>
                  {soin.duration}
                </p>

                <p className="mb-6 leading-relaxed text-sm" style={{ color: "#666" }}>
                  {soin.description}
                </p>

                <div className="mb-6">
                  {soin.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 mb-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#D4AF8F" }} />
                      <span className="text-sm" style={{ color: "#666" }}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-6 flex items-center justify-between" style={{ borderColor: "#e8e3d6" }}>
                  <div>
                    <p className="text-xs" style={{ color: "#999" }}>
                      À partir de
                    </p>
                    <p className="font-serif text-2xl font-bold" style={{ color: "#6B5B4F" }}>
                      {soin.price}€
                    </p>
                  </div>
                  <button className="cta-red text-sm">Réserver</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
