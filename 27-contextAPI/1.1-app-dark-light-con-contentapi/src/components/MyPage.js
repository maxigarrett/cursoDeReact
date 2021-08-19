import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { ThemeProvaider } from "../context/ThemeContext";




export const MyPage=()=>{

  return (
    <div className='App'>
      {/*ThemeProvaider tiene las variables de estado global gracias a contexapi que queremos compartir 
      con todos los componentes*/}
      <ThemeProvaider>
        <Header/>
        <Main />
        <Footer/>
      </ThemeProvaider>
    </div>
  );
}