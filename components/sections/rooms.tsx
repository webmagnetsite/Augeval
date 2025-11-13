"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"

gsap.registerPlugin(ScrollTrigger)

const rooms = [
  {
    id: 1,
    title: "Chambre Solo",
    size: "9m²",
    capacity: "1 personne",
    price: "95",
    features: ["Douche", "Climatisation", "TV satellite", "WiFi"],
    image: "https://www.augeval.com/wp-content/uploads/2021/06/DSC_9039-scaled.jpg",
  },
  {
    id: 2,
    title: "Chambre Classique",
    size: "14-16m²",
    capacity: "2 personnes",
    price: "120",
    features: ["Douche", "Balcon", "Climatisation", "Minibar"],
    image: "https://www.augeval.com/wp-content/uploads/2021/07/IMG_0797-1-1024x768.jpg",
  },
  {
    id: 3,
    title: "Chambre Supérieure Balnéo",
    size: "18-26m²",
    capacity: "2 personnes",
    price: "150",
    features: ["Baignoire balnéo", "Parquet", "Vue jardin"],
    image: "https://www.augeval.com/wp-content/uploads/2020/02/chambre_superieure_compressor.jpg",
  },
  {
    id: 4,
    title: "Chambre Familiale",
    size: "Jusqu'à 30m²",
    capacity: "3-4 personnes",
    price: "180",
    features: ["Lits superposés", "2 SDB", "Espace modulable"],
    image: "https://www.augeval.com/wp-content/uploads/2021/06/DSC_9039-scaled.jpg",
  },
  {
    id: 5,
    title: "Suite Familiale",
    size: "40-50m²",
    capacity: "4-5 personnes",
    price: "250",
    features: ["Salon séparé", "Cuisine", "2 chambres", "Terrasse"],
    image: "https://www.augeval.com/wp-content/uploads/2020/02/chambre_salon_compressor.jpg",
  },
]

export default function Rooms() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".rooms-title, .rooms-subtitle", {
        scrollTrigger: {
          trigger: ".rooms-title",
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
    <section ref={sectionRef} id="chambres" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="rooms-title mb-4">Nos Chambres</h2>
          <p className="rooms-subtitle text-xl text-text-gray">Du confort solo à la suite familiale</p>
        </div>

        <Swiper
          modules={[Pagination, Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation
          className="pb-16"
        >
          {rooms.map((room) => (
            <SwiperSlide key={room.id} className="max-w-sm">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-80 overflow-hidden">
                  <img src={room.image || "/placeholder.svg"} alt={room.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-serif text-2xl font-bold mb-2">{room.title}</h3>
                    <p className="text-sm opacity-90">{room.capacity}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-text-gray mb-2">Superficie: {room.size}</p>
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-neutral-cream px-3 py-1 rounded-full text-text-dark">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-neutral-beige pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-text-gray">À partir de</p>
                      <p className="font-serif text-2xl font-bold" style={{ color: "#6B5B4F" }}>
                        {room.price}€
                      </p>
                    </div>
                    <button className="cta-red">Réserver</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
