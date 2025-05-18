
import './App.css'
import AboutSection from './components/shared/About'
import { ContactForm, RequestServicesForm } from './components/shared/Contact'
import HeroSection from './components/shared/Hero'
import Header from './components/shared/Navbar'
import ChefWebsite from './components/shared/Other'

function App() {


  return (
    <>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <ChefWebsite/>
      <ContactForm/>
      <RequestServicesForm/>
    </>
  )
}

export default App
