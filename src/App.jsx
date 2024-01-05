import  Nav  from "./components/Nav";
import Hero from "./sections/Hero"
import About from "./sections/About"
import './index.css'

const App = () => {

return (
<main className="relative ">
    <Nav/>

    <div className="">
      <Hero/>
    </div>

    <div>
      <About/>
    </div>
</main>
  )
}



export default App;