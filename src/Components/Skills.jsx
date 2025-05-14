import "./Skills.css"
import Rate from "./Rate"
function Skills() {
   
  
    return (
     <section className="skills-section bg-dark text-white  py-5  " >
        <div   id="skills">
        <h1  className="mb-5" >Skills</h1>
        <p className="text-white">I am a software engineer with a passion for creating innovative solutions. 
                I have experience in various programming languages and frameworks, 
                and I am always eager to learn new technologies.
                 My goal is to build applications that make a difference in people's lives.
                 
                </p>
           
        </div>
        

        <div className=" row">
            <div className="col-6 px-5" id='hero-text'> 
                <h2>My Focus</h2>
                <p>__________________________</p>
                <ul className="list-unstyled">
                    <li className="m-2">Web Development</li>
                    <li className="m-2">Mobile Applications</li>
                    <li className="m-2">Cloud Computing</li>
                    <li className="m-2">Machine Learning</li>
                </ul>
                
                
               
            </div>


            <div className="col-5"> 
          
               <Rate />
                
           
            </div>
            
        </div>
       
       

            
           
      
       
     </section>
    )
  }
  
  export default Skills