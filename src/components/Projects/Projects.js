import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/expense.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import covid from '/Users/hadiazfar/Portfolio/src/Assets/covid.jpg'
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              description="Expense Tracker Using Context Api And Reducer"
              link="http://expensemanager.surge.sh"
            />
          </Col>

       

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
