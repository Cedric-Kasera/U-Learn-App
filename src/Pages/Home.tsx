import AboutSection from "../Components/AboutSection"
import Navbar from "../Components/Common/Navbar/Navbar"
import HeroSection from "../Components/HeroSection"
import TopicsTaught from "../Components/TopicsTaught"

function Home() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <TopicsTaught/>
      <TopicsTaught/>
    </div>
  )
}

export default Home
