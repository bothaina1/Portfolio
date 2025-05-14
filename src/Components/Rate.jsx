
function Rate() {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Python', level: 65 },
    { name: 'Git', level: 80 },
  ];
  
    return (
      <>
       {skills.map((skill, index) => (
         <div className="row my-3" key={index}>
         <span className="col-2 bg-dark"> {skill.name}</span>
         <span className="col-8 bg-secondary" ></span>
         <span className="col-2 bg-white"></span>
        </div>
       ))}
      </>
     
    )
  }
  
  export default Rate