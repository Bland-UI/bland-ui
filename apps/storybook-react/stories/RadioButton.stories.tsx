import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from '@blandui/blandui-react';

const meta: Meta<typeof RadioButton> = {
	title:     'Component/RadioButton',
	component: RadioButton,
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
	render: () => (
		<div className="flex flex-col gap-lg items-start justify-center">
			<div className="flex gap-md">
				<RadioButton radioSize="sm" checked={false} />
				<RadioButton radioSize="sm" checked={false} disabled />
				<RadioButton radioSize="sm" checked />
				<RadioButton radioSize="sm" checked disabled />
			</div>
			<div className="flex gap-md">
				<RadioButton radioSize="md" checked={false} />
				<RadioButton radioSize="md" checked={false} disabled />
				<RadioButton radioSize="md" checked />
				<RadioButton radioSize="md" checked disabled />
			</div>
		</div>
	),
};
