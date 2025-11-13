import Header from "@/components/sections/header"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Stats from "@/components/sections/stats"
import Villa from "@/components/sections/villa"
import Rooms from "@/components/sections/rooms"
import Offers from "@/components/sections/offers"
import Spa from "@/components/sections/spa"
import SpaServices from "@/components/sections/spa-services"
import Soins from "@/components/sections/soins"
import Gallery from "@/components/sections/gallery"
import Testimonials from "@/components/sections/testimonials"
import Destinations from "@/components/sections/destinations"
import Seminaires from "@/components/sections/seminaires"
import FAQ from "@/components/sections/faq"
import Reservation from "@/components/sections/reservation"
import Contact from "@/components/sections/contact"
import Newsletter from "@/components/sections/newsletter"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Villa />
      <Rooms />
      <Offers />
      <Spa />
      <SpaServices />
      <Soins />
      <Gallery />
      <Testimonials />
      <Destinations />
      <Seminaires />
      <FAQ />
      <Reservation />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  )
}
