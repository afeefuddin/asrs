import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
function MainPage(){
    return (
        <>
        <Navbar />
        <div style={{border: '0.5px solid white'}}></div>
        <Intro />
        <div style={{border: '0.5px solid white'}}></div>
        <About />
        </>
    )
}

export default MainPage;