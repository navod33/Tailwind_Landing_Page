import  Nav  from "./components/Nav";
import  Footer  from "./components/Footer";
import Hero from "./sections/Hero"
import About from "./sections/About"
import Service from "./sections/Service"
import Price from "./sections/Price"


import './index.css'

const App = () => {

return (
<main className="relative ">
    <Nav/>
    <section className="">
      <Hero/>
    </section>
    <section className="padding">
      <About/>
    </section>
    <section className="">
      <Service imgUrl="src\assets\images\undraw_happy_news_hxmt.png"/>
      <Service imgUrl="src\assets\images\undraw_mention_6k5d.png"/>
      <Service imgUrl="src\assets\images\undraw_social_influencer_sgsv.png"/>
    </section>
    <section className="padding">
      <Price/>
    </section>
    <Footer/>
</main>
  )
}



export default App;