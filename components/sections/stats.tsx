"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Bed, Waves, Star } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { icon: Bed, number: "41", label: "Chambres & Suites" },
  { icon: Waves, number: "200m²", label: "Espace Spa & Bien-Être" },
  { icon: Star, number: "4★", label: "Hôtel de Charme" },
  { icon: Waves, number: "28°C", label: "Piscine Chauffée" },
]

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const cards = sectionRef.current?.querySelectorAll(".stat-card")
        if (cards && cards.length > 0) {
          gsap.set(cards, { opacity: 0 })
          gsap.to(cards, {
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
          })
        }
      }, sectionRef)

      return () => {
        ctx.revert()
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-zinc-800 " ref={sectionRef} style={{ backgroundColor: "#27272A", paddingTop: "80px", paddingBottom: "128px" }}>
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="stat-card rounded-2xl p-8 text-center transition-all duration-300"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  /* Changed border from yellow/gold to red accent color */
                  border: "1px solid #D4AF8F",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)"
                  /* Changed drop-shadow from yellow to red */
                  e.currentTarget.style.filter = "drop-shadow(0 0 20px rgba(220, 21, 61, 0.4))"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"
                  e.currentTarget.style.filter = "none"
                }}
              >
                <Icon className="w-12 h-12 mx-auto mb-4" style={{ color: "#DC153D" }} />
                <div
                  data-target={stat.number.replace("m²", "").replace("°C", "").replace("★", "")}
                  className="text-4xl font-serif font-bold mb-2"
                  style={{ color: "#FAF7F2" }}
                >
                  {stat.number}
                </div>
                <p className="font-medium" style={{ color: "#e8d5c4" }}>
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
