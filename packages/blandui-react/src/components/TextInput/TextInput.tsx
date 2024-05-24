import { ComponentProps, forwardRef } from 'react';
import cn from '../../utils/cn';

export interface TextInputProps extends ComponentProps<'input'> {
	className?: string;
	inputSize?: 'sm' | 'md' | 'lg';
	variant?: 'primary' | 'error' | 'success' | 'warning';

	label?: string;
	helperText?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
	className,
	inputSize = 'md',
	variant = 'primary',

	label,
	helperText,

	...props
}, ref) => {
	const baseCn = [
		'bg-input-surface-rest rounded-md text-bold placeholder:text-subtle body-md',
		'hover:bg-input-surface-hover',
		'focus:ring-2 focus:ring-offset-0 focus-visible:ring-2 focus-visible:ring-offset-0 focus-withing:outline-2 focus-within:outline-offset-0',
		'disabled:bg-input-surface-rest disabled:placeholder:text-minimal disabled:text-minimal',
	];

	const sizeClasses = {
		sm: 'py-xs px-md h-2xl',
		md: 'py-xs px-md h-3xl',
		lg: 'py-xs px-md h-4xl',
	};

	const variantClasses = {
		primary: 'border-md border-subtle focus:ring-focused focus:border-none',
		error:   'border-md border-danger focus:ring-danger-focused focus:border-danger focus:border-md focus-visible:ring-danger-focused focus-visible:border-danger focus-within:outline-danger-focused focus-within:border-danger',
		success: 'border-md border-success focus:ring-success-focused focus:border-success focus:border-md',
		warning: 'border-md border-warning focus:ring-warning-focused focus:border-warning focus:border-md',
	};

	const variantHelperClasses = {
		primary: 'text-subtle',
		error:   'text-danger',
		success: 'text-success',
		warning: 'text-warning',
	};

	const textInputCn = cn(
		baseCn,
		sizeClasses[inputSize],
		variantClasses[variant],
		className,
	);

	const helperTextCn = cn(
		'body-sm',
		variantHelperClasses[variant],
	);

	if (!label && !helperText) {
		return (
			<input
				className={textInputCn}
				ref={ref}
				{...props}
			/>
		);
	}

	return (
		<div className='flex flex-col gap-sm'>
			{ label && <label className="text-bold body-md" htmlFor={props.name}>
				{ label }
			</label> }

			<input
				className={textInputCn}
				ref={ref}
				{...props}
			/>

			{ helperText && <p className={helperTextCn}>
				{helperText}
			</p> }
		</div>
	);
});

TextInput.displayName = 'TextInput';
