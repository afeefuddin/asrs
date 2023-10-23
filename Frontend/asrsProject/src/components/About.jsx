import styles from './About.module.css'
const {aboutContainer, container,aboutHeading,para} = styles;
function About(){
    return(
        <div className={container}>
            <div className={aboutContainer}>
                <div><h1 className={aboutHeading}>About Us</h1></div>
                <div className={para}>Blah Blahfasfdhfkjldasjfdsdhfd;khfk;kldhfjfkljahflkdhkhf khdkljfkdh jfjadkjfhue jdhfk jshaffk dhfja'9er yfih aj  ifdodfhads;fhb </div>
            </div>
        </div>
    );
}
export default About;