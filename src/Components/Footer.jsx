function Footer() {
  
    return (
      <div className="bg-dark text-white  py-5 row " >
        <div className="col-4 px-5 pt-2" >
            <h3 className="mb-3">Get In Touch</h3>
            <div className="mb-3">
             <i class="fa-solid fa-envelope"> </i> 
            <p className="d-inline">   buthaina.hassan18@gmail.com</p>
             </div>
            
            <i class="fa-solid fa-phone"> </i>
            <p className="d-inline">  0127 917 2559 </p>
        </div>

        <div className="col-4  d-flex justify-content-center align-items-center">
        <button className="btn bg-dark border text-white mt-5 p-3"> Contact Me</button>

        </div>
        <div className="col-4 text-end p-5">
        <h5>Follow Me</h5>
            <a href="https://facebook.com" className="text-white me-3">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="https://twitter.com" className="text-white me-3">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="https://linkedin.com" className="text-white me-3">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://github.com" className="text-white">
              <i className="fab fa-github fa-lg"></i>
            </a>
        </div>
         
      </div>
      
    );
  };
  
  export default Footer;
  