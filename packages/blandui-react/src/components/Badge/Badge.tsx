import { PropsWithChildren, forwardRef } from 'react';
import cn from '../../utils/cn';

type BadgeColor = 'brand' | 'gray' | 'green' | 'red' | 'amber';
type BadgeVariant = 'primary' | 'secondary' | 'stroke';

interface BadgeProps extends PropsWithChildren {
	className?: string;
	size?: 'sm' | 'md' | 'lg' | 'xl';
	color?: BadgeColor;
	variant?: BadgeVariant;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(({
	className,
	size = 'md',
	color = 'brand',
	variant = 'primary',
	children,
}: BadgeProps, ref) => {
	const baseCn = 'flex items-center justify-center gap-sm w-fit';

	const sizeClasses = {
		sm: 'rounded-full px-sm py-2xs body-md h-4',
		md: 'rounded-full px-sm py-2xs body-md h-5',
		lg: 'rounded-full px-sm py-2xs body-md h-6',
		xl: 'rounded-full px-lg py-2xs body-md h-7',
	};

	const variantColorClasses = {
		brand: {
			primary:   'bg-badge-brand-primary text-inverse',
			secondary: 'bg-badge-brand-secondary text-bold',
			stroke:    'bg-transparent border border-brand text-bold',
		},
		gray: {
			primary:   'bg-badge-gray-primary text-inverse',
			secondary: 'bg-badge-gray-secondary text-bold',
			stroke:    'bg-transparent border border-bold text-bold',
		},
		green: {
			primary:   'bg-badge-green-primary text-inverse',
			secondary: 'bg-badge-green-secondary text-success',
			stroke:    'bg-transparent border border-success text-success',
		},
		red: {
			primary:   'bg-badge-red-primary text-inverse',
			secondary: 'bg-badge-red-secondary text-danger',
			stroke:    'bg-transparent border border-danger text-danger',
		},
		amber: {
			primary:   'bg-badge-amber-primary text-inverse',
			secondary: 'bg-badge-amber-secondary text-warning',
			stroke:    'bg-transparent border border-warning text-warning',
		},
	};

	const badgeCn = cn(
		baseCn,
		sizeClasses[size],
		variantColorClasses[color][variant],
		className,
	);

	return (
		<div className={badgeCn} ref={ref}>
			{ children }
		</div>
	);
});

Badge.displayName = 'Badge';
export { Badge };
export type { BadgeProps };
