import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SegmentedBar } from './SegmentedBar';

const meta: Meta<typeof SegmentedBar> = {
	title:     'Component/SegmentedBar',
	component: SegmentedBar,
};

export default meta;
type Story = StoryObj<typeof SegmentedBar>;

export const Default: Story = {
	render: () => {
		const tabs = [
			{
				label: 'Tab 1',
				value: 0,
			},
			{
				label: 'Tab 2',
				value: 1,
			},
			{
				label: 'Tab 3',
				value: 2,
			},
		];
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [tab, setTab] = useState(-1);

		return (
			<div className="flex flex-col gap-lg w-96">
				<SegmentedBar
					size="md"
					tabs={tabs}
					activeTab={tab}
					onClick={(v: number | string) => setTab(v as number)}
				/>

				<SegmentedBar
					size="lg"
					tabs={tabs}
					activeTab={tab}
					onClick={(v: number | string) => setTab(v as number)}
				/>
			</div>
		);
	},
};
