"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MapPin, Phone, Clock, Linkedin, Instagram, Facebook } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-info > *", {
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      })

      gsap.from(".contact-map", {
        scrollTrigger: {
          trigger: ".contact-map",
          start: "top 75%",
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="section-padding bg-neutral-cream">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="contact-info space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <MapPin className="w-8 h-8 text-primary-beige flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-text-dark mb-2">Nous Trouver</h4>
                <p className="text-text-gray leading-relaxed">
                  Villa Augeval
                  <br />
                  15 Avenue Hocquart de Turtot
                  <br />
                  14800 Deauville, France
                </p>
                <a href="#" className="text-primary-beige hover:text-accent-red font-medium mt-2 inline-block">
                  Ouvrir dans Google Maps →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <Phone className="w-8 h-8 text-primary-beige flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-text-dark mb-2">Nous Contacter</h4>
                <a
                  href="tel:+33231811318"
                  className="text-2xl font-bold text-accent-red hover:text-accent-red/80 font-serif block mb-2"
                >
                  02 31 81 13 18
                </a>
                <p className="text-sm text-text-gray">Réception 24h/24 - 7j/7</p>
                <p className="text-sm text-text-gray">9h-20h pour meilleure disponibilité</p>
                <a
                  href="mailto:infos@augeval.com"
                  className="text-primary-beige hover:text-accent-red font-medium mt-2 inline-block"
                >
                  infos@augeval.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-primary-beige flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-text-dark mb-2">Horaires</h4>
                <ul className="text-text-gray space-y-1 text-sm">
                  <li>Check-in : 15h - 23h</li>
                  <li>Check-out : 7h - 11h</li>
                  <li>Réception : 24h/24</li>
                  <li>Petit-déjeuner : 7h30 - 10h30 (11h week-ends)</li>
                  <li>Spa : 10h - 21h</li>
                </ul>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-serif font-bold text-text-dark mb-4">Suivez-nous</h4>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Facebook, label: "Facebook" },
                  { icon: Phone, label: "WhatsApp" },
                  { icon: Linkedin, label: "LinkedIn" },
                ].map((social, i) => {
                  const Icon = social.icon
                  return (
                    <button
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-primary-beige text-primary-beige hover:bg-primary-beige hover:text-white transition-all flex items-center justify-center"
                    >
                      <Icon size={20} />
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="contact-map rounded-2xl overflow-hidden shadow-lg h-96 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.8987432923476!2d0.14265!3d49.34333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d68c8d6a8d6a8d%3A0x8d6a8d6a8d6a8d!2s15%20Avenue%20Hocquart%20de%20Turtot%2C%2014800%20Deauville!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
