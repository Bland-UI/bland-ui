import { Button, Typography } from '@blandui/blandui-react';
import { SiFigma } from '@icons-pack/react-simple-icons';
import { ExternalLink } from 'lucide-react';

const Section1 = () => (
	<section className="w-11/12 sm:w-8/12 m-auto py-4xl sw:py-2xl flex gap-xl sm:gap-lg flex-col sm:flex-row">
		<div className="flex flex-col gap-xl flex-[0.5]">
			<Typography type="heading" size='md' className="font-semibold sm:hidden block">
				Basic building block for your ideas.
			</Typography>
			<Typography type="display" size='sm' className="font-semibold hidden sm:block">
				Basic building block for your ideas.
			</Typography>

			<Typography type="body" size='md' className="sm:hidden block">
				Bland gives you core components to bring your ideas to life, skipping the fancy stuff to focus on the essentials. Our components let you design freely, making sure you are in control the whole time.
			</Typography>
			<Typography type="body" size='lg' className="hidden sm:block">
				Bland gives you core components to bring your ideas to life, skipping the fancy stuff to focus on the essentials. Our components let you design freely, making sure you are in control the whole time.
			</Typography>

			<div className="flex gap-md">
				<Button color='brand' variant='primary' size="md">
					<SiFigma size="1.25rem"/>
					Get This UI Kit
				</Button>

				<Button color='brand' variant='secondary' size="md">
					View Docs
				</Button>
			</div>
		</div>

		<div className="flex flex-col justify-center gap-md flex-[0.5]">
			<div className="p-2xl bg-surface-2 rounded-lg gap-xl">
				<div className="flex gap-2xl items-center">
					<Button color='brand' variant='primary' size="md">
						Click Me
					</Button>
				</div>
			</div>

			<div className="hidden sm:flex justify-center">
				<Button color='brand' variant='primary' size="md" className="shadow-brand-far-subtle">
						Explore in Playground
					<ExternalLink size="1.25rem"/>
				</Button>
			</div>
		</div>
	</section>
);

export default Section1;
