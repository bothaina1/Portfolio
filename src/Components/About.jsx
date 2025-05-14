
function About() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = "../assets/Buthaina_Hassan_s_Resume.pdf"; // Replace with your PDF file's path
        link.download = 'Buthaina_Hassan_Resume.pdf';  // You can specify the file name for the download
        link.click();
      };
  
    return (
     <section className="hero-section bg-dark text-white  py-5 row ">
        <div className="col-5" id='hero-text'>
            <h1>About me</h1>
           
        </div>
        <div className="col-7 " >
            <p className="text-white">I am a software engineer with a passion for creating innovative solutions. 
                I have experience in various programming languages and frameworks, 
                and I am always eager to learn new technologies.
                 My goal is to build applications that make a difference in people's lives.
                 
                </p>
                <p>I thrive in problem-solving scenarios and enjoy translating complex requirements into clean, efficient, and scalable code. I'm continuously exploring new technologies and methodologies to stay ahead in this ever-evolving field, whether it's adopting a new JavaScript framework, learning about DevOps practices, or experimenting with AI-driven tools.</p>
            <button className="btn bg-dark border text-white mt-5 p-3" onClick={handleDownload}> Download Resume</button>

        </div>
       
     </section>
    )
  }
  
  export default About