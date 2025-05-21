
import './App.css'
import ContactForm from './components/shared/ContactForm'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import Hero from './components/shared/Hero'
import PopularFoods from './components/shared/PopularFoods'
import RequestService from './components/shared/RequestService'
import WhoIsChef from './components/shared/WhoIsChef'

function App() {


  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <PopularFoods></PopularFoods>
    <WhoIsChef></WhoIsChef>
    <ContactForm></ContactForm>
    <RequestService></RequestService>
    <Footer></Footer>
    </>
  )
}

export default App
