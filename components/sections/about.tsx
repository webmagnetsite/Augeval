"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-badge", {
        scrollTrigger: {
          trigger: ".about-badge",
          start: "top 75%",
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
      })

      gsap.from(".about-title, .about-text", {
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-cover bg-center relative"
      style={{
        backgroundImage: "url(https://www.augeval.com/wp-content/uploads/2020/04/diapo_3-1920x960.jpg)",
      }}
    >
      <div style={{ background: "linear-gradient(to right, rgba(29,29,32,0.9) 0%, rgba(39,39,42,0.1) 100%)" }} className="absolute inset-0"></div>

      <div className="container-max relative z-10 max-w-2xl mx-auto text-center text-white">
        <div className="about-badge inline-block mb-6 px-4 py-2 border-2 bg-zinc-800 border-primary-beige text-primary-beige rounded-full text-sm font-medium">
          Depuis 1993
        </div>

        <h2 className="about-title text-white mb-6">Une Villa d'Exception au Cœur de Deauville</h2>

        <p className="about-text text-neutral-cream mb-6 text-lg leading-relaxed">
          Réunissant deux villas Belle Époque classées où aurait séjourné Gilbert Bécaud, la Villa Augeval vous
          accueille dans un écrin intimiste aux colombages vert amande. Entre mer et campagne, à quelques pas de
          l'hippodrome et des célèbres Planches, notre hôtel de charme familial cultive l'art de recevoir à la
          française.
        </p>

        <p className="about-text text-neutral-cream mb-8 text-lg leading-relaxed">
          41 chambres climatisées rénovées en 2019, un jardin paysagé secret, une piscine chauffée et un spa privatif :
          tous les ingrédients sont réunis pour une escapade normande inoubliable.
        </p>

        <div className="about-text border-2 border-primary-beige rounded-lg p-8 my-8 backdrop-blur bg-zinc-800">
          <p className="font-serif italic text-xl text-primary-beige">
            "L'authenticité d'un patrimoine Belle Époque, le confort d'un hôtel moderne"
          </p>
        </div>

        <button className="cta-outline bg-zinc-800">Notre Histoire Familiale →</button>
      </div>
    </section>
  )
}
