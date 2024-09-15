import { Typography } from '@blandui/blandui-react';
import { Component } from 'lucide-react';

const coreFeatures: Array<{ title: string, description: string }> = [
	{
		title:       'Barebones components',
		description: 'Components are simplified to the basics, allowing you to style them to fit your needs.',
	},
	{
		title:       'The essentials',
		description: 'Everything you need to get started: color, typography, spacing, icons, effects...',
	},
	{
		title:       'Variables',
		description: 'Use variables in Figma to gain even greater control over your design tokens.',
	},
	{
		title:       'Responsive',
		description: 'Designed with Autolayout to adapt, whether you enlarge or shrink within reasonable limits.',
	},
	{
		title:       'Variants and properties',
		description: 'Components come with variants and properties to accommodate a wide range of use cases.',
	},
	{
		title:       'Open-source icons',
		description: 'Makes use of the MIT-licensed Lucide icons, ensuring open-source flexibility.',
	},
	{
		title:       'Constantly updated',
		description: 'Components and it’s documentation will keep getting better with every update.',
	},
	{
		title:       'Support',
		description: 'Reach out anytime to give feedback, ask for assistance, or make a request.',
	},
];

const Section2 = () => (
	<section className="w-11/12 sm:w-8/12 m-auto py-4xl sm:py-7xl flex flex-col gap-4xl justify-center">
		<div className="flex flex-col gap-md">
			<Typography type="heading" size="md" className="font-semibold text-center">
				Core features
			</Typography>
			<Typography type="body" size="md" className="text-center">
				Made to address your design needs from the ground up.<br/>
				Bland was built with all these in mind.
			</Typography>
		</div>

		<div className="flex gap-md flex-col sm:grid sm:grid-cols-4 sm:gap-lg">
			{ coreFeatures.map(({ title, description }) => (
				<div key={title} className="flex flex-col gap-lg bg-surface-3 p-2xl border-sm border-bold rounded-lg">
					<div className="w-fit flex items-center justify-center p-sm bg-surface-4 border-sm border-bold rounded-md text-subtle">
						<Component size="1.25rem" />
					</div>
					<Typography type="body" size="lg" weight='medium'>
						{ title }
					</Typography>
					<Typography type="body" size="md">
						{ description }
					</Typography>
				</div>
			)) }
		</div>
	</section>
);

export default Section2;
