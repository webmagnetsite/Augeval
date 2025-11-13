"use client"

import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronDown } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    q: "Quels sont les horaires de check-in et check-out ?",
    a: "Check-in : à partir de 15h | Check-out : jusqu'à 11h. Check-in anticipé et late check-out possibles selon disponibilités. Réception ouverte 24h/24.",
  },
  {
    q: "Les animaux de compagnie sont-ils acceptés ?",
    a: "Oui, nous accueillons vos compagnons à 4 pattes (chiens et chats) moyennant un supplément de 15€/nuit. Panier et gamelles disponibles.",
  },
  {
    q: "Disposez-vous d'un parking ?",
    a: "Oui, parking public gratuit et non surveillé juste en face de l'hôtel. Places généralement disponibles toute l'année.",
  },
  {
    q: "Le spa est-il accessible aux non-résidents ?",
    a: "Oui, notre spa privatif est ouvert aux clients externes. Formules 2h (120€) ou 4h (180€). Massages à la carte.",
  },
  {
    q: "Le petit-déjeuner est-il inclus dans le tarif chambre ?",
    a: "Cela dépend du tarif/offre choisis. Tarif à la carte : 16€/adulte, 8€/enfant -12 ans. Servi de 7h30 à 10h30 (11h week-ends).",
  },
  {
    q: "À quelle distance se trouve la plage ?",
    a: "10 minutes à pied jusqu'à la plage et aux célèbres Planches de Deauville. Centre-ville accessible en 5-7 minutes.",
  },
  {
    q: "Le WiFi est-il gratuit ?",
    a: "Oui, WiFi fibre haut débit gratuit dans tout l'établissement. Connexion stable idéale pour télétravail.",
  },
  {
    q: "Quelle est votre politique d'annulation ?",
    a: "Annulation gratuite jusqu'à 48h avant l'arrivée (selon tarif). Offre Liberté : annulation jusqu'à 24h. Voir conditions lors de la réservation.",
  },
  {
    q: "La piscine est-elle ouverte toute l'année ?",
    a: "Piscine extérieure chauffée à 28°C ouverte de mi-avril à fin septembre. Transats et parasols disponibles.",
  },
  {
    q: "Proposez-vous des services de conciergerie ?",
    a: "Oui, notre équipe peut vous aider à réserver restaurants, taxis, activités, visites guidées. Informations touristiques disponibles à la réception.",
  },
]

export default function FAQ() {
  const sectionRef = useRef(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-title, .faq-subtitle", {
        scrollTrigger: {
          trigger: ".faq-title",
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      })

      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: ".faq-item",
          start: "top 75%",
        },
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="faq" className="section-padding bg-neutral-cream">
      <div className="container-max max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="faq-title mb-4">Questions Fréquentes</h2>
          <p className="faq-subtitle text-lg text-text-gray">Tout savoir avant votre séjour</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item border-b border-neutral-beige">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-start gap-4 hover:text-primary-red transition-colors text-left"
              >
                <span className="font-serif text-xl text-text-dark flex-1 font-medium">{faq.q}</span>
                <ChevronDown
                  className={`w-6 h-6 text-accent-red flex-shrink-0 mt-1 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="pb-6 pl-10 text-text-gray leading-relaxed animate-in fade-in">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
