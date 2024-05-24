import plugin from 'tailwindcss/plugin';
import forms from '@tailwindcss/forms';
import typogaphy from './Typogaphy';
import boxShadow from './Effect/boxShadow';
import colors from './Color/colors';
import backgroundColor from './Color/backgroundColor';
import borderColor from './Color/borderColor';
import textColor from './Color/textColor';
import spacing from './Spacing/spacing';
import padding from './Spacing/padding';
import gap from './Spacing/gap';
import borderRadius from './Spacing/borderRadius';
import borderWidth from './Spacing/borderWidth';

const blanduiPlugin = plugin(({
	addUtilities,
}) => {
	addUtilities(typogaphy);
}, {
	theme: {
		extend: {
			// Color
			colors,
			backgroundColor,
			borderColor,
			outlineColor: borderColor,
			ringColor:    borderColor,
			textColor,

			// Effect
			boxShadow,

			// Spacing
			borderRadius,
			borderWidth,
			outlineWidth: borderWidth,
			ringWidth:    borderWidth,
			gap,
			padding,
			spacing,

			// WIP
			fontSize: {
				sm: ['0.625rem', '1rem'],
				md: ['0.875rem', '1.25rem'],
				lg: '2rem',
			},
			lineHeight: {
				sm: '1rem',
				md: '1.25rem',
			},
		},
	},
	plugins: [
		forms,
	],
});

export default blanduiPlugin;
