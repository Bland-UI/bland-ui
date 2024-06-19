import { ComponentProps, MouseEvent, forwardRef } from 'react';
import { X } from 'lucide-react';
import cn from '../../utils/cn';

type ChipSize = 'sm' | 'md';
type ChipType = 'empty' | 'cancellable' | 'countable';

export interface ChipProps extends ComponentProps<'div'> {
	className?: string;
	size?: ChipSize;
	type?: ChipType;

	cancellableClassName?: string;

	countableClassName?: string;
	count?: number;

	onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export const Chip = forwardRef<HTMLDivElement, ChipProps>((
	{
		children,
		className,

		size = 'md',
		type = 'empty',

		cancellableClassName,

		countableClassName,
		count = 0,

		onClick,

		...props
	},
	ref,
) => {
	const baseCn = 'flex items-center gap-sm border border-subtle rounded-sm bg-surface-4 body-md text-bold';

	const typeCn = {
		empty:       'px-sm',
		cancellable: 'pl-sm pr-xs',
		countable:   'pl-sm pr-xs',

	};

	const sizeCn = {
		sm: 'h-xl',
		md: 'h-2xl',
	};

	const chipCn = cn(
		baseCn,
		typeCn[type],
		sizeCn[size],
		className,
	);

	const baseExtraCn = 'flex items-center justify-center p-2xs rounded-xs bg-surface-3 body-sm text-subtle font-semibold';

	const cancellableCn = cn(
		baseExtraCn,
		'cursor-pointer',
		cancellableClassName,
	);

	const countableCn = cn(
		baseExtraCn,
		'min-w-lg',
		countableClassName,
	);

	return (
		<div className={chipCn} ref={ref} onClick={type === 'cancellable' ? undefined : onClick} {...props}>
			{ children }

			{ type === 'cancellable' && <span className={cancellableCn} onClick={onClick}>
				<X size="0.75rem" className="text-subtle" />
			</span>}

			{ type === 'countable' && <span className={countableCn}>
				{ count }
			</span>}
		</div>
	);
});

Chip.displayName = 'Chip';
