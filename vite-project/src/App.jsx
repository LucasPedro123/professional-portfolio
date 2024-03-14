import Header from "./Component/Header/Header-component";
import './Assets/index.css'
import  './Assets/global.css'
import Main from "./Component/Main/Main-component";
import About from "./Component/About/About-component";
import Projects from "./Component/Projects/Projects-component";
import MyTechs from "./Component/MyTechs/MyTechs-component";
import Experience from "./Component/Experience/Experience-component";

function App() {

  return (
    <>
      <Header />
      <Main />
      <About />
      <Projects />
      <MyTechs />
      <Experience/>
    </>
  )
}

export default App
