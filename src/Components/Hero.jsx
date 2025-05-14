import profileImage from '../assets/web-developer-female-icon-vector.jpg'; // Import the profile image
import './Hero.css'
function Hero() {
   
  
    return (
     <section className="hero-section bg-dark text-white  py-5 row ">
        <div className="col-5" id='hero-text'>
            <h1> Buthaina Hassan </h1>
            <h2> Software Engineer </h2>
            <button className="btn bg-dark border text-white mt-5 p-3"> Contact Me</button>

        </div>
        <div className="col-7 " >
           <img src={profileImage} alt="Profile" className=" rounded-circle border" style={{width:"500px"}}/>
        </div>
       
     </section>
    )
  }
  
  export default Hero