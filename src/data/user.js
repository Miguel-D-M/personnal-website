const INFO = {
	main: {
		title: "Miguel M.",
		name: "Miguel M.",
		email: "contact@codewithmiguel.xyz",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/Miguel-D-M",
		linkedin: "https://www.linkedin.com/in/miguel-marie-sainte/",
	},

	homepage: {
		title: "Software engineer with a passion for thoughtful and well elaborate code.",
		description:
			"My name is  Miguel and I enjoy hacking together things to explore the infinite possibilities offered by computers.\n" +
			"My interest in computer programming started at an early age when I tried to customize my blog profile with some basic HTML and CSS and enjoyed beating my friends on facebook game by tweaking some JS values thanks to Chrome Devtool.\n" +
			"Fast-forward to today, I'm a back-end software engineer at Airbus Defense and Space.",
	},
	skills : {
		frontEndSkills:
			[
				{name : 'JavaScript',icon: "./js.svg"},
				{name : 'React',icon: "./react.svg"},
				{name : 'NextJS',icon: "./next.svg"}
			],
		backEndSkills:
			[
				{name : 'Java',icon: "./java.svg"},
				{name : 'Spring',icon: "./spring.svg"},
				{name : 'Node',icon: "./node.svg"},
				{name : 'SQL',icon: "./sql.svg"},
				{name : 'NoSQL',icon: "./nosql.svg"}
			],
		otherTools:
			[
				{name : 'Git',icon: "./git.svg"},
				{name : 'Github',icon: "./github.svg"},
				{name : 'Gitlab',icon: "./gitlab.svg"},
				{name : 'Docker',icon: "./docker.svg"},
				{name : 'AWS',icon: "./aws.svg"}
			],
	},
	projects: [
		{
			title: "Student presence monitoring",
			description:
				"A website to help professor, faculty and student manage attendance ",
			logo: "java.svg",
			linkText: "View Project",
			link: "https://github.com/btissamnachit/GestionAppel",
		},

		{
			title: "Covid Helpdesk",
			description:
				"A website to help the vaccination process",
			logo: "java.svg",
			linkText: "View Project",
			link: "https://github.com/Miguel-D-M/VaccineHelper",
		},

		{
			title: "Kaggle like Project",
			description:
				"Testing various machine learning technics on a medical diagnosis dataset",
			logo: "python.svg",
			linkText: "View Project",
			link: "https://colab.research.google.com/drive/1Vx9f7yIeO6AZhKXZczSsO-tPey0PUmqM?usp=sharing",
		},

	],
	work : [
		{
			title: "Software Engineer",
			date: 'Oct 2022 - Present',
			description: [	" - Maintenance in optimal operation condition of our key product and new features development to accommodate new spatial imagery standards.",
				" - Leveraging NestJS to rewrite the legacy monolithic software as microservices oriented application to meet the expectations of the Pleiades Neo project. "],
			logo: "https://www.cdnlogo.com/logos/a/96/airbus.svg",
			stack: "Java | Spring | Typescript | NestJS | GitLab | Docker"
		},
		{
			title: "IT Analyst/Developer ",
			date: 'May 2021 - Sep 2022 ',
			description:["- Analysis and Development of an IAM solution in PHP for a better management of the employee lifecycle (collection of the needs, framing, development...)",
			"- Creation of dashboards to improve IT support management on Metabase"]
				,
			logo: "./addev.avif",
			stack: "Php | Metabase | GitLab "
		}
	],
	map:[
		{ location: [10.28333, -61.46667], size: 0.05 },
		{ location: [14.5333, -60.9833], size: 0.05 },
		{ location: [43.6, 1.433333], size: 0.05 }
	]
};

export default INFO;
