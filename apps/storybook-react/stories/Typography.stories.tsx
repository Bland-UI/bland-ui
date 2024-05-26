import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@blandui/blandui-react';

const meta: Meta<typeof Typography> = {
	title:     'Component/Typography',
	component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Display: Story = {
	render: () => (
		<div className="flex flex-col gap-lg">
			<Typography type="display" size="lg">
				Large display
			</Typography>
			<Typography type="display" size="md">
				Medium display
			</Typography>
			<Typography type="display" size="sm">
				Small display
			</Typography>
		</div>
	),
};

export const Heading: Story = {
	render: () => (
		<div className="flex flex-col gap-lg">
			<Typography type="heading" size="lg">
				Large heading
			</Typography>
			<Typography type="heading" size="md">
				Medium heading
			</Typography>
			<Typography type="heading" size="sm">
				Small heading
			</Typography>
		</div>
	),
};

export const Title: Story = {
	render: () => (
		<div className="flex flex-col gap-lg">
			<Typography type="title" size="lg">
				Large title
			</Typography>
			<Typography type="title" size="md">
				Medium title
			</Typography>
			<Typography type="title" size="sm">
				Small title
			</Typography>
		</div>
	),
};

export const Body: Story = {
	render: () => (
		<div className="flex flex-col gap-lg">
			<Typography type="body" size="lg">
				Large body
			</Typography>
			<Typography type="body" size="md">
				Medium body
			</Typography>
			<Typography type="body" size="sm">
				Small body
			</Typography>
		</div>
	),
};
