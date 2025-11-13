"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import { Star } from "lucide-react"
import "swiper/css"
import "swiper/css/pagination"

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "Un havre de paix en plein cœur de Deauville. L'accueil chaleureux, les chambres raffinées et le spa privatif ont rendu notre week-end inoubliable. Le petit-déjeuner est un délice !",
    author: "Sophie & Marc L.",
    location: "Paris, France",
    date: "Septembre 2024",
  },
  {
    id: 2,
    rating: 5,
    text: "Architecture Belle Époque magnifiquement préservée. Le personnel aux petits soins, la piscine chauffée et la proximité de la plage : tout est parfait. Nous reviendrons !",
    author: "Jennifer K.",
    location: "Bruxelles, Belgique",
    date: "Août 2024",
  },
  {
    id: 3,
    rating: 5,
    text: "Idéal pour un séjour professionnel. WiFi performant, chambre spacieuse avec bureau, parking gratuit. Le spa en fin de journée : pur bonheur !",
    author: "Thomas B.",
    location: "Lyon, France",
    date: "Octobre 2024",
  },
  {
    id: 4,
    rating: 5,
    text: "Notre famille a adoré ! Chambre familiale parfaite, piscine sécurisée et personnel attentionné. Villa pleine de charme.",
    author: "Claire & famille",
    location: "Lille, France",
    date: "Juillet 2024",
  },
  {
    id: 5,
    rating: 5,
    text: "Massage signature exceptionnel, spa privatif romantique... Week-end détente réussi ! Le cadre Belle Époque ajoute une touche magique.",
    author: "Emma R.",
    location: "Londres, UK",
    date: "Juin 2024",
  },
  {
    id: 6,
    rating: 4,
    text: "Excellent rapport qualité-prix à Deauville. Chambre confortable, petit-déjeuner copieux avec produits locaux. Situation calme tout en restant proche du centre.",
    author: "Michel D.",
    location: "Nantes, France",
    date: "Mai 2024",
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonials-title, .testimonials-badge", {
        scrollTrigger: {
          trigger: ".testimonials-title",
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="temoignages" className="section-padding bg-zinc-800">
      <div className="container-max">
        <div className="text-center mb-12">
          <div className="testimonials-badge inline-block mb-6 px-4 py-2 bg-accent-red text-white rounded-full text-sm font-bold">
            Excellent 4.5/5 - TripAdvisor 2024
          </div>
          <h2 className="testimonials-title text-white mb-4">Ils Ont Aimé Leur Séjour</h2>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white/5 border border-accent-red/30 rounded-2xl p-8 h-full hover:scale-102 hover:glow-red transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent-red text-accent-red" />
                    ))}
                </div>

                {/* Quote */}
                <p className="text-neutral-cream italic mb-6 leading-relaxed">"{testimonial.text}"</p>

                {/* Author */}
                <div className="border-t border-accent-red/30 pt-4">
                  <p className="font-serif text-white font-bold">{testimonial.author}</p>
                  <p className="text-sm text-accent-red">{testimonial.location}</p>
                  <p className="text-xs text-neutral-beige">{testimonial.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <a
            href="#"
            target="_blank"
            className="text-accent-red hover:text-accent-red/80 font-medium transition-colors"
            rel="noreferrer"
          >
            Lire tous les avis sur TripAdvisor ↗
          </a>
        </div>
      </div>
    </section>
  )
}
