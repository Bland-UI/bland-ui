import { type ElementType, type PropsWithChildren, forwardRef } from 'react';
import cn from '../../utils/cn';

const elementMap = {
	display: { lg: 'h1', md: 'h2', sm: 'h3' },
	heading: { lg: 'h4', md: 'h5', sm: 'h6' },
	title:   { lg: 'p', md: 'p', sm: 'p' },
	body:    { lg: 'p', md: 'p', sm: 'p' },
};

// TODO Display also the -bold here
const classMap = {
	display: { lg: 'display-lg', md: 'display-md', sm: 'display-sm' },
	heading: { lg: 'heading-lg', md: 'heading-md', sm: 'heading-sm' },
	title:   { lg: 'title-lg', md: 'title-md', sm: 'title-sm' },
	body:    { lg: 'body-lg', md: 'body-md', sm: 'body-sm' },
};

const weightMap = {
	regular: 'font-normal',
	medium:  'font-medium',
	bold:    'font-semibold',
};

export interface TypographyProps extends PropsWithChildren {
	className?: string;
	size?: 'sm' | 'md' | 'lg';
	type?: 'display' | 'heading' | 'title' | 'body';
	weight?: 'regular' | 'medium' | 'bold';
	as?: ElementType;
}

export const Typography = forwardRef(
	(
		{
			className,
			size = 'md',
			type = 'body',
			weight = 'regular',
			as,
			children,
			...props
		}: TypographyProps,
		ref,
	) => {
		const Component = as || elementMap[type][size];
		const classes = cn(classMap[type][size], weightMap[weight], className);

		return (
			<Component ref={ref} className={classes} {...props}>
				{children}
			</Component>
		);
	},
);

Typography.displayName = 'Typography';
