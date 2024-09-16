import {
	ComponentPropsWithoutRef,
	ComponentPropsWithRef,
	type ElementType,
	forwardRef,
} from 'react';
import cn from '../../utils/cn';

// TODO:
// - iconLeft
// - iconRight

type ButtonColor = 'brand' | 'success' | 'danger' | 'warning';
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'stroke';

type ButtonOwnProps<E extends ElementType = 'button'> = {
	className?: string;
	size?: 'sm' | 'md' | 'lg';
	color?: ButtonColor;
	variant?: ButtonVariant;
	as?: E;
  };

export type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof ButtonOwnProps>;

export const Button = forwardRef(
	<E extends ElementType = 'button'>(
		{
			children,
			className,
			size = 'md',
			variant = 'primary',
			color = 'brand',
			as,
			...props
		}: ButtonProps<E>,
		ref: ComponentPropsWithRef<E>['ref'],
	) => {
		const baseCn = 'flex items-center justify-center font-semibold';

		const sizeClasses = {
			sm: 'rounded-md gap-sm py-sm px-sm text-[0.625rem] leading-[1rem]',
			md: 'rounded-md gap-md py-sm px-lg text-[0.875rem] leading-[1.25rem]',
			lg: 'rounded-md gap-md py-lg px-2xl text-[0.875rem] leading-[1.25rem]',
		};

		const variantColorClasses = {
			brand: {
				primary: `
				bg-btn-brand-primary-rest
				hover:bg-btn-brand-primary-hover
				active:bg-btn-brand-primary-pressed
				focus:bg-btn-brand-primary-focused
				disabled:bg-btn-brand-primary-disabled

				text-btn-brand-primary-rest
				hover:text-btn-brand-primary-hover
				active:text-btn-brand-primary-pressed
				focus:text-btn-brand-primary-focused
				disabled:text-btn-brand-primary-disabled

				focus:border-btn-brand-primary-focused
				border-none
			`,
				secondary: `
				bg-btn-brand-secondary-rest
				hover:bg-btn-brand-secondary-hover
				active:bg-btn-brand-secondary-pressed
				focus:bg-btn-brand-secondary-focused
				disabled:bg-btn-brand-secondary-disabled

				text-btn-brand-secondary-rest
				hover:text-btn-brand-secondary-hover
				active:text-btn-brand-secondary-pressed
				focus:text-btn-brand-secondary-focused
				disabled:text-btn-brand-secondary-disabled

				focus:border-btn-brand-secondary-focused
				border-none
			`,
				ghost: `
				bg-btn-brand-ghost-rest
				hover:bg-btn-brand-ghost-hover
				active:bg-btn-brand-ghost-pressed
				focus:bg-btn-brand-ghost-focused
				disabled:bg-btn-brand-ghost-disabled

				text-btn-brand-ghost-rest
				hover:text-btn-brand-ghost-hover
				active:text-btn-brand-ghost-pressed
				focus:text-btn-brand-ghost-focused
				disabled:text-btn-brand-ghost-disabled

				focus:border-btn-brand-ghost-focused
				border-none
			`,
				stroke: `
				bg-btn-brand-stroke-rest
				hover:bg-btn-brand-stroke-hover
				active:bg-btn-brand-stroke-pressed
				focus:bg-btn-brand-stroke-focused
				disabled:bg-btn-brand-stroke-disabled

				text-btn-brand-stroke-rest
				hover:text-btn-brand-stroke-hover
				active:text-btn-brand-stroke-pressed
				focus:text-btn-brand-stroke-focused
				disabled:text-btn-brand-stroke-disabled

				focus:border-btn-brand-stroke-focused
				border border-btn-brand-stroke-rest
				disabled:border-btn-brand-stroke-disabled
			`,
			},
			success: {
				primary: `
				bg-btn-success-primary-rest
				hover:bg-btn-success-primary-hover
				active:bg-btn-success-primary-pressed
				focus:bg-btn-success-primary-focused
				disabled:bg-btn-success-primary-disabled

				text-btn-success-primary-rest
				hover:text-btn-success-primary-hover
				active:text-btn-success-primary-pressed
				focus:text-btn-success-primary-focused
				disabled:text-btn-success-primary-disabled

				focus:border-btn-success-primary-focused
				border-none
			`,
				secondary: `
				bg-btn-success-secondary-rest
				hover:bg-btn-success-secondary-hover
				active:bg-btn-success-secondary-pressed
				focus:bg-btn-success-secondary-focused
				disabled:bg-btn-success-secondary-disabled

				text-btn-success-secondary-rest
				hover:text-btn-success-secondary-hover
				active:text-btn-success-secondary-pressed
				focus:text-btn-success-secondary-focused
				disabled:text-btn-success-secondary-disabled

				focus:border-btn-success-secondary-focused
				border-none
			`,
				ghost: `
				bg-btn-success-ghost-rest
				hover:bg-btn-success-ghost-hover
				active:bg-btn-success-ghost-pressed
				focus:bg-btn-success-ghost-focused
				disabled:bg-btn-success-ghost-disabled

				text-btn-success-ghost-rest
				hover:text-btn-success-ghost-hover
				active:text-btn-success-ghost-pressed
				focus:text-btn-success-ghost-focused
				disabled:text-btn-success-ghost-disabled

				focus:border-btn-success-ghost-focused
				border-none
			`,
				stroke: `
				bg-btn-success-stroke-rest
				hover:bg-btn-success-stroke-hover
				active:bg-btn-success-stroke-pressed
				focus:bg-btn-success-stroke-focused
				disabled:bg-btn-success-stroke-disabled

				text-btn-success-stroke-rest
				hover:text-btn-success-stroke-hover
				active:text-btn-success-stroke-pressed
				focus:text-btn-success-stroke-focused
				disabled:text-btn-success-stroke-disabled

				focus:border-btn-success-stroke-focused
				border border-btn-success-stroke-rest
				disabled:border-btn-success-stroke-disabled
			`,
			},
			danger: {
				primary: `
				bg-btn-danger-primary-rest
				hover:bg-btn-danger-primary-hover
				active:bg-btn-danger-primary-pressed
				focus:bg-btn-danger-primary-focused
				disabled:bg-btn-danger-primary-disabled

				text-btn-danger-primary-rest
				hover:text-btn-danger-primary-hover
				active:text-btn-danger-primary-pressed
				focus:text-btn-danger-primary-focused
				disabled:text-btn-danger-primary-disabled

				focus:border-btn-danger-primary-focused
				border-none
			`,
				secondary: `
				bg-btn-danger-secondary-rest
				hover:bg-btn-danger-secondary-hover
				active:bg-btn-danger-secondary-pressed
				focus:bg-btn-danger-secondary-focused
				disabled:bg-btn-danger-secondary-disabled

				text-btn-danger-secondary-rest
				hover:text-btn-danger-secondary-hover
				active:text-btn-danger-secondary-pressed
				focus:text-btn-danger-secondary-focused
				disabled:text-btn-danger-secondary-disabled

				focus:border-btn-danger-secondary-focused
				border-none
			`,
				ghost: `
				bg-btn-danger-ghost-rest
				hover:bg-btn-danger-ghost-hover
				active:bg-btn-danger-ghost-pressed
				focus:bg-btn-danger-ghost-focused
				disabled:bg-btn-danger-ghost-disabled

				text-btn-danger-ghost-rest
				hover:text-btn-danger-ghost-hover
				active:text-btn-danger-ghost-pressed
				focus:text-btn-danger-ghost-focused
				disabled:text-btn-danger-ghost-disabled

				focus:border-btn-danger-ghost-focused
				border-none
			`,
				stroke: `
				bg-btn-danger-stroke-rest
				hover:bg-btn-danger-stroke-hover
				active:bg-btn-danger-stroke-pressed
				focus:bg-btn-danger-stroke-focused
				disabled:bg-btn-danger-stroke-disabled

				text-btn-danger-stroke-rest
				hover:text-btn-danger-stroke-hover
				active:text-btn-danger-stroke-pressed
				focus:text-btn-danger-stroke-focused
				disabled:text-btn-danger-stroke-disabled

				focus:border-btn-danger-stroke-focused
				border border-btn-danger-stroke-rest
				disabled:border-btn-danger-stroke-disabled
			`,
			},
			warning: {
				primary: `
				bg-btn-warning-primary-rest
				hover:bg-btn-warning-primary-hover
				active:bg-btn-warning-primary-pressed
				focus:bg-btn-warning-primary-focused
				disabled:bg-btn-warning-primary-disabled

				text-btn-warning-primary-rest
				hover:text-btn-warning-primary-hover
				active:text-btn-warning-primary-pressed
				focus:text-btn-warning-primary-focused
				disabled:text-btn-warning-primary-disabled

				focus:border-btn-warning-primary-focused
				border-none
			`,
				secondary: `
				bg-btn-warning-secondary-rest
				hover:bg-btn-warning-secondary-hover
				active:bg-btn-warning-secondary-pressed
				focus:bg-btn-warning-secondary-focused
				disabled:bg-btn-warning-secondary-disabled

				text-btn-warning-secondary-rest
				hover:text-btn-warning-secondary-hover
				active:text-btn-warning-secondary-pressed
				focus:text-btn-warning-secondary-focused
				disabled:text-btn-warning-secondary-disabled

				focus:border-btn-warning-secondary-focused
				border-none
			`,
				ghost: `
				bg-btn-warning-ghost-rest
				hover:bg-btn-warning-ghost-hover
				active:bg-btn-warning-ghost-pressed
				focus:bg-btn-warning-ghost-focused
				disabled:bg-btn-warning-ghost-disabled

				text-btn-warning-ghost-rest
				hover:text-btn-warning-ghost-hover
				active:text-btn-warning-ghost-pressed
				focus:text-btn-warning-ghost-focused
				disabled:text-btn-warning-ghost-disabled

				focus:border-btn-warning-ghost-focused
				border-none
			`,
				stroke: `
				bg-btn-warning-stroke-rest
				hover:bg-btn-warning-stroke-hover
				active:bg-btn-warning-stroke-pressed
				focus:bg-btn-warning-stroke-focused
				disabled:bg-btn-warning-stroke-disabled

				text-btn-warning-stroke-rest
				hover:text-btn-warning-stroke-hover
				active:text-btn-warning-stroke-pressed
				focus:text-btn-warning-stroke-focused
				disabled:text-btn-warning-stroke-disabled

				focus:border-btn-warning-stroke-focused
				border border-btn-warning-stroke-rest
				disabled:border-btn-warning-stroke-disabled
			`,
			},
		};

		const buttonCn = cn(
			baseCn,
			sizeClasses[size],
			variantColorClasses[color][variant],
			className,
		);

		const Component = as || 'button';

		return (
			<Component className={buttonCn} ref={ref} {...props}>
				{children}
			</Component>
		);
	},
);

Button.displayName = 'Button';
