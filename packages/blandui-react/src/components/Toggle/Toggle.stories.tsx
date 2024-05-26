import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '.';

const meta: Meta<typeof Toggle> = {
	title:     'Component/Toggle',
	component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
	render: () => (
		<div className="flex flex-col gap-lg items-start justify-center">
			<div className="flex gap-md">
				<Toggle size="sm" label="Small" />
				<Toggle size="sm" disabled label="Disabled" />
				<Toggle size="sm" disabled checked label="Checked & Disabled" />

			</div>
			<div className="flex gap-md">
				<Toggle size="md" label="Medium" />
				<Toggle size="md" disabled label="Disabled" />
				<Toggle size="md" disabled checked label="Checked & Disabled" />
			</div>
		</div>
	),
};
