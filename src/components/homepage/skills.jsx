import React from "react";
import "./styles/skills.css";

const Skills = () => {
	return (
		<React.Fragment>
		<h2 className="skills-title">Skills</h2>
		<section id="skills" className="section scrollspy">
			<div className="container">
				<div className="card">
					<div className="card-content">
						<h4>Front-End</h4>
						<div className="row text-center">
							<div className="col s4 m2">
								<img alt="HTML" src="./html5.png" className="responsive-img"/>
							</div>
							<div className="col s4 m2">
								<img alt="CSS" src="./css3.png" className="responsive-img"/>
							</div>
							<div className="col s4 m2">
								<img alt="JS" src="./javascript.png" className="responsive-img"/>
							</div>
							<div className="col s4 m2">
								<img alt="React" src="./javascript.png" className="responsive-img"/>
							</div>
						</div>
					</div>
				</div>

				<div className="card">
					<div className="card-content">
						<h4 className="blue-grey-text light">Back-End</h4>
						<div className="row text-center">
							<div className="col s4 m2">
								<img alt="Java" src="./java.png" className="responsive-img"/>
							</div>
							<div className="col s4 m2">
								<img alt="Spring" src="./spring-boot.png" className="responsive-img"/>
							</div>
							<div className="col s4 m2">
								<img alt="NodeJS" src="./nodejs.png" className="responsive-img"/>
							</div>
							<div className="col s4 m2">
								<img alt="SQL" src="./oracle.png" className="responsive-img"/>
							</div>
							<div className="col s4 m2">
								<img alt="NOSQL" src="./mongodb.png" className="responsive-img"/>
							</div>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-content">
						<h4 className="blue-grey-text light">Other tools</h4>
						<div className="row text-center">
							<div className="col s4 m2">
								<img alt="Git" src="./git.png" className="responsive-img"/>
							</div>
							<div className="col s4 m2">
								<img alt="Github/Gitlab" src="./github.png" className="responsive-img"/>
							</div>
							<div className="col s4 m2">
								<img alt="Docker" src="./docker.png" className="responsive-img"/>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
		</React.Fragment>
	);
};

export default Skills;
