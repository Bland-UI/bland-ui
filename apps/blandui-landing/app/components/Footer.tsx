import { Button, Typography } from '@blandui/blandui-react';
import { SiFigma, SiGithub } from '@icons-pack/react-simple-icons';
import { FileText } from 'lucide-react';
import LogoWhite from './LogoWhite';

const Footer = () => (
	<footer className="py-7xl bg-surface-inverse">
		<div className="w-11/12 sm:w-8/12 m-auto flex flex-col items-center gap-3xl text-white">
			<LogoWhite/>

			<div className="flex flex-col gap-md text-center">
				<Typography type="heading" size='md' className='block sm:hidden font-semibold'>
					A UI kit for those that want to be in control.
				</Typography>
				<Typography type="heading" size='lg' className='hidden sm:block font-semibold'>
					A UI kit for those that want <br/>
					to be in control.
				</Typography>

				<Typography type="body" size='md' className='block sm:hidden font-semibold'>
					Bland strips down to the basics, giving you core components to shape as you see fit. We skip the frills and focus on the essentials, so you can build your vision from the ground up.
				</Typography>
				<Typography type="body" size='lg' className='hidden sm:block'>
					Bland strips down to the basics, giving you core components to shape as <br/>
					you see fit. We skip the frills and focus on the essentials, so you can <br/>
					build your vision from the ground up.
				</Typography>
			</div>

			<div className="flex gap-md">
				<Button color='brand' variant='secondary' size="md">
					<SiFigma size="1.25rem"/>
					Get This UI Kit
				</Button>
				<Button color='brand' variant='secondary' size="md">
					<FileText size="1.25rem"/>
					View Docs
				</Button>
			</div>

			<div className="flex sm:flex-row flex-col gap-3xl sm:gap-2xl">
				<div className="flex gap-xl sm:gap-2xl">
					<a href="#">Docs</a>
					<a href="#">Components</a>
					<a href="#">Playground</a>
					<a href="#">About</a>
				</div>

				<div className="flex justify-center gap-xl sm:gap-2xl">
					<a href="#">
						<SiFigma size="1.5rem"/>
					</a>

					<a href="#">
						<SiGithub size="1.5rem"/>
					</a>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
