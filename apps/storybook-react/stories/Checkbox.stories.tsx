import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@blandui/blandui-react';

const meta: Meta<typeof Checkbox> = {
	title:     'Component/Checkbox',
	component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	render: () => (
		<div className="flex flex-col gap-lg items-start justify-center">
			<div className="flex gap-md">
				<Checkbox size="sm" checked={false} />
				<Checkbox size="sm" checked={false} disabled />
				<Checkbox size="sm" checked />
				<Checkbox size="sm" checked disabled />
			</div>
			<div className="flex gap-md">
				<Checkbox size="md" checked={false} />
				<Checkbox size="md" checked={false} disabled />
				<Checkbox size="md" checked />
				<Checkbox size="md" checked disabled />
			</div>
		</div>
	),
};
