import './styles/main.css';

import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';

import vk from './img/icons/vk.svg';
import instagram from './img/icons/instagram.svg';
import twitter from './img/icons/twitter.svg';
import gitHub from './img/icons/gitHub.svg';
import linkedIn from './img/icons/linkedIn.svg';

import project1 from './img/projects/01.jpg';
import project2 from './img/projects/02.jpg';
import project3 from './img/projects/03.jpg';
import project4 from './img/projects/04.jpg';
import project5 from './img/projects/05.jpg';
import project6 from './img/projects/06.jpg';

function App() {
	return (
		<div className='App'>
			{/* <!------------------------------NAV-----------------------------------------> */}
			<Navbar />
			{/* <!------------------------------NAV-----------------------------------------> */}
			{/* <!----------------------------HEADER----------------------------------------> */}
			<Header />
			{/* <!----------------------------HEADER----------------------------------------> */}
			{/* <!-----------------------------MAIN-----------------------------------------> */}
			<main className='section'>
				<div className='conteiner'>
					<h2 className='title-1'>Projects</h2>
					<ul className='projects'>
						<li className='project'>
							<a href='./project-page1.html'>
								<img src={project1} alt='Project-1' className='project__img' />
								<h3 className='project__title'>Project name 1</h3>
							</a>
						</li>
						<li className='project'>
							<a href='./project-page2.html'>
								<img src={project2} alt='Project-2' className='project__img' />
								<h3 className='project__title'>Project name 2</h3>
							</a>
						</li>
						<li className='project'>
							<a href='./project-page3.html'>
								<img src={project3} alt='Project-3' className='project__img' />
								<h3 className='project__title'>Project name 3</h3>
							</a>
						</li>

						<li className='project'>
							<a href='./project-page4.html'>
								<img src={project4} alt='Project-4' className='project__img' />
								<h3 className='project__title'>Project name 4</h3>
							</a>
						</li>
						<li className='project'>
							<a href='./project-page5.html'>
								<img src={project5} alt='Project-5' className='project__img' />
								<h3 className='project__title'>Project name 5</h3>
							</a>
						</li>
						<li className='project'>
							<a href='./project-page6.html'>
								<img src={project6} alt='Project-6' className='project__img' />
								<h3 className='project__title'>Project name 6</h3>
							</a>
						</li>
					</ul>
				</div>
			</main>
			{/* <!-----------------------------MAIN-----------------------------------------> */}
			{/* <!----------------------------FOOTER----------------------------------------> */}
			<footer className='footer'>
				<div className='conteiner'>
					<div className='footer__wrapper'>
						<ul className='social'>
							<li className='social__item'>
								<a href='https://vk.com/mattakvshi' target='_ blank'>
									<img src={vk} alt='link' />
								</a>
							</li>
							<li className='social__item'>
								<a href='#!' target='_ blank'>
									<img src={instagram} alt='link' />
								</a>
							</li>
							<li className='social__item'>
								<a href='#!' target='_ blank'>
									<img src={twitter} alt='link' />
								</a>
							</li>
							<li className='social__item'>
								<a href='https://github.com/mattakvshi' target='_ blank'>
									<img src={gitHub} alt='link' />
								</a>
							</li>
							<li className='social__item'>
								<a href='#!' target='_ blank'>
									<img src={linkedIn} alt='link' />
								</a>
							</li>
						</ul>
						<div className='copyright'>
							<p>mattakvvshi@yandex.ru</p>
						</div>
					</div>
				</div>
			</footer>
			{/* <!----------------------------FOOTER----------------------------------------> */}
		</div>
	);
}

export default App;
