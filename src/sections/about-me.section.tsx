import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Senior Software Engineer',
				place: 'Amaris consulting',
				timePeriod: '2025 - Present',
				description: (
					<ul>
						<li>
							Developed an internal automation platform using{' '}
							<strong>FastAPI</strong> and <strong>Azure DevOps</strong> to
							manage users, projects, and access workflows.
						</li>
						<li>
							Built backend services to support recertification processes and
							improve internal operational efficiency.
						</li>
						<li>
							Focused on automation and clean API design to reduce manual work
							and streamline internal tools.
						</li>
					</ul>
				),
			},
			{
				title: 'Senior Software Engineer',
				place: 'HealthHero',
				timePeriod: '2023 – 2025',
				description: (
					<ul>
						<li>
							Developed key features for a healthcare platform using{' '}
							<strong>React</strong>, <strong>Next.js</strong>, and{' '}
							<strong>FastAPI</strong>.
						</li>
						<li>
							Built scheduling and automation systems handling over{' '}
							<strong>500 daily tasks</strong> using Python and Celery.
						</li>
						<li>
							Integrated secure authentication, payments, and notification
							systems to improve user experience.
						</li>
						<li>
							Improved system reliability through monitoring, logging, and
							performance optimization.
						</li>
					</ul>
				),
			},
			{
				title: 'Full Stack Developer',
				place: 'Capgemini',
				timePeriod: '2018 - 2022',
				description: (
					<ul>
						<li>
							Contributed to scalable SaaS platforms using{' '}
							<strong>Python</strong>, <strong>React</strong>, and cloud
							infrastructure.
						</li>
						<li>
							Designed and implemented REST and GraphQL APIs for data-driven
							applications.
						</li>
						<li>
							Optimized database performance and reduced load times by
							approximately <strong>25%</strong>.
						</li>
						<li>
							Implemented CI/CD pipelines and automated deployment workflows.
						</li>
					</ul>
				),
			},
			{
				title: 'Full Stack Developer',
				place: 'Econocom',
				timePeriod: '2015 - 2018',
				description: (
					<ul>
						<li>
							Developed full-stack eCommerce applications using{' '}
							<strong>React</strong>, <strong>Node.js</strong>, and{' '}
							<strong>Python</strong>.
						</li>
						<li>
							Built reusable UI components and backend APIs for product and
							order management.
						</li>
						<li>
							Improved database performance, reducing response times by around{' '}
							<strong>20%</strong>.
						</li>
						<li>
							Supported deployment processes using <strong>Docker</strong> and
							CI/CD tools.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'Bachelor of Science in Computer Science (BSCS)',
				place: 'Delft University of Technology',
				timePeriod: '2012 - 2015',
				description: '',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						👋 Hey, I'm Alexandr Alexin, a Senior Software Engineer.
					</p>
					<p>
						I've been working with <strong>React</strong> and{' '}
						<strong>Python</strong> for the past <strong>7 years</strong>,
						building web applications that are fast, scalable and user-friendly.
					</p>
					<p>
						I like solving problems, learning new things, and experimenting with
						different technologies. When I'm not coding, I'm probably working on
						a side project or exploring something new.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
