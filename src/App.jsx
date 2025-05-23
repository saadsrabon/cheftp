
import './App.css'
import ContactForm from './components/shared/ContactForm'
import Footer from './components/shared/Footer'
import PhotoGallery from './components/shared/Gallery'
import Header from './components/shared/Header'
import Hero from './components/shared/Hero'
import PopularFoods from './components/shared/PopularFoods'
import RequestService from './components/shared/RequestService'
import ServiceOffers from './components/shared/Service'
import WhoIsChef from './components/shared/WhoIsChef'

function App() {


  return (
    <>
    <div className='container mx-auto'>
    <Header></Header>
    <Hero></Hero>
    <ServiceOffers/>
    <PopularFoods></PopularFoods>
    <WhoIsChef></WhoIsChef>
    <PhotoGallery/>
    <ContactForm></ContactForm>
    <RequestService></RequestService>
    <Footer></Footer>
    </div>
    </>
  )
}

export default App
