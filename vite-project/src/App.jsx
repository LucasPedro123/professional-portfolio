import Header from "./Component/Header/Header-component";
import './Assets/index.css'
import  './Assets/global.css'
import Main from "./Component/Main/Main-component";
import About from "./Component/About/About-component";
import Projects from "./Component/Projects/Projects-component";
import MyTechs from "./Component/MyTechs/MyTechs-component";

function App() {

  return (
    <>
      <Header />
      <Main />
      <About />
      <Projects />
      <MyTechs/>
    </>
  )
}

export default App
