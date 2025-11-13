"use client"

import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Bed, Sparkles } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Reservation() {
  const sectionRef = useRef(null)
  const [hotelDates, setHotelDates] = useState({ checkIn: "", checkOut: "" })
  const [spaDate, setSpaDate] = useState("")

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reservation-module", {
        scrollTrigger: {
          trigger: ".reservation-module",
          start: "top 75%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="reservation" className="section-padding bg-[rgba(26,26,26,1)]">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hotel Reservation */}
          <div className="reservation-module bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Bed className="w-8 h-8 text-accent-red" />
              <h3 className="font-serif text-2xl font-bold text-text-dark">Réserver votre Chambre</h3>
            </div>

            <form className="space-y-6">
              {/* Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-text-dark block mb-2">Check-in</label>
                  <input
                    type="date"
                    value={hotelDates.checkIn}
                    onChange={(e) => setHotelDates({ ...hotelDates, checkIn: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-text-dark block mb-2">Check-out</label>
                  <input
                    type="date"
                    value={hotelDates.checkOut}
                    onChange={(e) => setHotelDates({ ...hotelDates, checkOut: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-text-dark block mb-2">Adultes</label>
                  <select className="w-full px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red">
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-text-dark block mb-2">Enfants -12 ans</label>
                  <select className="w-full px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red">
                    {Array.from({ length: 6 }, (_, i) => i).map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Room Type */}
              <div>
                <label className="text-sm font-medium text-text-dark block mb-2">Type de Chambre</label>
                <select className="w-full px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red">
                  <option>Meilleur tarif disponible</option>
                  <option>Solo/Douche - à partir de 95€</option>
                  <option>Classique - à partir de 120€</option>
                  <option>Supérieure Balnéo - à partir de 150€</option>
                  <option>Familiale - à partir de 180€</option>
                  <option>Suite - à partir de 250€</option>
                </select>
              </div>

              {/* Options */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-neutral-beige" />
                  <span className="text-sm text-text-dark">Petit-déjeuner (+16€/adulte/jour)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-neutral-beige" />
                  <span className="text-sm text-text-dark">Parking privé (+10€/nuit)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-neutral-beige" />
                  <span className="text-sm text-text-dark">Lit bébé gratuit</span>
                </label>
              </div>

              {/* Price */}
              <div className="bg-neutral-cream p-4 rounded-lg">
                <p className="text-sm text-text-gray mb-1">Total estimé</p>
                <p className="font-serif text-3xl font-bold text-primary-red">546€</p>
                <p className="text-xs text-text-gray mt-1">3 nuits × 150€ + petit-déj 96€</p>
              </div>

              <button className="w-full cta-red">Vérifier Disponibilités →</button>
            </form>
          </div>

          {/* Spa Reservation */}
          <div className="reservation-module bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-accent-red" />
              <h3 className="font-serif text-2xl font-bold text-text-dark">Réserver votre Séance Spa</h3>
            </div>

            <form className="space-y-6">
              {/* Service Type */}
              <div>
                <label className="text-sm font-medium text-text-dark block mb-3">Type de Prestation</label>
                <select className="w-full px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red">
                  <option>Spa Privatif 2h - 120€</option>
                  <option>Spa Privatif 4h - 180€</option>
                  <option>Massage Signature 60min - 85€</option>
                  <option>Rituel Évasion 90min - 140€</option>
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-text-dark block mb-2">Date</label>
                  <input
                    type="date"
                    value={spaDate}
                    onChange={(e) => setSpaDate(e.target.value)}
                    className="w-full px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-text-dark block mb-2">Créneau</label>
                  <select className="w-full px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red">
                    <option>10h00</option>
                    <option>12h00</option>
                    <option>14h00</option>
                    <option>16h00</option>
                    <option>18h00</option>
                    <option>20h00</option>
                  </select>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm text-green-700 font-medium">✓ Disponible</p>
              </div>

              {/* Guests */}
              <div>
                <label className="text-sm font-medium text-text-dark block mb-2">Nombre de Personnes</label>
                <select className="w-full px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red">
                  <option>1 personne</option>
                  <option>2 personnes</option>
                </select>
              </div>

              {/* Contact */}
              <div>
                <label className="text-sm font-medium text-text-dark block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-neutral-beige rounded-lg focus:outline-none focus:border-accent-red"
                />
              </div>

              {/* Options */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-neutral-beige" />
                  <span className="text-sm text-text-dark">Bouteille Prosecco (+25€)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-neutral-beige" />
                  <span className="text-sm text-text-dark">Plateau fruits frais (+15€)</span>
                </label>
              </div>

              {/* Price */}
              <div className="bg-neutral-cream p-4 rounded-lg">
                <p className="text-sm text-text-gray mb-1">Total</p>
                <p className="font-serif text-3xl font-bold text-primary-red">120€</p>
              </div>

              <button className="w-full cta-red">Réserver ma Séance →</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
