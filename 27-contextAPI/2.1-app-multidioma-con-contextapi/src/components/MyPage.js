import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { ThemeProvaider } from "../context/ThemeContext";
import { LenguajeProvaider } from "../context/LenguajeContext";



export const MyPage=()=>{

  return (
    <div className='App'>
      <ThemeProvaider>
        <LenguajeProvaider>
          <Header/>
          <Main/>
          <Footer/>
        </LenguajeProvaider>
      </ThemeProvaider>
    </div>
  );
}