import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { fa1, faExternalLink, faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFolderClosed, faHeart } from '@fortawesome/free-regular-svg-icons';

function HomePage() {
	return (
		<>
			<header className='hero '>
				<div className='container'>
					<h1>
						Hello! I'm <span class='accent'> Kaleb</span>, <br /> A front-end developer based in
						United States.
					</h1>
					<p>
						With proven experience in helping companies create a better experience with their brand,
						software, and maintain a better codebase. I am capable of learning and adapting to
						technologies, and teams. Eager to tackle more problems and create using modern
						technologies using skills like JavaScript (ES6+), Next JS, Contentful, APIs and more.
					</p>
					<ul>
						<li>
							<a role='button' href='https://github.com/Sorumeiji' target='_blank'>
								View on Github
							</a>
						</li>
						<li>
							<a
								role='button-outline'
								href='https://www.linkedin.com/in/kalebgberry/'
								target='_blank'>
								View on LinkedIn
							</a>
						</li>
					</ul>
				</div>
			</header>

			<section className='projects'>
				<div className='container'>
					<div className='projectsTitle'>
						<h1>Projects & Work.</h1>
						<p>Preview of completed and ongoing projects:</p>
					</div>
					<div className='projectGallery'>
						<div className='projectGallery-item'>
							<h2>
								<span className='accent'>01.</span> Torch.AI
							</h2>
							<p>
								A public facing website for Torch AI. Created with Next JS, and Contentful. I was
								able to help design, create and structure the website for the company.
							</p>
							<p class='stack'>Next JS SCSS Contentful Vercel</p>
							<ul>
								<li>
									<a role='icon' href='#'>
										<FontAwesomeIcon icon={faGithub} />
									</a>
								</li>
								<li>
									<a role='icon' href='#'>
										<FontAwesomeIcon icon={faExternalLink} />
									</a>
								</li>
							</ul>
						</div>

						<div className='projectGallery-item'>
							<h2>
								<span className='accent'>02.</span> Nyacchii
							</h2>
							<p>
								A portoflio website for Nyacchii, an professional digital artist and Twitch partner.
							</p>
							<p class='stack'>SCSS Next JS Vercel</p>
							<ul>
								<li>
									<a role='icon' href='#'>
										<FontAwesomeIcon icon={faGithub} />
									</a>
								</li>
								<li>
									<a role='icon' href='#'>
										<FontAwesomeIcon icon={faExternalLink} />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<footer className='footer'>
				<div className='container'>
					<p>Designed and Built by Kaleb Berry.</p>
				</div>
			</footer>
		</>
	);
}

export default HomePage;
