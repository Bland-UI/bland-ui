import { type ComponentProps, forwardRef } from 'react';
import cn from '../../utils/cn';

export interface CheckboxProps extends Omit<ComponentProps<'input'>, 'size'> {
	className?: string;
	size?: 'sm' | 'md';
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ className, size = 'md', ...props }, ref) => {
		const baseCn = [
			// NOT CHECKED
			'bg-surface-3 border-bold hover:ring-2 hover:ring-offset-1 ring-0 hover:ring-hover',
			'disabled:border-subtle',

			'focus:ring-2 focus:ring-offset-1 focus:ring-focused focus:bg-surface-3',
			'focus-within:ring-2 focus-within:ring-offset-1 focus-within:ring-focused focus-within:bg-surface-3',
			'focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-focused focus-visible:bg-surface-3',

			// CHECKED
			'checked:bg-surface-brand checked:hover:bg-surface-brand',
			'checked:disabled:bg-surface-0 checked:disabled:border-none',
			'checked:focus:bg-surface-brand',
			'checked:focus-within:bg-surface-brand',
			'checked:focus-visible:bg-surface-brand',
		];

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
