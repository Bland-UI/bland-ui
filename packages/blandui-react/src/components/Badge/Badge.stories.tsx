import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
	title:     'Component/Badge',
	component: Badge,
};

const sizes = ['sm', 'md', 'lg', 'xl'] as const;
const variants = ['primary', 'secondary', 'stroke'] as const;
const labels = {
	sm: 'Small',
	md: 'Medium',
	lg: 'Large',
	xl: 'Extra large',
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Brand: Story = {
	render: () => (
		<div className="flex flex-col gap-lg items-start justify-center">
			{sizes.map((size) => (
				<div key={size} className="flex gap-lg">
					{variants.map((variant) => (
						<Badge
							key={variant}
							size={size}
							variant={variant}
							color="brand"
						>
							{labels[size]}
						</Badge>
					))}
				</div>
			))}
		</div>
	),
};

export const Gray: Story = {
	render: () => (
		<div className="flex flex-col gap-lg items-start justify-center">
			{sizes.map((size) => (
				<div key={size} className="flex gap-lg">
					{variants.map((variant) => (
						<Badge
							key={variant}
							size={size}
							variant={variant}
							color="gray"
						>
							{labels[size]}
						</Badge>
					))}
				</div>
			))}
		</div>
	),
};

export const Green: Story = {
	render: () => (
		<div className="flex flex-col gap-lg items-start justify-center">
			{sizes.map((size) => (
				<div key={size} className="flex gap-lg">
					{variants.map((variant) => (
						<Badge
							key={variant}
							size={size}
							variant={variant}
							color="green"
						>
							{labels[size]}
						</Badge>
					))}
				</div>
			))}
		</div>
	),
};

export const Red: Story = {
	render: () => (
		<div className="flex flex-col gap-lg items-start justify-center">
			{sizes.map((size) => (
				<div key={size} className="flex gap-lg">
					{variants.map((variant) => (
						<Badge
							key={variant}
							size={size}
							variant={variant}
							color="red"
						>
							{labels[size]}
						</Badge>
					))}
				</div>
			))}
		</div>
	),
};

export const Amber: Story = {
	render: () => (
		<div className="flex flex-col gap-lg items-start justify-center">
			{sizes.map((size) => (
				<div key={size} className="flex gap-lg">
					{variants.map((variant) => (
						<Badge
							key={variant}
							size={size}
							variant={variant}
							color="amber"
						>
							{labels[size]}
						</Badge>
					))}
				</div>
			))}
		</div>
	),
};
