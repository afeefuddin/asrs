import { useRef } from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Footer from "../components/Footer";

function MainPage(){
   let aboutRef = useRef(null)
   const scrollToSection = (element) =>{
    console.log(element)
    if(element && element.current){

        window.scrollTo({
            top: element.current.offsetTop,
            behavior: "smooth"
        })
    }
   }
    return (
        <>
        <Navbar />
        <div style={{border: '0.5px solid white'}}></div>
        <Intro onClick={()=>{scrollToSection(aboutRef)}} />
        <div style={{border: '0.5px solid white'}}></div>
        <About ref={aboutRef} />
        <div style={{border: '0.5px solid white'}}></div>
        <Footer />
        </>
    )
}

export default MainPage;