import { ComponentProps, forwardRef } from 'react';
import cn from '../../utils/cn';

export interface RadioButtonProps extends ComponentProps<'input'> {
	className?: string;
	radioSize?: 'sm' | 'md';
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>((
	{
		className,
		radioSize = 'sm',
		...props
	},
	ref,
) => {
	const baseCn = `
		not:checked:bg-radio-btn not:checked:border-radio-btn
		checked:text-radio-btn-checked

		focus:ring-2
		focus:ring-offset-0 checked:focus:ring-offset-1
		focus:ring-radio-btn-focused

		hover:ring-2
		hover:ring-offset-0 checked:hover:ring-offset-1
		hover:ring-radio-btn-hover
		disabled:hover:ring-0

		disabled:border-radio-btn-disabled
		checked:disabled:border-transparent checked:disabled:text-radio-btn-checked-disabled
	`;

	const radioSizeClasses = {
		sm: 'w-4 h-4',
		md: 'w-5 h-5',
	};

	const radioButtonCn = cn(
		baseCn,
		radioSizeClasses[radioSize],
		className,
	);

	return (
		<input type="radio" className={radioButtonCn} ref={ref} {...props}/>
	);
});

RadioButton.displayName = 'Button';
