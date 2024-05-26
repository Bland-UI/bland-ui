import { ComponentProps, forwardRef } from 'react';
import cn from '../../utils/cn';

export interface ToggleProps extends Omit<ComponentProps<'input'>, 'size'> {
	className?: string;

	label?: string;
	size?: 'sm' | 'md';
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(({
	className,
	label,
	size = 'md',
	...props
}: ToggleProps, ref) => {
	const baseKnobCn = [
		'flex items-center flex-shrink-0 px-xs rounded-full bg-toggle-surface-unchecked',

		'peer-checked:bg-toggle-surface-checked',
		'peer-disabled:bg-toggle-surface-unchecked-disabled',

		'group-has-[:checked]:bg-toggle-surface-checked-disabled',

		'duration-300 ease-in-out',

		'after:rounded-full after:bg-toggle-knob-rest',
		'after:duration-300',
		'peer-disabled:after:bg-toggle-knob-disabled',
	];

	const sizeClasses = {
		sm: 'w-3xl h-xl after:w-lg after:h-lg peer-checked:after:translate-x-lg',
		md: 'w-5xl h-2xl after:w-xl after:h-xl peer-checked:after:translate-x-xl',
	};

	const knobCn = cn([
		baseKnobCn,
		sizeClasses[size],
		className,
	]);

	return (
		<label className="flex justify-between items-center gap-md p-xs text-bold body-md group">
			<input ref={ref} type="checkbox" {...props} className="peer sr-only" />

			<span className={knobCn}/>

			{ label }
		</label>
	);
});

Toggle.displayName = 'Toggle';
