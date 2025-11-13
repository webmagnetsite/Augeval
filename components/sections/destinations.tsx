"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const destinations = [
  {
    id: 1,
    title: "Plages du Débarquement",
    distance: "45 min",
    description: "Omaha Beach, cimetière américain de Colleville, Arromanches. Plongez dans l'histoire du 6 juin 1944.",
    image: "https://www.augeval.com/wp-content/uploads/2020/05/Omaha-beach-6-760x495-1.jpg",
  },
  {
    id: 2,
    title: "Honfleur",
    distance: "15 min",
    description: "Port pittoresque, maisons à colombages, Vieux Bassin. Village d'artistes aux ruelles charmantes.",
    image: "https://www.augeval.com/wp-content/uploads/2020/05/honfleur02-scaled.jpg",
  },
  {
    id: 3,
    title: "Mont-Saint-Michel",
    distance: "2h",
    description: "Merveille médiévale classée UNESCO. Abbaye perchée sur son îlot rocheux et baie spectaculaire.",
    image: "/mont-saint-michel.jpg",
  },
  {
    id: 4,
    title: "Cabourg & Houlgate",
    distance: "10-15 min",
    description: "Stations balnéaires Belle Époque, front de mer élégant, promenades romantiques.",
    image: "https://www.augeval.com/wp-content/uploads/2020/05/photo-1569506129577-a1345ae7ef87.jpeg",
  },
  {
    id: 5,
    title: "Pays d'Auge",
    distance: "30 min",
    description: "Route du Cidre, châteaux médiévaux, fromageries artisanales (Camembert, Livarot, Pont-l'Évêque).",
    image: "https://www.augeval.com/wp-content/uploads/2020/05/photo-1560087389-660db08335c3.jpeg",
  },
  {
    id: 6,
    title: "Falaises d'Étretat",
    distance: "1h",
    description:
      "Arches naturelles monumentales, aiguille creuse, sentiers côtiers avec panoramas à couper le souffle.",
    image: "https://www.augeval.com/wp-content/uploads/2020/05/phare-1-1200x675-3.jpg",
  },
]

export default function Destinations() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".destinations-title, .destinations-subtitle", {
        scrollTrigger: {
          trigger: ".destinations-title",
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      })

      gsap.from(".destination-card", {
        scrollTrigger: {
          trigger: ".destination-card",
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="destinations"
      style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "white" }}
    >
      <div className="container-max">
        <div className="text-center mb-12">
          <h2
            className="destinations-title mb-4"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "2.25rem", fontWeight: "bold", color: "#1a1a1a" }}
          >
            Explorez la Normandie depuis Deauville
          </h2>
          <p className="destinations-subtitle text-xl" style={{ color: "#666" }}>
            Trésors normands à portée de main
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="destination-card group relative h-80 overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={destination.image || "/placeholder.svg"}
                alt={destination.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div
                  className="px-3 py-1 rounded-full text-xs font-bold inline-block mb-3"
                  style={{ backgroundColor: "#DC153D", color: "white" }}
                >
                  {destination.distance}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2">{destination.title}</h3>
                <p className="text-sm" style={{ color: "#FAF7F2" }}>
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
