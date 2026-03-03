import Features from '@/components/featurecards/featurecards'
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/hero'
import Navbar from '@/components/navbar/navbar'


const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default page