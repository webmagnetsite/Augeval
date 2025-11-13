"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { DoorOpen, Search } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function SpaServices() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".spa-icon", {
        scrollTrigger: {
          trigger: ".spa-icon",
          start: "top 75%",
        },
        rotation: 180,
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      })

      gsap.from(".spa-service-title, .spa-service-text", {
        scrollTrigger: {
          trigger: ".spa-service-title",
          start: "top 75%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-neutral-cream">
      <div className="container-max max-w-2xl mx-auto text-center">
        <div className="spa-icon w-20 h-20 mx-auto mb-8 bg-neutral-brown rounded-full flex items-center justify-center">
          <DoorOpen className="w-10 h-10 text-[#D4AF8F]" />
        </div>

        <h3 className="spa-service-title font-serif text-3xl mb-6">Spa Ouvert aux Clients Externes</h3>

        <p className="spa-service-text text-text-gray text-lg leading-relaxed mb-3">
          Non-résidents bienvenus ! Profitez de notre spa privatif sur réservation. Formules demi-journée (2h) ou
          journée complète (4h) avec accès sauna, hammam et espace détente.
        </p>

        <p className="spa-service-text text-sm text-text-gray mb-12">Massage et soins à la carte disponibles</p>

        {/* Quick Booking Form */}
        <div className="bg-white border-2 border-accent-red rounded-xl p-6 flex flex-col sm:flex-row gap-4 items-end">
          <label className="text-sm font-medium text-text-dark">Réservation express :</label>

          <input
            type="date"
            placeholder="Date souhaitée"
            className="flex-1 px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red"
          />

          <select className="flex-1 px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red">
            <option>1 personne</option>
            <option>2 personnes</option>
            <option>3 personnes</option>
            <option>4 personnes</option>
          </select>

          <select className="flex-1 px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red">
            <option>2h</option>
            <option>4h</option>
          </select>

          <button className="bg-accent-red text-white px-6 py-2 rounded-lg font-medium hover:bg-accent-red/90 transition-colors flex items-center gap-2 whitespace-nowrap">
            <Search size={18} />
            Vérifier
          </button>
        </div>
      </div>
    </section>
  )
}
