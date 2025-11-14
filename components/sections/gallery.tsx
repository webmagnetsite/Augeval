"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules"
import { ZoomIn } from "lucide-react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

gsap.registerPlugin(ScrollTrigger)

const galleryImages = [
  {
    id: 1,
    url: "https://www.augeval.com/wp-content/uploads/2020/04/diapo_1-1920x960.jpg",
    title: "Façade Belle Époque",
    category: "Extérieur",
  },
  {
    id: 2,
    url: "https://www.augeval.com/wp-content/uploads/2020/07/hotel_augeval_deauville_facade_augeval_piscine_03-600x400.jpg",
    title: "Piscine Chauffée 28°C",
    category: "Extérieur",
  },
  {
    id: 3,
    url: "https://www.augeval.com/wp-content/uploads/2020/02/chambre_salon_compressor.jpg",
    title: "Suite Familiale",
    category: "Chambres",
  },
  {
    id: 4,
    url: "https://www.augeval.com/wp-content/uploads/2020/04/diapo_7-1024x683.jpg",
    title: "Chambre Supérieure",
    category: "Chambres",
  },
  {
    id: 5,
    url: "https://www.augeval.com/wp-content/uploads/2021/07/IMG_0797-1-scaled.jpg",
    title: "Chambre Classique",
    category: "Chambres",
  },
  {
    id: 6,
    url: "https://www.augeval.com/wp-content/uploads/2020/05/intro_spa.jpg",
    title: "Spa Privatif",
    category: "Spa",
  },
  {
    id: 7,
    url: "https://www.augeval.com/wp-content/uploads/2020/05/soins__massage_compress.jpg",
    title: "Cabine Massage",
    category: "Spa",
  },
  {
    id: 8,
    url: "https://www.augeval.com/wp-content/uploads/2021/07/IMG_0288-1-1024x683.jpg",
    title: "Petit-Déjeuner",
    category: "Services",
  },
  {
    id: 9,
    url: "https://www.augeval.com/wp-content/uploads/2021/07/Photo-PDJ-4-1024x683.jpg",
    title: "Salle Voûtée",
    category: "Services",
  },
  {
    id: 10,
    url: "https://www.augeval.com/wp-content/uploads/2020/04/diapo_7-1024x683.jpg",
    title: "Bar Lounge",
    category: "Services",
  },
  {
    id: 11,
    url: "https://www.augeval.com/wp-content/uploads/2020/04/diapo_4_compressor-1920x960.jpg",
    title: "Séminaires",
    category: "Événements",
  },
  {
    id: 12,
    url: "https://www.augeval.com/wp-content/uploads/2020/04/diapo_3-1920x960.jpg",
    title: "Terrasse Jardin",
    category: "Extérieur",
  },
]

export default function Gallery() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-title, .gallery-subtitle", {
        scrollTrigger: {
          trigger: ".gallery-title",
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
    <section ref={sectionRef} id="galerie" className="section-padding bg-neutral-beige">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="gallery-title mb-4">Découvrez l'Univers Augeval</h2>
          <p className="gallery-subtitle text-xl text-text-gray">Plongez dans l'ambiance de notre villa</p>
        </div>

        <Swiper
          modules={[Pagination, Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          spaceBetween={30}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation
          className="pb-12"
        >
          {galleryImages.map((image) => (
            <SwiperSlide key={image.id} className="max-w-lg">
              <div className="relative group rounded-xl overflow-hidden shadow-lg">
                <img
                  src={image.url || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs text-neutral-cream mb-1">{image.category}</p>
                    <p className="font-serif text-lg font-bold">{image.title}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary-beige/80 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-5 h-5 text-text-dark" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <button className="cta-outline text-destructive border-destructive">Voir Toutes les Photos ↗</button>
        </div>
      </div>
    </section>
  )
}
