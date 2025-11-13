"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Send } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Newsletter() {
  const sectionRef = useRef(null)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".newsletter-icon, .newsletter-title, .newsletter-text", {
        scrollTrigger: {
          trigger: ".newsletter-title",
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      })

      gsap.from(".newsletter-form", {
        scrollTrigger: {
          trigger: ".newsletter-form",
          start: "top 75%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        ease: "power2.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, []) // Added empty dependency array to prevent re-running

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    gsap.to(".newsletter-form", {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        gsap.to(".newsletter-success", {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.2,
        })
      },
    })

    setIsSubmitted(true)
  }

  return (
    <section ref={sectionRef} className="section-padding bg-[rgba(26,26,26,1)]">
      <div className="container-max max-w-2xl mx-auto text-center">
        <div className="newsletter-icon w-20 h-20 mx-auto mb-8 bg-white/10 rounded-full flex items-center justify-center border-2 border-primary-beige">
          <Mail className="w-10 h-10 text-primary-beige" />
        </div>

        <h2 className="newsletter-title text-white mb-4">Restez Informés</h2>

        <p className="newsletter-text text-neutral-cream text-lg leading-relaxed mb-8">
          Recevez nos offres exclusives, actualités et inspirations pour vos prochaines escapades normandes. Promis, pas
          de spam !
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
                className="flex-1 px-6 py-3 rounded-full border-2 border-primary-beige bg-white text-text-dark placeholder-text-gray focus:outline-none focus:ring-2 focus:ring-primary-beige focus:ring-offset-2 focus:ring-offset-neutral-brown"
              />
              <button
                type="submit"
                className="text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2 whitespace-nowrap"
                style={{ backgroundColor: "#6B5B4F" }}
              >
                <Send size={18} />
                S'inscrire
              </button>
            </div>

            <label className="flex items-center justify-center gap-2 text-sm text-neutral-cream">
              <input type="checkbox" required className="w-4 h-4 rounded" />
              J'accepte de recevoir la newsletter
            </label>
          </form>
        ) : (
          <div className="newsletter-success opacity-0 relative">
            <div className="bg-green-500/20 border-2 border-green-500 rounded-lg p-6 text-green-200">
              <p className="font-bold mb-2">✓ Merci ! Vous êtes inscrit(e)</p>
              <p className="text-sm">Bienvenue dans notre communauté !</p>
            </div>
          </div>
        )}

        <div className="mt-8 space-y-3">
          <div className="inline-block px-4 py-2 border-2 border-primary-beige text-primary-beige rounded-full text-sm font-bold">
            Déjà +2,500 abonnés
          </div>
          <p className="text-xs text-neutral-beige">Désinscription en 1 clic à tout moment</p>
        </div>
      </div>
    </section>
  )
}
