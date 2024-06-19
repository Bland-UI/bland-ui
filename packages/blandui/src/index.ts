import plugin from 'tailwindcss/plugin';
import forms from '@tailwindcss/forms';
import typography from './Typography';
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
	addBase,
}) => {
	addUtilities(typography);

	addBase({
		':root': {
			// Brand colors
			'--color-carbon-0':    '#FFF',
			'--color-carbon-50':   '#f2f2f2',
			'--color-carbon-100':  '#e6e6e6',
			'--color-carbon-200':  '#cccccc',
			'--color-carbon-300':  '#b3b3b3',
			'--color-carbon-400':  '#999999',
			'--color-carbon-500':  '#808080',
			'--color-carbon-600':  '#666666',
			'--color-carbon-700':  '#4d4d4d',
			'--color-carbon-800':  '#333333',
			'--color-carbon-900':  '#191919',
			'--color-carbon-950':  '#0d0d0d',
			'--color-carbon-1000': '#000000',

			'--color-gray-0':    '#ffffff',
			'--color-gray-50':   '#f2f2f2',
			'--color-gray-100':  '#e6e6e6',
			'--color-gray-200':  '#cccccc',
			'--color-gray-300':  '#b3b3b3',
			'--color-gray-400':  '#999999',
			'--color-gray-500':  '#808080',
			'--color-gray-600':  '#666666',
			'--color-gray-700':  '#4d4d4d',
			'--color-gray-800':  '#333333',
			'--color-gray-900':  '#191919',
			'--color-gray-950':  '#0d0d0d',
			'--color-gray-1000': '#000000',

			// Functional colors
			'--color-amber-0':    '#ffffff',
			'--color-amber-50':   '#fffbdb',
			'--color-amber-100':  '#fff6b5',
			'--color-amber-200':  '#ffe273',
			'--color-amber-300':  '#ffd036',
			'--color-amber-400':  '#ffbf00',
			'--color-amber-500':  '#e0a800',
			'--color-amber-600':  '#c29100',
			'--color-amber-700':  '#a37a00',
			'--color-amber-800':  '#846300',
			'--color-amber-900':  '#664c00',
			'--color-amber-1000': '#473500',
			'--color-amber-1100': '#281e00',
			'--color-amber-1150': '#140f00',
			'--color-amber-1200': '#000000',

			'--color-green-0':    '#ffffff',
			'--color-green-50':   '#d5fed5',
			'--color-green-100':  '#abfdab',
			'--color-green-200':  '#6af26a',
			'--color-green-300':  '#30e630',
			'--color-green-400':  '#00db00',
			'--color-green-500':  '#00c000',
			'--color-green-600':  '#00a600',
			'--color-green-700':  '#008b00',
			'--color-green-800':  '#007000',
			'--color-green-900':  '#005600',
			'--color-green-1000': '#003b00',
			'--color-green-1100': '#002000',
			'--color-green-1150': '#001000',
			'--color-green-1200': '#000000',

			'--color-red-0':    '#ffffff',
			'--color-red-50':   '#ffe4e4',
			'--color-red-100':  '#ffc7c7',
			'--color-red-200':  '#ff8d8d',
			'--color-red-300':  '#ff5858',
			'--color-red-400':  '#ff2929',
			'--color-red-500':  '#ff0000',
			'--color-red-600':  '#dc0000',
			'--color-red-700':  '#ba0000',
			'--color-red-800':  '#970000',
			'--color-red-900':  '#750000',
			'--color-red-1000': '#520000',
			'--color-red-1100': '#300000',
			'--color-red-1150': '#180000',
			'--color-red-1200': '#000000',
		},
	});
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
