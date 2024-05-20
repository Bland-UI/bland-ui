import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/cn";

// TODO:
// - iconLeft
// - iconRight

type ButtonColor = "brand" | "success" | "danger" | "warning";
type ButtonVariant = "primary" | "secondary" | "ghost" | "stroke";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	size?: "sm" | "md" | "lg";
	color?: ButtonColor;
	variant?: ButtonVariant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({
		children,
		className,
		size = "md",
		variant = "primary",
		color = "brand",
		...props
	}) => {
		const baseCn = "flex items-center justify-center font-semibold";

		const sizeClasses = {
			sm: "rounded-md gap-sm py-sm px-sm text-[0.625rem] leading-4",
			md: "rounded-md gap-md py-sm px-lg text-sm",
			lg: "rounded-md gap-md py-lg px-2xl text-sm",
		};

		const variantColorClasses = {
			brand: {
				primary: `bg-btn-brand-primary-rest enabled:hover:bg-btn-brand-primary-hover active:bg-btn-brand-primary-pressed focus:bg-btn-brand-primary-focused focus:border-focused disabled:bg-btn-brand-primary-disabled enabled:text-inverse disabled:text-subtle border-none`,
				secondary: `bg-btn-brand-secondary-rest enabled:hover:bg-btn-brand-secondary-hover active:bg-btn-brand-secondary-pressed focus:bg-btn-brand-secondary-focused focus:border-focused disabled:bg-btn-brand-secondary-disabled enabled:text-bold disabled:text-subtle border-none`,
				ghost: `bg-btn-brand-ghost-rest enabled:hover:bg-btn-brand-ghost-hover active:bg-btn-brand-ghost-pressed focus:bg-btn-brand-ghost-focused focus:border-focused disabled:bg-btn-brand-ghost-disabled enabled:text-bold disabled:text-minimal border-none`,
				stroke: `bg-btn-brand-stroke-rest enabled:hover:bg-btn-brand-stroke-hover active:bg-btn-brand-stroke-pressed focus:bg-btn-brand-stroke-focused focus:border-focused disabled:bg-btn-brand-stroke-disabled enabled:text-bold disabled:text-minimal border disabled:border-bold disabled:border-subtle`,
			},
			success: {
				primary: `bg-btn-success-primary-rest enabled:hover:bg-btn-success-primary-hover active:bg-btn-success-primary-pressed focus:bg-btn-success-primary-focused focus:border-success-focused disabled:bg-btn-success-primary-disabled enabled:text-inverse disabled:text-subtle border-none`,
				secondary: `bg-btn-success-secondary-rest enabled:hover:bg-btn-success-secondary-hover active:bg-btn-success-secondary-pressed focus:bg-btn-success-secondary-focused focus:border-success-focused disabled:bg-btn-success-secondary-disabled enabled:text-success disabled:text-subtle border-none`,
				ghost: `bg-btn-success-ghost-rest enabled:hover:bg-btn-success-ghost-hover active:bg-btn-success-ghost-pressed focus:bg-btn-success-ghost-focused focus:border-success-focused disabled:bg-btn-success-ghost-disabled enabled:text-success disabled:text-minimal border-none`,
				stroke: `bg-btn-success-stroke-rest enabled:hover:bg-btn-success-stroke-hover active:bg-btn-success-stroke-pressed focus:bg-btn-success-stroke-focused focus:border-success-focused disabled:bg-btn-success-stroke-disabled enabled:text-success disabled:text-minimal border enabled:border-success disabled:border-subtle`,
			},
			danger: {
				primary: `bg-btn-danger-primary-rest enabled:hover:bg-btn-danger-primary-hover active:bg-btn-danger-primary-pressed focus:bg-btn-danger-primary-focused focus:border-danger-focused disabled:bg-btn-danger-primary-disabled enabled:text-inverse disabled:text-subtle border-none`,
				secondary: `bg-btn-danger-secondary-rest enabled:hover:bg-btn-danger-secondary-hover active:bg-btn-danger-secondary-pressed focus:bg-btn-danger-secondary-focused focus:border-danger-focused disabled:bg-btn-danger-secondary-disabled enabled:text-danger disabled:text-subtle border-none`,
				ghost: `bg-btn-danger-ghost-rest enabled:hover:bg-btn-danger-ghost-hover active:bg-btn-danger-ghost-pressed focus:bg-btn-danger-ghost-focused focus:border-danger-focused disabled:bg-btn-danger-ghost-disabled enabled:text-danger disabled:text-minimal border-none`,
				stroke: `bg-btn-danger-stroke-rest enabled:hover:bg-btn-danger-stroke-hover active:bg-btn-danger-stroke-pressed focus:bg-btn-danger-stroke-focused focus:border-danger-focused disabled:bg-btn-danger-stroke-disabled enabled:text-danger disabled:text-minimal border enabled:border-danger disabled:border-subtle`,
			},
			warning: {
				primary: `bg-btn-warning-primary-rest enabled:hover:bg-btn-warning-primary-hover active:bg-btn-warning-primary-pressed focus:bg-btn-warning-primary-focused focus:border-warning-focused disabled:bg-btn-warning-primary-disabled enabled:text-inverse disabled:text-subtle border-none`,
				secondary: `bg-btn-warning-secondary-rest enabled:hover:bg-btn-warning-secondary-hover active:bg-btn-warning-seconadry-pressed focus:bg-btn-warning-secondary-focused focus:border-warning-focused disabled:bg-btn-warning-secondary-disabled enabled:text-warning disabled:text-subtle border-none`,
				ghost: `bg-btn-warning-ghost-rest enabled:hover:bg-btn-warning-ghost-hover active:bg-btn-warning-ghost-pressed focus:bg-btn-warning-ghost-focused focus:border-warning-focused disabled:bg-btn-warning-ghost-disabled enabled:text-warning disabled:text-minimal border-none`,
				stroke: `bg-btn-warning-stroke-rest enabled:hover:bg-btn-warning-stroke-hover active:bg-btn-warning-stroke-pressed focus:bg-btn-warning-stroke-focused focus:border-warning-focused disabled:bg-btn-warning-stroke-disabled enabled:text-warning disabled:text-minimal border enabled:border-warning disabled:border-subtle`,
			},
		};

		const buttonCn = cn(
			baseCn,
			sizeClasses[size],
			variantColorClasses[color][variant],
			className,
		);

		return (
			<button className={buttonCn} {...props}>
				{children}
			</button>
		);
	},
);

export { Button };
export type { ButtonProps };
