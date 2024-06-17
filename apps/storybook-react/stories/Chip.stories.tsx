import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@blandui/blandui-react';

const meta: Meta<typeof Chip> = {
	title:     'Component/Chip',
	component: Chip,
};

export default meta;
type Story = StoryObj<typeof Chip>;

const max = 10000;
const min = 0;

export const Default: Story = {
	render: () => {
		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

		return (
				<div className="flex flex-col gap-lg items-start justify-center">
					<div className="flex gap-md">
						<Chip size="sm" type="empty">Small</Chip>
						<Chip size="md" type="empty">Medium</Chip>
					</div>

					<div className="flex gap-md">
						<Chip size="sm" type="cancellable">Small</Chip>
						<Chip size="md" type="cancellable">Medium</Chip>
					</div>

					<div className="flex gap-md">
						<Chip size="sm" type="countable" count={randomNumber}>Small</Chip>
						<Chip size="md" type="countable" count={randomNumber}>Medium</Chip>
					</div>
				</div>
		);
	},
};
