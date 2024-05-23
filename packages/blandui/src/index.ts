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
			textColor,

			// Effect
			boxShadow,

			// Spacing
			borderRadius,
			borderWidth,
			gap,
			padding,
			spacing,

			// TO SORT
			ringColor: {
				inverse: '#FFF',
				subtle:  colors.carbon[100],
				bold:    colors.carbon[200],
				focused: colors.carbon[300],
				hover:   colors.gray[100],

				success:           colors.green[500],
				'success-focused': colors.green[200],

				danger:           colors.red[500],
				'danger-focused': colors.red[100],

				warning:           colors.amber[500],
				'warning-focused': colors.amber[200],
			},

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
