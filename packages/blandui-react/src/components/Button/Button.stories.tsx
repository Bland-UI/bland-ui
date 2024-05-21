import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title:     'Component/Button',
	component: Button,
	argTypes:  {
		disabled: {
			control: 'boolean',
		},
	},
};

const sizes = ['sm', 'md', 'lg'] as const;
const variants = ['primary', 'secondary', 'ghost', 'stroke'] as const;
const labels = {
	sm: 'Small',
	md: 'Medium',
	lg: 'Large',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Brand: Story = {
	args: {
		disabled: false,
	},
	render: ({ disabled }) => (
		<div className="flex flex-col gap-lg items-start justify-center">
			{sizes.map((size) => (
				<div key={size} className="flex gap-lg">
					{variants.map((variant) => (
						<Button
							key={variant}
							size={size}
							variant={variant}
							color="brand"
							disabled={disabled}
						>
							{labels[size]}
						</Button>
					))}
				</div>
			))}
		</div>
	),
};

export const Success: Story = {
	args: {
		disabled: false,
	},
	render: ({ disabled }) => (
		<div className="flex flex-col gap-lg items-start justify-center">
			{sizes.map((size) => (
				<div key={size} className="flex gap-lg">
					{variants.map((variant) => (
						<Button
							key={variant}
							size={size}
							variant={variant}
							color="success"
							disabled={disabled}
						>
							{labels[size]}
						</Button>
					))}
				</div>
			))}
		</div>
	),
};

export const Danger: Story = {
	args: {
		disabled: false,
	},
	render: ({ disabled }) => (
		<div className="flex flex-col gap-lg items-start justify-center">
			{sizes.map((size) => (
				<div key={size} className="flex gap-lg">
					{variants.map((variant) => (
						<Button
							key={variant}
							size={size}
							variant={variant}
							color="danger"
							disabled={disabled}
						>
							{labels[size]}
						</Button>
					))}
				</div>
			))}
		</div>
	),
};

export const Warning: Story = {
	args: {
		disabled: false,
	},
	render: ({ disabled }) => (
		<div className="flex flex-col gap-lg items-start justify-center">
			{sizes.map((size) => (
				<div key={size} className="flex gap-lg">
					{variants.map((variant) => (
						<Button
							key={variant}
							size={size}
							variant={variant}
							color="warning"
							disabled={disabled}
						>
							{labels[size]}
						</Button>
					))}
				</div>
			))}
		</div>
	),
};
