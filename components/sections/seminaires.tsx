"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Users, Presentation, Coffee } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

gsap.registerPlugin(ScrollTrigger)

export default function Seminaires() {
  const sectionRef = useRef(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".seminaires-image", {
        scrollTrigger: {
          trigger: ".seminaires-image",
          start: "top 75%",
        },
        clipPath: "circle(0%)",
        scale: 1.3,
        duration: 1.2,
        ease: "power3.out",
      })

      gsap.from(".seminaires-content > *", {
        scrollTrigger: {
          trigger: ".seminaires-content",
          start: "top 75%",
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="seminaires" className="section-padding bg-neutral-cream">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image séminaire style villa, toute hauteur */}
          <div className="seminaires-image rounded-2xl overflow-hidden shadow-lg h-168">
            <img
              src="/images/design-mode/diapo_1_compressor-1920x960.jpg"
              alt="Séminaires"
              className="w-full h-full aspect-[16/9] object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-6 left-6 bg-accent-red text-white px-4 py-2 rounded-full font-bold text-sm">
              Séminaires & Événements
            </div>
          </div>

          {/* Content */}
          <div className="seminaires-content">
            <h2 className="mb-4">Vos Événements Professionnels & Privés</h2>

            <p className="text-lg text-text-gray mb-8 leading-relaxed">
              Organisez séminaires, réunions, formations ou célébrations privées dans nos espaces modulables jusqu'à 40
              personnes. Équipements audiovisuels complets, restauration sur-mesure et forfaits tout compris
              disponibles.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <Users className="w-8 h-8 text-accent-red flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-text-dark mb-1">Capacité 10-40 personnes</h4>
                  <p className="text-text-gray">Salles modulables et lumineuses</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Presentation className="w-8 h-8 text-accent-red flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-text-dark mb-1">Équipements Pro</h4>
                  <p className="text-text-gray">Vidéoprojecteur, paperboard, WiFi fibre</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Coffee className="w-8 h-8 text-accent-red flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-text-dark mb-1">Restauration Sur-Mesure</h4>
                  <p className="text-text-gray">Pauses, déjeuners, cocktails dinatoires</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white p-6 rounded-lg border border-neutral-beige mb-8">
              <p className="text-sm font-bold text-text-dark mb-3">Tarifs Indicatifs :</p>
              <div className="space-y-2 text-text-gray mb-4">
                <p>• Demi-journée : à partir de 250€</p>
                <p>• Journée complète : à partir de 450€</p>
                <p>• Formule résidentielle : sur devis</p>
              </div>
            </div>

            <button onClick={() => setIsModalOpen(true)} className="cta-red">
              Demander un Devis Rapide →
            </button>
          </div>
        </div>
      </div>

      {/* Devis Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Demande de Devis</DialogTitle>
          </DialogHeader>

          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium text-text-dark block mb-2">
                Nom de l'entreprise / organisation
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-text-dark block mb-2">Nom</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-text-dark block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-text-dark block mb-2">Téléphone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-text-dark block mb-2">Type d'événement</label>
              <select className="w-full px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red">
                <option>Séminaire</option>
                <option>Formation</option>
                <option>Réunion</option>
                <option>Cocktail</option>
                <option>Autre</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-text-dark block mb-2">Nombre de participants</label>
              <input
                type="number"
                min="1"
                max="40"
                className="w-full px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-text-dark block mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red resize-none"
              ></textarea>
            </div>

            <button type="submit" className="w-full cta-red">
              Envoyer ma demande
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  )
}
