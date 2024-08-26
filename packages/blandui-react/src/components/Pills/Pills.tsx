import { forwardRef, ReactNode } from 'react';
import cn from '../../utils/cn';

type PillsSize = 'sm' | 'md' | 'lg';

export interface PillsItem {
	label: string | ReactNode;
	value: any;

	count?: number;
	selected?: boolean;
}

export interface PillsProps {
	className?: string;
	size?: PillsSize;
	items: Array<PillsItem>;
	onClick: (value: any) => void;
}

export const Pills = forwardRef<HTMLDivElement, PillsProps>((
	{
		className,
		size = 'md',
		items,
		onClick,
	},
	ref,
) => {
	const baseContainerCn = 'flex gap-md body-md';

	const containerCn = cn(
		baseContainerCn,
		className,
	);

	const basePillsCn = 'flex items-center justify-center gap-sm rounded-full border border-subtle cursor-pointer h-2xl max-h-2xl min-w-3xl';

	const sizeCn = {
		sm: 'px-md',
		md: 'px-lg',
		lg: 'px-xl',
	};

	const pillCn = cn(
		basePillsCn,
		'bg-surface-4 text-bold hover:bg-surface-3 focus-visible:outline focus-visible:outline-offset-0 focus-visible:outline-4 focus-visible:outline-focused',
		sizeCn[size],
	);
	const pillSelectedCn = cn(
		basePillsCn,
		'bg-surface-brand text-inverse focus-visible:outline focus-visible:outline-offset-0 focus-visible:outline-4 focus-visible:outline-focused',
		sizeCn[size],
	);

	const baseCountCn = 'flex items-center justify-center px-xs h-5 min-w-5 border rounded-full';
	const countCn = cn(
		baseCountCn,
		'text-subtle bg-surface-3 border-subtle',
	);
	const countSelectedCn = cn(
		baseCountCn,
		'text-inverse border-bold',
	);

	return (
		<div className={containerCn} ref={ref}>
			{ items.map((item, index) => (
				<div key={index} className={!item.selected ? pillCn : pillSelectedCn} onClick={() => { onClick(item.value); }}>
					{ item.label }

					{ item.count !== undefined && <div className={!item.selected ? countCn : countSelectedCn}>
						{ item.count }
					</div> }
				</div>
			)) }
		</div>
	);
});

Pills.displayName = 'Pills';
