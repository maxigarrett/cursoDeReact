import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { ThemeProvaider } from "../context/ThemeContext";
import { LenguajeProvaider } from "../context/LenguajeContext";
import { SessionProvider } from "../context/SessionContext";



export const MyPage=()=>{
  return (
    <div className='App'>
      <ThemeProvaider>
        <LenguajeProvaider>
          <SessionProvider>
            <Header/>
            <Main/>
            <Footer/>
          </SessionProvider>
        </LenguajeProvaider>
      </ThemeProvaider>
    </div>
  );
}