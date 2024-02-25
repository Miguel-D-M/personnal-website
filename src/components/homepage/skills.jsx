import React from 'react';
import './styles/skills.css'; // Make sure the path is correct

const SkillSet = ({ category, skills }) => (
	<div className="skill-set">
		<h2 className="skill-category">{category}</h2>
		<div className="skills-grid">
			{skills.map((skill) => (
				<div key={skill} className="skill">
					<img width={60} height={60} className="skill-icon" alt={skill.name} src={skill.icon}/>
				</div>
			))}
		</div>
	</div>
);

const Skills = ({skills}) => {
	const {frontEndSkills,backEndSkills,otherTools} = skills
	return (
		<div className="skills-container">
			<h2 className="skills-header">Technical Skills</h2>
			<div className="skills-content">
				<SkillSet category="Frontend" skills={frontEndSkills} />
				<SkillSet category="Backend" skills={backEndSkills} />
				<SkillSet category="Other Tools" skills={otherTools} />
			</div>
			</div>

	);
};

export default Skills;
