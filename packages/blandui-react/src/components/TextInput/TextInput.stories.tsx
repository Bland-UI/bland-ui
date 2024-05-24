import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
	title:     'Component/TextInput',
	component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
	render: () => (
		<div className="flex flex-col gap-lg items-start justify-center">
			<div className="flex gap-md">
				<TextInput inputSize="sm" placeholder='Placeholder' label="Label" helperText='Helper text' />
			</div>
			<div className="flex gap-md">
				<TextInput inputSize="md" placeholder='Placeholder' label="Label" helperText='Helper text' />
			</div>
			<div className="flex gap-md">
				<TextInput inputSize="lg" placeholder='Placeholder' label="Label" helperText='Helper text' />
			</div>
		</div>
	),
};

export const Error: Story = {
	render: () => (
		<div className="flex flex-col gap-lg items-start justify-center">
			<div className="flex gap-md">
				<TextInput variant="error" inputSize="sm" placeholder='Placeholder' value="Error" label="Label" helperText='Helper text' />
			</div>
			<div className="flex gap-md">
				<TextInput variant="error" inputSize="md" placeholder='Placeholder' value="Error" label="Label" helperText='Helper text' />
			</div>
			<div className="flex gap-md">
				<TextInput variant="error" inputSize="lg" placeholder='Placeholder' value="Error" label="Label" helperText='Helper text' />
			</div>
		</div>
	),
};

export const Success: Story = {
	render: () => (
		<div className="flex flex-col gap-lg items-start justify-center">
			<div className="flex gap-md">
				<TextInput variant="success" inputSize="sm" placeholder='Placeholder' value="Success" label="Label" helperText='Helper text' />
			</div>
			<div className="flex gap-md">
				<TextInput variant="success" inputSize="md" placeholder='Placeholder' value="Success" label="Label" helperText='Helper text' />
			</div>
			<div className="flex gap-md">
				<TextInput variant="success" inputSize="lg" placeholder='Placeholder' value="Success" label="Label" helperText='Helper text' />
			</div>
		</div>
	),
};

export const Warnign: Story = {
	render: () => (
		<div className="flex flex-col gap-lg items-start justify-center">
			<div className="flex gap-md">
				<TextInput variant="warning" inputSize="sm" placeholder='Placeholder' value="Warning" label="Label" helperText='Helper text' />
			</div>
			<div className="flex gap-md">
				<TextInput variant="warning" inputSize="md" placeholder='Placeholder' value="Warning" label="Label" helperText='Helper text' />
			</div>
			<div className="flex gap-md">
				<TextInput variant="warning" inputSize="lg" placeholder='Placeholder' value="Warning" label="Label" helperText='Helper text' />
			</div>
		</div>
	),
};
