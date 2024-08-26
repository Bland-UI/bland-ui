import type { Meta, StoryObj } from '@storybook/react';
import { Pills, PillsItem } from '@blandui/blandui-react';
import { useState, useCallback } from 'react';

const meta: Meta<typeof Pills> = {
	title:     'Component/Pills',
	component: Pills,
};

export default meta;
type Story = StoryObj<typeof Pills>;

export const Default: Story = {
	render: () => {
		const [items, setItems] = useState<PillsItem[]>([
			{ label: 'btc', value: 'btc', selected: true },
			{ label: 'eth', value: 'eth' },
			{ label: 'sol', value: 'sol', selected: true },
			{ label: 'avax', value: 'avax', },
		]);

		const onClick = useCallback((value: string) => {
			setItems((prevItems: PillsItem[]) => prevItems.map((item) => {
				if (item.value === value) {
					return { ...item, selected: !item.selected };
				}

				return item;
			}));
		}, []);

		return (
				<div className="flex flex-col gap-lg items-start justify-center">
					<Pills onClick={onClick} items={items} size="sm" />
					<Pills onClick={onClick} items={items} size="md" />
					<Pills onClick={onClick} items={items} size="lg" />
				</div>
		);
	},
};

export const WithCounter: Story = {
	render: () => {
		const [items, setItems] = useState<PillsItem[]>([
			{ label: 'btc', value: 'btc', selected: true, count: 2 },
			{ label: 'eth', value: 'eth', count: 3 },
			{ label: 'sol', value: 'sol', selected: true, count: 200 },
			{ label: 'avax', value: 'avax', count: 40 },
		]);

		const onClick = useCallback((value: string) => {
			setItems((prevItems: PillsItem[]) => prevItems.map((item) => {
				if (item.value === value) {
					return { ...item, selected: !item.selected };
				}

				return item;
			}));
		}, []);

		return (
				<div className="flex flex-col gap-lg items-start justify-center">
					<Pills onClick={onClick} items={items} size="sm" />
					<Pills onClick={onClick} items={items} size="md" />
					<Pills onClick={onClick} items={items} size="lg" />
				</div>
		);
	},
};
