"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, EffectCards } from "swiper/modules"
import { Utensils, Palmtree, Calendar, Briefcase, Sparkles } from "lucide-react"
import "swiper/css"
import "swiper/css/pagination"

gsap.registerPlugin(ScrollTrigger)

const offers = [
  {
    id: 1,
    icon: Utensils,
    title: "Offre Gourmande",
    image: "https://www.augeval.com/wp-content/uploads/2020/04/petit-dejeuner-compressor-600x400.jpg",
    description: "Savourez l'art de vivre normand avec petit-déjeuner continental premium.",
    features: ["Hébergement confort", "Petit-déjeuner buffet", "Room service 24h/24", "Accès bar lounge"],
  },
  {
    id: 2,
    icon: Palmtree,
    title: "Offre Évasion",
    image: "https://www.augeval.com/wp-content/uploads/2020/04/diapo_5-1920x960.jpg",
    description: "Le parfait équilibre : hébergement confort et 1 soin spa signature 60min.",
    features: ["1 nuit minimum", "Petit-déjeuner gourmand", "1 massage signature 60min", "Accès piscine"],
  },
  {
    id: 3,
    icon: Calendar,
    title: "Offre Liberté",
    image:
      "https://www.augeval.com/wp-content/uploads/2020/07/hotel_augeval_deauville_facade_augeval_piscine_03-600x400.jpg",
    description: "Séjournez à votre rythme avec formule flexible et annulation gratuite 48h.",
    features: ["Check-in/out flexible", "Petit-déjeuner optionnel", "Annulation gratuite 48h", "WiFi haute vitesse"],
  },
  {
    id: 4,
    icon: Briefcase,
    title: "Offre Affaires",
    image: "https://www.augeval.com/wp-content/uploads/2020/04/diapo_4_compressor-1920x960.jpg",
    description: "Séjour professionnel optimisé avec WiFi fibre et espace bureau.",
    features: ["Chambre avec bureau", "WiFi fibre gratuit", "Petit-déjeuner buffet", "Parking gratuit"],
  },
  {
    id: 5,
    icon: Sparkles,
    title: "Offre So Détente",
    image: "https://www.augeval.com/wp-content/uploads/2020/04/diapo_6-1920x960.jpg",
    description: "2 nuits en suite avec accès spa privatif illimité et massage duo.",
    features: ["2 nuits en Suite", "Spa privatif illimité", "Massage duo 90min", "Petits-déj en chambre"],
  },
]

export default function Offers() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".offers-title, .offers-subtitle", {
        scrollTrigger: {
          trigger: ".offers-title",
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="offres" className="section-padding" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="container-max">
        <div className="text-center mb-12">
          <h2
            className="offers-title mb-4"
            style={{ fontSize: "2.25rem", fontFamily: "var(--font-playfair)", fontWeight: "bold", color: "#1a1a1a" }}
          >
            Nos Offres Sur-Mesure
          </h2>
          <p className="offers-subtitle text-xl" style={{ color: "#666" }}>
            Forfaits spécialement conçus pour votre séjour
          </p>
        </div>

        <Swiper
          modules={[Pagination, Navigation, EffectCards]}
          effect="cards"
          grabCursor
          pagination={{ clickable: true }}
          navigation
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          className="pb-12"
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
          {offers.map((offer) => {
            const Icon = offer.icon
            return (
              <SwiperSlide key={offer.id} style={{ maxWidth: "900px", width: "auto" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  {/* Image */}
                  <div className="h-64 md:h-full overflow-hidden">
                    <img
                      src={offer.image || "/placeholder.svg"}
                      alt={offer.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-8 h-8" style={{ color: "#D4AF8F" }} />
                      <h3 className="font-serif text-2xl font-bold" style={{ color: "#1a1a1a" }}>
                        {offer.title}
                      </h3>
                    </div>

                    <p className="mb-6 leading-relaxed" style={{ color: "#666" }}>
                      {offer.description}
                    </p>

                    <div className="mb-8">
                      <p className="text-sm font-medium mb-3" style={{ color: "#1a1a1a" }}>
                        Inclus :
                      </p>
                      <ul className="space-y-2">
                        {offer.features.map((feature, i) => (
                          <li key={i} className="flex items-center" style={{ color: "#666" }}>
                            <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "#D4AF8F" }}></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="cta-red">Réserver</button>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
