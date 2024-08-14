import './App.css'
import Blogs from './Blogs/Blogs'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Hero from './Hero/Hero'

function App() {
 

  return (
    <>
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <Hero></Hero>
      <Blogs></Blogs>
      <Footer></Footer>

    </div>
     
    </>
  )
}

export default App
