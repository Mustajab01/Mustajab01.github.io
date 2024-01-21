import React from 'react';

const Contact = () => {
	return (
		<section id="contact">
			<h2>Contact Me</h2>
			<div className="contact-form">
				<form action="mailto:mustajabali.321@gmail.com" method="post" encType="text/plain">
					<input type="text" id="client-name" placeholder="Your Name" required />
					<input type="email" id="client-email" placeholder="Your Email" required />
					<textarea id="client-message" placeholder="Your Message" rows="5" required></textarea>
					<button id="send-button">Send</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
