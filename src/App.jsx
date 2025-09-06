import './App.css'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import EmailGenerator from './Components/EmailGenerator'
import FAQ from "./Components/FAQ";
import Footer from './Components/Footer'

function App() {
 
  return (
    <div>
      <Navbar />
      <Body />
      <EmailGenerator />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
