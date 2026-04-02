import { FaGithub, FaPhone } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

import { FloatingButton } from '../components/floating-button';
import { GlowLink } from '../components/glow-box-link';
import { TextHover } from '../components/text-hover.component';

export const InfoSection = () => {
	return (
		<div className='hero-section'>
			<FloatingButton
				label='About Me'
				className='first'
				href='#about-me'
			/>
			<p>Hi, I am</p>
			<TextHover
				text='Alexandr'
				className='name'
			/>
			<p>Senior Software Engineer</p>
			<FloatingButton
				label='Tech'
				className='sec'
				href='#tech-stack'
			/>

			<div className='blur'></div>
			<div className='bottom-bar'>
				<GlowLink
					href='https://github.com/code-challenge-dev'
					color='rgba(255, 255, 255, 0.4)'
					icon={<FaGithub color='rgba(255, 255, 255,0.9)' />}
					aria-label='github'
				/>
				<GlowLink
					href='tel:+131633416710'
					color='rgba(255, 255, 255, 0.4)'
					icon={<FaPhone color='rgba(255, 255, 255,0.9)' />}
					aria-label='phone'
				/>
				<GlowLink
					href='mailto:reneejoezhang317@outlook.com'
					icon={<IoMailOutline color='rgb(18, 122, 209)' />}
					color=' rgb(18, 122, 209,0.7)'
					aria-label='mail'
				/>
			</div>
		</div>
	);
};
