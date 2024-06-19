import { ReactNode, forwardRef, useCallback } from 'react';
import cn from '../../utils/cn';

export interface SegmentedBarProps {
	className?: string;
	size?: 'md' | 'lg';
	activeTab?: number | string;
	tabs?: Array<{ label: string | ReactNode; value: number | string }>;
	onClick?: (value: number | string) => void;
}

export const SegmentedBar = forwardRef<HTMLDivElement, SegmentedBarProps>(
	(
		{
			className,
			size = 'md',
			tabs = [],
			activeTab = 0,
			onClick,
		}: SegmentedBarProps,
		ref,
	) => {
		const baseCn =			'flex text-bold body-md bg-surface-2 p-2xs rounded-md cursor-pointer';

		const segmentedBarCn = cn(baseCn, className);

		const sizeClasses = {
			md: 'px-sm py-xs rounded-md',
			lg: 'px-sm py-sm rounded-md',
		};

		const tabCn = cn('flex-1 text-center', sizeClasses[size]);
		const activeTabCn = cn(
			'flex-1 text-center shadow-brand-near-bold bg-surface-4',
			sizeClasses[size],
		);

		const cb = useCallback((value: number | string) => {
			if (onClick) {
				onClick(value);
			}
		}, [onClick]);

		return (
			<div className={segmentedBarCn} ref={ref}>
				{tabs.map((tab) => (
					<div
						className={
							tab.value === activeTab ? activeTabCn : tabCn
						}
						key={tab.value}
						onClick={() => cb(tab.value)}
					>
						{tab.label}
					</div>
				))}
			</div>
		);
	},
);

SegmentedBar.displayName = 'SegmentedBar';
