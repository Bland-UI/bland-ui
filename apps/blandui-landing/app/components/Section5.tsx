import { Button, Typography } from '@blandui/blandui-react';
import { Play, Video } from 'lucide-react';

const Section5 = () => (
	<section className="w-11/12 sm:w-8/12 m-auto py-6xl sm:py-7xl flex flex-col gap-3xl">
		<div className="flex flex-col gap-xl items-center">
			<div className="flex flex-col gap-md text-center">
				<Typography type="heading" size="md" className="font-semibold">
					How to use
				</Typography>
				<Typography type="body" size="md">
					Here’s quick video on how to use this UI Kit.<br/>
					Check out our YouTube channel for more tutorials and other related content
				</Typography>
			</div>

			<Button color='brand' variant='primary' size="md">
				<Video size="1.25rem"/>
				Watch more tutorials
			</Button>
		</div>

		<div className="p-5xl bg-surface-3 rounded-lg flex flex-col gap-lg text-center items-center">
			<div className="w-fit h-fit p-xl flex items-center justify-center text-carbon-500 rounded-full border-md border-bold bg-surface-2">
				<Play size="1.25rem"/>
			</div>
			<Typography type="body" size="lg" className="">
				Coming soon
			</Typography>
		</div>
	</section>
);

export default Section5;
