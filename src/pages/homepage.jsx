import React, { useState, useEffect, useRef } from 'react'
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
 	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../components/common/logo";
import Work from "../components/homepage/work";
import AllProjects from "../components/projects/allProjects";
import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/homepage.css";
import Footer from '../components/common/footer';
import Skills from '../components/homepage/skills';
import Education from '../components/homepage/education';
import createGlobe from 'cobe'
import { useSpring } from 'react-spring'
import { Helmet } from 'react-helmet'

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);
	const canvasRef = useRef();
	const pointerInteracting = useRef(null);
	const pointerInteractionMovement = useRef(0);
	const [{ r }, api] = useSpring(() => ({
		r: 0,
		config: {
			mass: 1,
			tension: 280,
			friction: 40,
			precision: 0.001,
		},
	}));
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.scrollY);

			let newLogoSize = 70 - (scroll * 8) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	useEffect(() => {
		let phi = 0;
		let width = 0;
		const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
		window.addEventListener('resize', onResize)
		onResize()
		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: width * 2,
			height: width * 2,
			phi: 0,
			theta: 0.3,
			dark: 1,
			diffuse: 3,
			mapSamples: 16000,
			mapBrightness: 1.2,
			baseColor: [1, 1, 1],
			markerColor: [251 / 255, 100 / 255, 21 / 255],
			glowColor: [1.2, 1.2, 1.2],
			markers: INFO.map,
			onRender: (state) => {
				// This prevents rotation while dragging
				if (!pointerInteracting.current) {
					// Called on every animation frame.
					// `state` will be an empty object, return updated params.
					phi += 0.01
				}
				state.phi = phi + r.get()
				state.width = width * 2
				state.height = width * 2
			}
		})
		setTimeout(() => canvasRef.current.style.opacity = '1')
		return () => {
			globe.destroy();
			window.removeEventListener('resize', onResize);
		}
	})

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
				</Helmet>

			<div className="page-content">
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} height={logoSize} link={false} />
						</div>
					</div>

					<div className='homepage-container'>
						<div className='homepage-first-area'>
							<div className='homepage-first-area-left-side'>
								<div className='title homepage-title'>
									{INFO.homepage.title}
								</div>

								<div className='subtitle homepage-subtitle'>
									{INFO.homepage.description}
								</div>
							</div>

							<div className='homepage-first-area-right-side'>
								<div className='homepage-image-container'>
									<div className='homepage-image-wrapper'>
										<img
											width={388}
											height={388}
											src='homepage.avif'
											alt='about'
											className='homepage-image'
										/>
									</div>
								</div>
							</div>
						</div>

						<div className='homepage-socials'>
							<a
								href={INFO.socials.github}
								target='_blank'
								rel='noreferrer'
							>
								<FontAwesomeIcon
									icon={faGithub}
									className='homepage-social-icon'
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target='_blank'
								rel='noreferrer'
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className='homepage-social-icon'
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target='_blank'
								rel='noreferrer'
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className='homepage-social-icon'
								/>
							</a>
						</div>

						<div className='homepage-projects'>
							<AllProjects />
						</div>

						<div className='homepage-works'>
							<h2 className='work-title'>Work Experience</h2>
							{INFO.work.map((work, index) => (
								<div
									className='homepage-work'
									key={(index + 1).toString()}
								>

									<Work
										key={(index + 1).toString()}
										stack={work.stack}
										date={work.date}
										title={work.title}
										logo={work.logo}
										description={work.description}
									/>
								</div>
							))}
						</div>
						<div className='homepage-skills'>
							<Skills skills={INFO.skills} />
						</div>
						<div className='homepage-education'>
							<Education />
						</div>
						<canvas
							ref={canvasRef}
							onPointerDown={(e) => {
								pointerInteracting.current =
									e.clientX - pointerInteractionMovement.current
								canvasRef.current.style.cursor = 'grabbing'
							}}
							onPointerUp={() => {
								pointerInteracting.current = null
								canvasRef.current.style.cursor = 'grab'
							}}
							onPointerOut={() => {
								pointerInteracting.current = null
								canvasRef.current.style.cursor = 'grab'
							}}
							onMouseMove={(e) => {
								if (pointerInteracting.current !== null) {
									const delta = e.clientX - pointerInteracting.current
									pointerInteractionMovement.current = delta
									api.start({
										r: delta / 200,
									})
								}
							}}
							onTouchMove={(e) => {
								if (pointerInteracting.current !== null && e.touches[0]) {
									const delta = e.touches[0].clientX - pointerInteracting.current
									pointerInteractionMovement.current = delta
									api.start({
										r: delta / 100,
									})
								}
							}}
							style={{
								display: 'block',
								width: '600px',
								height: '600px',
								maxWidth: '100%',
								aspectRatio: '1',
								margin: '0 auto',
								cursor: 'grab',
								contain: 'layout paint size',
								opacity: 0,
								transition: 'opacity 1s ease',
							}}
						/>
						<div className='feather-text'>
							Where next?
						</div>
						<div className='page-footer'>
							<Footer />
						</div>
					</div>
				</div>
			</div>
			<small hidden='true'>
				┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌┌┌┌█████┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌┌┌███████┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌┌███┌┌┌██┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌┌██┌┌┌┌██┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌███┌┌┌┌███┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌███┌┌┌┌███┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌┌██┌┌┌┌┌███┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌┌███┌┌┌┌┌███┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌┌┌███┌┌┌┌┌████┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌┌┌┌██┌┌┌┌┌┌████┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌┌┌┌███┌┌┌┌┌┌┌███┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌┌┌┌┌███┌┌┌┌┌┌┌███┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌┌┌┌┌███┌┌┌┌┌┌┌┌███┌┌┌┌┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌┌┌┌┌┌██┌┌┌┌┌┌┌┌┌┌███┌┌┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌┌███┌███┌┌┌┌┌┌┌┌┌┌██┌┌┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌████████████┌┌┌┌┌┌┌┌┌┌┌███┌┌┌┌┌┌┌┌┌┌
				┌┌████████┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌███┌┌┌┌┌┌┌┌┌
				┌███┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌█████████┌┌
				███┌┌┌┌█████████┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌█████┌
				██┌┌┌███████┌████┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌███┌
				██┌┌┌┌███┌┌┌┌┌┌┌███┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌██┌
				███┌┌┌┌┌┌┌┌┌┌┌█████┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌██┌
				┌███┌┌┌┌┌┌┌████████┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌██┌
				┌┌████████████┌┌┌████┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌██┌
				┌███┌██████┌┌┌┌┌┌┌████┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌██┌
				┌███┌┌┌┌┌┌┌┌┌┌┌██████┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌██┌
				┌┌████┌████┌██████████┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌██┌
				┌┌┌████████████┌┌┌┌┌███┌┌┌┌┌┌┌┌┌┌┌┌┌███┌
				┌┌┌┌██┌┌┌┌┌┌┌┌┌┌┌███████┌┌┌┌┌┌┌███████┌┌
				┌┌┌┌████┌┌┌┌┌┌████████┌┌┌┌┌┌┌┌████████┌┌
				┌┌┌┌┌████████████┌┌┌███┌┌┌┌┌███┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌███┌█┌█┌┌┌┌┌┌███┌┌┌███┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌███┌┌┌┌┌┌█████┌┌█████┌┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌┌██████████████████┌┌┌┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌┌┌██████████████┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌
				┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌┌
			</small>
		</React.Fragment>
	);
};

export default Homepage;
