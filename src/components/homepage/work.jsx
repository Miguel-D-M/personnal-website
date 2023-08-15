import React from "react";
import "./styles/work.css";

const Work = (props) => {
	const { title, description, date, stack, logo } = props;
	return (
		<React.Fragment>
			<div className="homepage-work">
				<div className="homepage-work-content">
					<div className="homepage-work-header">
						<div className="homepage-work-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="homepage-work-title">{title}</div>
					</div>
					<div className="homepage-work-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					{description.map( (project) => (
						<div className="homepage-work-description">
							{project}
						</div>
					))}
					<div className="homepage-work-stack">
						{stack}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Work;
