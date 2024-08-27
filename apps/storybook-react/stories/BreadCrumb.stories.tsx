import type { Meta, StoryObj } from '@storybook/react';
import { BreadCrumb } from '@blandui/blandui-react';
import { BreadCrumbItem } from '@blandui/blandui-react/dist/types/components/BreadCrumb/BreadCrumb';
import { Component, Home, Info, InfoIcon } from 'lucide-react';

const meta: Meta<typeof BreadCrumb> = {
	title:     'Component/BreadCrumb',
	component: BreadCrumb,
};

export default meta;
type Story = StoryObj<typeof BreadCrumb>;


export const Default: Story = {
	render: () => {
		const items: BreadCrumbItem[] = [
			{ title: 'BlandUI' },
			{ title: 'Components' },
			{ title: 'BreadCrumb' },
		];

		return (
			<div className="flex flex-col gap-lg items-start justify-center">
				<BreadCrumb items={items} />
			</div>
		);
	},
};

export const WithIcons: Story = {
	render: () => {
		const items: BreadCrumbItem[] = [
			{ title: <><Home size="1rem" fontSize={14}/>BlandUI</> },
			{ title: <><Component size="1rem"/>Components</> },
			{ title: <><InfoIcon size="1rem"/>BreadCrumb</> },
		];

		return (
			<div className="flex flex-col gap-lg items-start justify-center">
				<BreadCrumb items={items} />
			</div>
		);
	},
};
