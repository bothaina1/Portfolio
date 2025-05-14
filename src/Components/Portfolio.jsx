import Card from './Card';

import { projects } from '../Utils/cards';

const Portfolio = () => {
  return (
    <section className="portfolio-section py-5 bg-light">
      <div className="container">
        <h1 className=" mb-5 ">Portfolio</h1>
        <div className="row">
          {projects.map((project) => (
            <Card project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
