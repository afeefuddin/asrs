import styles from './About.module.css'
const {aboutContainer, container,aboutHeading,para,text,textMain} = styles;
function About(){
    return(
        <div className={container}>
            <div className={aboutContainer}>
                <div><h1 className={aboutHeading}>About Us</h1></div>
                <div className={para}> <span className={textMain}>ASRS</span> is a website where you can find the solutions to all your problems. We belive in making complex
                things easy by oversimplifying it. <span className={textMain}>ASRS</span> is a one stop platform to find <strong className={text}>real meaning</strong> of words, know 
                 <strong className={text}> 83% accurate facts</strong> and read  <strong className={text}>research papers and surveys</strong>  which addresses Real Life problems </div>
            </div>
        </div>
    );
}
export default About;