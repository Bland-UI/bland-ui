import plugin from 'tailwindcss/plugin';
import forms from '@tailwindcss/forms';
import typogaphy from './Typogaphy';

const colors = {
	// Brand colors
	carbon: {
		0:    '#FFF',
		50:   '#f2f2f2',
		100:  '#e6e6e6',
		200:  '#cccccc',
		300:  '#b3b3b3',
		400:  '#999999',
		500:  '#808080',
		600:  '#666666',
		700:  '#4d4d4d',
		800:  '#333333',
		900:  '#191919',
		950:  '#0d0d0d',
		1000: '#000000',
	},
	gray: {
		0:    '#ffffff',
		50:   '#f2f2f2',
		100:  '#e6e6e6',
		200:  '#cccccc',
		300:  '#b3b3b3',
		400:  '#999999',
		500:  '#808080',
		600:  '#666666',
		700:  '#4d4d4d',
		800:  '#333333',
		900:  '#191919',
		950:  '#0d0d0d',
		1000: '#000000',
	},

	// Functional colors
	amber: {
		0:    '#ffffff',
		50:   '#fffbdb',
		100:  '#fff6b5',
		200:  '#ffe273',
		300:  '#ffd036',
		400:  '#ffbf00',
		500:  '#e0a800',
		600:  '#c29100',
		700:  '#a37a00',
		800:  '#846300',
		900:  '#664c00',
		1000: '#473500',
		1100: '#281e00',
		1150: '#140f00',
		1200: '#000000',
	},
	green: {
		0:    '#ffffff',
		50:   '#d5fed5',
		100:  '#abfdab',
		200:  '#6af26a',
		300:  '#30e630',
		400:  '#00db00',
		500:  '#00c000',
		600:  '#00a600',
		700:  '#008b00',
		800:  '#007000',
		900:  '#005600',
		1000: '#003b00',
		1100: '#002000',
		1150: '#001000',
		1200: '#000000',
	},
	red: {
		0:    '#ffffff',
		50:   '#ffe4e4',
		100:  '#ffc7c7',
		200:  '#ff8d8d',
		300:  '#ff5858',
		400:  '#ff2929',
		500:  '#ff0000',
		600:  '#dc0000',
		700:  '#ba0000',
		800:  '#970000',
		900:  '#750000',
		1000: '#520000',
		1100: '#300000',
		1150: '#180000',
		1200: '#000000',
	},
};

const blanduiPlugin = plugin(({
	addUtilities,
}) => {
	addUtilities(typogaphy);
}, {
	theme: {
		extend: {
			colors,

			backgroundColor: {
				// BRAND
				'btn-brand-primary-rest':     colors.carbon[1000],
				'btn-brand-primary-hover':    colors.carbon[800],
				'btn-brand-primary-pressed':  colors.carbon[900],
				'btn-brand-primary-focused':  colors.carbon[1000],
				'btn-brand-primary-disabled': colors.gray[300],

				'btn-brand-secondary-rest':     colors.gray[100],
				'btn-brand-secondary-hover':    colors.gray[200],
				'btn-brand-secondary-pressed':  colors.gray[400],
				'btn-brand-secondary-focused':  colors.gray[100],
				'btn-brand-secondary-disabled': colors.gray[300],

				'btn-brand-ghost-rest':     'transparent',
				'btn-brand-ghost-hover':    colors.gray[200],
				'btn-brand-ghost-pressed':  colors.gray[400],
				'btn-brand-ghost-focused':  'transparent',
				'btn-brand-ghost-disabled': 'transparent',

				'btn-brand-stroke-rest':     'transparent',
				'btn-brand-stroke-hover':    colors.gray[200],
				'btn-brand-stroke-pressed':  colors.gray[400],
				'btn-brand-stroke-focused':  'transparent',
				'btn-brand-stroke-disabled': 'transparent',

				// SUCCESS
				'btn-success-primary-rest':     colors.green[700],
				'btn-success-primary-hover':    colors.green[800],
				'btn-success-primary-pressed':  colors.green[900],
				'btn-success-primary-focused':  colors.green[700],
				'btn-success-primary-disabled': colors.gray[300],

				'btn-success-secondary-rest':     colors.green[50],
				'btn-success-secondary-hover':    colors.green[200],
				'btn-success-secondary-pressed':  colors.green[400],
				'btn-success-secondary-focused':  colors.green[50],
				'btn-success-secondary-disabled': colors.gray[300],

				'btn-success-ghost-rest':     'transparent',
				'btn-success-ghost-hover':    colors.green[200],
				'btn-success-ghost-pressed':  colors.green[400],
				'btn-success-ghost-focused':  'transparent',
				'btn-success-ghost-disabled': 'transparent',

				'btn-success-stroke-rest':     'transparent',
				'btn-success-stroke-hover':    colors.green[200],
				'btn-success-stroke-pressed':  colors.green[400],
				'btn-success-stroke-focused':  'transparent',
				'btn-success-stroke-disabled': 'transparent',

				// DANGER
				'btn-danger-primary-rest':     colors.red[600],
				'btn-danger-primary-hover':    colors.red[800],
				'btn-danger-primary-pressed':  colors.red[900],
				'btn-danger-primary-focused':  colors.red[700],
				'btn-danger-primary-disabled': colors.gray[300],

				'btn-danger-secondary-rest':     colors.red[50],
				'btn-danger-secondary-hover':    colors.red[200],
				'btn-danger-secondary-pressed':  colors.red[400],
				'btn-danger-secondary-focused':  colors.red[50],
				'btn-danger-secondary-disabled': colors.gray[300],

				'btn-danger-ghost-rest':     'transparent',
				'btn-danger-ghost-hover':    colors.red[200],
				'btn-danger-ghost-pressed':  colors.red[400],
				'btn-danger-ghost-focused':  'transparent',
				'btn-danger-ghost-disabled': 'transparent',

				'btn-danger-stroke-rest':     'transparent',
				'btn-danger-stroke-hover':    colors.red[200],
				'btn-danger-stroke-pressed':  colors.red[400],
				'btn-danger-stroke-focused':  'transparent',
				'btn-danger-stroke-disabled': 'transparent',

				// WARNING
				'btn-warning-primary-rest':     colors.amber[700],
				'btn-warning-primary-hover':    colors.amber[800],
				'btn-warning-primary-pressed':  colors.amber[900],
				'btn-warning-primary-focused':  colors.amber[700],
				'btn-warning-primary-disabled': colors.gray[300],

				'btn-warning-secondary-rest':     colors.amber[100],
				'btn-warning-secondary-hover':    colors.amber[200],
				'btn-warning-secondary-pressed':  colors.amber[400],
				'btn-warning-secondary-focused':  colors.amber[100],
				'btn-warning-secondary-disabled': colors.gray[300],

				'btn-warning-ghost-rest':     'transparent',
				'btn-warning-ghost-hover':    colors.amber[200],
				'btn-warning-ghost-pressed':  colors.amber[400],
				'btn-warning-ghost-focused':  'transparent',
				'btn-warning-ghost-disabled': 'transparent',

				'btn-warning-stroke-rest':     'transparent',
				'btn-warning-stroke-hover':    colors.amber[200],
				'btn-warning-stroke-pressed':  colors.amber[400],
				'btn-warning-stroke-focused':  'transparent',
				'btn-warning-stroke-disabled': 'transparent',

				// TO SORT
				'text-input-surface-rest': '#F2F2F2',
				'surface-brand':           '#000',
				'surface-2':               '#E6E6E6',
				'surface-3':               '#F2F2F2',
				'surface-4':               '#FFF',
				'surface-rest':            '#FFF',
			},

			borderColor: {
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
			boxShadow: {
				'brand-near-soft':   '0px 2px 4px 0px rgba(25, 25, 25, 0.10)',
				'brand-near-subtle': '0px 2px 4px 0px rgba(25, 25, 25, 0.16)',
				'brand-near-hard':   '0px 2px 4px 0px rgba(25, 25, 25, 0.24)',
				'brand-mid-minimal': '0px 12px 16px 0px rgba(0, 0, 0, 0.10)',
				'brand-near-bold':   '0px 2px 4px 0px rgba(25, 25, 25, 0.24)',
			},

			textColor: {
				inverse: colors.gray[0],
				bold:    colors.carbon[1000],
				subtle:  colors.gray[500],
				minimal: colors.carbon[200],
				success: colors.green[600],
				danger:  colors.red[600],
				warning: colors.amber[700],
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

			borderRadius: {
				xs: '0.125rem',
				sm: '0.25rem',
				md: '0.5rem',
				lg: '1rem',
				xl: '1.5rem',
			},
			borderWidth: {
				DEFAULT: '1px',
				xs:      '0.5px',
				md:      '1px',
				lg:      '2px',
				xl:      '4px',
			},

			gap: {
				xs:    '0.125rem',
				sm:    '0.25rem',
				md:    '0.5rem',
				lg:    '1rem',
				xl:    '1.5rem',
				'2xl': '2rem',
				'3xl': '2.5rem',
				'4xl': '3rem',
				'5xl': '3.5rem',
				'6xl': '4rem',
				'7xl': '4.5rem',
				'8xl': '5rem',
			},
			spacing: {
				'2xs': '0.125rem', // 2
				xs:    '0.25rem', // 4
				sm:    '0.5rem', // 8
				md:    '0.75rem', // 12
				lg:    '1rem', // 16
				xl:    '1.5rem', // 24
				'2xl': '2rem', // 32
				'3xl': '2.5rem', // 40
			},

			// WIP
			width: {
				lg:    '1rem',
				xl:    '1.5rem',
				'2xl': '2rem',
				'3xl': '2.5rem',
			},
			height: {
				lg:    '1rem',
				xl:    '1.5rem',
				'2xl': '2rem',
				'3xl': '2.5rem',
			},

			minHeight: {
				xl:    '1.5rem',
				'2xl': '2rem',
				'3xl': '2.5rem',
			},
		},
	},
	plugins: [
		forms,
	],
});

export default blanduiPlugin;
