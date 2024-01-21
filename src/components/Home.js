import React from 'react';

const Home = () => {

	return (
		<section id="home">
			<div className="image-section">
				<img src="images/animatedProgrammer.png" alt="Animated Programmer" />
			</div>
			<div className="text-section">
				<h2>Welcome to My Portfolio</h2>
				<p>Explore my journey in the world of computer science and technology.</p>
				<div className="cta-buttons">
					<a href="/resume.pdf" download="Mustajab_Ali_Resume.pdf" className="cta-btn" id="download-resume">
						<span className="icon">&#9993;</span>Resume
					</a>

					<a href="#contact" className="cta-btn" id="contact-me">
						<span className="icon">&#9742;</span>Contact
					</a>
				</div>
			</div>
		</section>
	);
}

export default Home;
