 function Card(props) {
  console.log(props)
  const {project} = props
  return (
    <div className="col-md-6 col-lg-4 mb-5 " key={project.title}>
        <div className="card h-100 shadow">
        
            <div className= {`card-body ${project.cardColor} ${project.textColor} d-flex justify-content-center align-items-center`}  style={{height: '300px'}}>
            <h5 className="card-title text-center ">{project.title}</h5>
            <p></p>
                
                  
            </div>
        </div>
    </div>
    
  );
};

export default Card;
