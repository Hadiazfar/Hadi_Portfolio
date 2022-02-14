import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/expense.png";
import covid3 from "../../Assets/covid3.png"
import weatherApp from "../../Assets/weatherApp.png"
import shoestore from "../../Assets/shoestore.png"
import QuizzAPP from "../../Assets/QuizzAPP.png"
import CurdOperation from "../../Assets/CurdOperation.png"
import Redux from "../../Assets/Redux.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Expense Tracker" 
              type=" (React Js)"
              description="Expense Tracker Using Context Api And Reducer"
              link="http://expensemanager.surge.sh"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid3}
              isBlog={false}
              title="Covid App"
              type=" (React Js)"
              description="Fetching Third Party Api by using React Hooks and Material Ui and Chart.js"
              link="http://api-fetching-covid-app.surge.sh"
            />
          </Col>
       
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              isBlog={false}
              title="Weather App"
              type=" (React Js)"
              description="Fetching Global Weather Api by using React Hooks"
              link="http://globalweatherapp.surge.sh"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoestore}
              isBlog={false}
              title="Shoe Store"
              type=" (React Js)"
              description="Shoe Store by using React Rounting and Routing Hook usePrams form Dynamic Routing "
              link="http://react-routing-shoe-store.surge.sh"
            />
          </Col>
        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuizzAPP}
              isBlog={false}
              title="Quiz App"
              type=" (React Js)"
              description="Quiz App by using TypeScript and fetching Quiz API "
              link="http://typescript-quiz-app.surge.sh"
            />
          </Col>
        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CurdOperation}
              isBlog={false}
              title="Curd Operation"
              type=" (React Js)"
              description="Curd Operation"
              link="http://react-curd-operation.surge.sh"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Redux}
              isBlog={false}
              title="E-Commerce"
              type=" (React Js)"
              description="E-commerce website with add to cart option using Redux"
              link="http://redux-add-to-cart.surge.sh"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
