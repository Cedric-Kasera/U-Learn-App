import AboutSection from "../Components/AboutSection"
import Navbar from "../Components/Common/Navbar/Navbar"
import HeroSection from "../Components/HeroSection"
import Info from "../Components/Info"
import Textimonials from "../Components/Testimonials"
import TopicsTaught from "../Components/TopicsTaught"

function Home() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <TopicsTaught/>
      <Info/>
      <Textimonials/>
    </div>
  )
}

export default Home
