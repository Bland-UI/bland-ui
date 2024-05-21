import { type ComponentProps, forwardRef } from 'react';
import cn from '../../utils/cn';

interface CheckboxProps extends Omit<ComponentProps<'input'>, 'size'> {
	className?: string;
	size?: 'sm' | 'md';
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ className, size = 'md', ...props }, ref) => {
		const baseCn = 'bg-surface-3 border-bold hover:bg-surface-2 checked:bg-surface-brand';

		const sizeClasses = {
			sm: 'rounded-sm h-4 w-4',
			md: 'rounded-sm h-5 w-5',
		};

		const checkboxCn = cn(baseCn, sizeClasses[size], className);

		return (
			<input
				ref={ref}
				type="checkbox"
				className={checkboxCn}
				{...props}
			/>
		);
	},
);

Checkbox.displayName = 'Checkbox';
export { Checkbox };
export type { CheckboxProps };
