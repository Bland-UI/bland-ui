import {
	forwardRef, Fragment, MouseEventHandler, ReactNode,
} from 'react';
import { ChevronRight } from 'lucide-react';
import cn from '../../utils/cn';

export interface BreadCrumbItem {
	title: ReactNode;

	onClick?: MouseEventHandler;
	href?: string;
}

export interface BreadCrumbProps {
	className?: string;
	separator?: ReactNode;
	items: BreadCrumbItem[];
}

export const BreadCrumb = forwardRef<HTMLDivElement, BreadCrumbProps>(({
	className,
	separator,
	items,
}, ref) => {
	const breadCrumbCn = cn(
		'flex items-center gap-xs text-link body-md',
		className,
	);

	const itemCn = cn(
		'flex gap-sm items-center px-2xs',
		'cursor-pointer',
		'focus:ring-2 focus:ring-offset-0 focus:ring-focused focus:rounded-sm',
	);

	const contentCn = cn(
		'flex items-center gap-sm',
		'hover:underline',
	);

	return (
		<div className={breadCrumbCn} ref={ref}>
			{items.map((item, index) => (<div key={index} className={itemCn}>
				{ item.href && <>
					<a
						href={item.href}
						className={cn(contentCn, index === items.length - 1 ? 'font-semibold' : '')}
					>
						{ item.title }
					</a>
				</> }

				{ !item.href && <>
					<div
						onClick={item.onClick}
						className={cn(contentCn, index === items.length - 1 ? 'font-semibold' : '')}
					>
						{ item.title }
					</div>
				</> }

				{ index < items.length - 1 && <>
					{ separator || <ChevronRight size="0.75rem" className="text-subtle" />}
				</>}
			</div>
			))}
		</div>
	);
});

BreadCrumb.displayName = 'BreadCrumb';
