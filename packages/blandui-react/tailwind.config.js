const { join } = require("node:path");


/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [join(__dirname, "./src/**/*.{ts,tsx}")],
	safelist: [
		{ pattern: /(bg)-./ }
	],
	theme: {
		extend: {
			colors: {
				// Brand colors
				carbon: {
					0: '#FFF',
					50: '#f2f2f2',
					100: '#e6e6e6',
					200: '#cccccc',
					300: '#b3b3b3',
					400: '#999999',
					500: '#808080',
					600: '#666666',
					700: '#4d4d4d',
					800: '#333333',
					900: '#191919',
					950: '#0d0d0d',
					1000: '#000000'
				},
				gray: {
					0: '#ffffff',
					50: '#f2f2f2',
					100: '#e6e6e6',
					200: '#cccccc',
					300: '#b3b3b3',
					400: '#999999',
					500: '#808080',
					600: '#666666',
					700: '#4d4d4d',
					800: '#333333',
					900: '#191919',
					950: '#0d0d0d',
					1000: '#000000'
				},

				// Functional colors
				amber: {
					0: '#ffffff',
					50: '#fffbdb',
					100: '#fff6b5',
					200: '#ffe273',
					300: '#ffd036',
					400: '#ffbf00',
					500: '#e0a800',
					600: '#c29100',
					700: '#a37a00',
					800: '#846300',
					900: '#664c00',
					1000: '#473500',
					1100: '#281e00',
					1150: '#140f00',
					1200: '#000000',
				},
				green: {
					0: '#ffffff',
					50: '#d5fed5',
					100: '#abfdab',
					200: '#6af26a',
					300: '#30e630',
					400: '#00db00',
					500: '#00c000',
					600: '#00a600',
					700: '#008b00',
					800: '#007000',
					900: '#005600',
					1000: '#003b00',
					1100: '#002000',
					1150: '#001000',
					1200: '#000000',
				},
				red: {
					0: '#ffffff',
					50: '#ffe4e4',
					100: '#ffc7c7',
					200: '#ff8d8d',
					300: '#ff5858',
					400: '#ff2929',
					500: '#ff0000',
					600: '#dc0000',
					700: '#ba0000',
					800: '#970000',
					900: '#750000',
					1000: '#520000',
					1100: '#300000',
					1150: '#180000',
					1200: '#000000',
				},
			},

			backgroundColor: (theme) => ({
				// BRAND
				'btn-brand-primary-rest': theme('colors.carbon.1000'),
				'btn-brand-primary-hover': theme('colors.carbon.800'),
				'btn-brand-primary-pressed': theme('colors.carbon.900'),
				'btn-brand-primary-focused': theme('colors.carbon.1000'),
				'btn-brand-primary-disabled': theme('colors.gray.300'),

				'btn-brand-secondary-rest': theme('colors.gray.100'),
				'btn-brand-secondary-hover': theme('colors.gray.200'),
				'btn-brand-secondary-pressed': theme('colors.gray.400'),
				'btn-brand-secondary-focused': theme('colors.gray.100'),
				'btn-brand-secondary-disabled': theme('colors.gray.300'),

				'btn-brand-ghost-rest': 'transparent',
				'btn-brand-ghost-hover': theme('colors.gray.200'),
				'btn-brand-ghost-pressed': theme('colors.gray.400'),
				'btn-brand-ghost-focused': 'transparent',
				'btn-brand-ghost-disabled': 'transparent',

				'btn-brand-stroke-rest': 'transparent',
				'btn-brand-stroke-hover': theme('colors.gray.200'),
				'btn-brand-stroke-pressed': theme('colors.gray.400'),
				'btn-brand-stroke-focused': 'transparent',
				'btn-brand-stroke-disabled': 'transparent',

				// SUCCESS
				'btn-success-primary-rest': theme('colors.green.700'),
				'btn-success-primary-hover': theme('colors.green.800'),
				'btn-success-primary-pressed': theme('colors.green.900'),
				'btn-success-primary-focused': theme('colors.green.700'),
				'btn-success-primary-disabled': theme('colors.gray.300'),

				'btn-success-secondary-rest': theme('colors.green.50'),
				'btn-success-secondary-hover': theme('colors.green.200'),
				'btn-success-secondary-pressed': theme('colors.green.400'),
				'btn-success-secondary-focused': theme('colors.green.50'),
				'btn-success-secondary-disabled': theme('colors.gray.300'),

				'btn-success-ghost-rest': 'transparent',
				'btn-success-ghost-hover': theme('colors.green.200'),
				'btn-success-ghost-pressed': theme('colors.green.400'),
				'btn-success-ghost-focused': 'transparent',
				'btn-success-ghost-disabled': 'transparent',

				'btn-success-stroke-rest': 'transparent',
				'btn-success-stroke-hover': theme('colors.green.200'),
				'btn-success-stroke-pressed': theme('colors.green.400'),
				'btn-success-stroke-focused': 'transparent',
				'btn-success-stroke-disabled': 'transparent',

				// DANGER
				'btn-danger-primary-rest': theme('colors.red.600'),
				'btn-danger-primary-hover': theme('colors.red.800'),
				'btn-danger-primary-pressed': theme('colors.red.900'),
				'btn-danger-primary-focused': theme('colors.red.700'),
				'btn-danger-primary-disabled': theme('colors.gray.300'),

				'btn-danger-secondary-rest': theme('colors.red.50'),
				'btn-danger-secondary-hover': theme('colors.red.200'),
				'btn-danger-secondary-pressed': theme('colors.red.400'),
				'btn-danger-secondary-focused': theme('colors.red.50'),
				'btn-danger-secondary-disabled': theme('colors.gray.300'),

				'btn-danger-ghost-rest': 'transparent',
				'btn-danger-ghost-hover': theme('colors.red.200'),
				'btn-danger-ghost-pressed': theme('colors.red.400'),
				'btn-danger-ghost-focused': 'transparent',
				'btn-danger-ghost-disabled': 'transparent',

				'btn-danger-stroke-rest': 'transparent',
				'btn-danger-stroke-hover': theme('colors.red.200'),
				'btn-danger-stroke-pressed': theme('colors.red.400'),
				'btn-danger-stroke-focused': 'transparent',
				'btn-danger-stroke-disabled': 'transparent',

				// WARNING
				'btn-warning-primary-rest': theme('colors.amber.700'),
				'btn-warning-primary-hover': theme('colors.amber.800'),
				'btn-warning-primary-pressed': theme('colors.amber.900'),
				'btn-warning-primary-focused': theme('colors.amber.700'),
				'btn-warning-primary-disabled': theme('colors.gray.300'),

				'btn-warning-secondary-rest': theme('colors.amber.100'),
				'btn-warning-secondary-hover': theme('colors.amber.200'),
				'btn-warning-secondary-pressed': theme('colors.amber.400'),
				'btn-warning-secondary-focused': theme('colors.amber.100'),
				'btn-warning-secondary-disabled': theme('colors.gray.300'),

				'btn-warning-ghost-rest': 'transparent',
				'btn-warning-ghost-hover': theme('colors.amber.200'),
				'btn-warning-ghost-pressed': theme('colors.amber.400'),
				'btn-warning-ghost-focused': 'transparent',
				'btn-warning-ghost-disabled': 'transparent',

				'btn-warning-stroke-rest': 'transparent',
				'btn-warning-stroke-hover': theme('colors.amber.200'),
				'btn-warning-stroke-pressed': theme('colors.amber.400'),
				'btn-warning-stroke-focused': 'transparent',
				'btn-warning-stroke-disabled': 'transparent',
			}),

			borderColor: (theme) => ({
				'subtle': theme('colors.carbon100'),

				'bold': theme('colors.carbon200'),
				'focused': theme('colors.carbon300'),

				'success': theme('colors.green.500'),
				'success-focused': theme('colors.green.200'),

				'danger': theme('colors.red.500'),
				'danger-focused': theme('colors.red.100'),

				'warning': theme('colors.amber.500'),
				'warning-focused': theme('colors.amber.200'),
			}),
			textColor: (theme) => ({
				'inverse': theme('colors.gray.0'),
				'bold': theme('colors.carbon.1000'),
				'subtle': theme('colors.gray.500'),
				'minimal': theme('colors.carbon.200'),
				'success': theme('colors.green.600'),
				'danger': theme('colors.red.600'),
				'warning': theme('colors.amber.700'),
			}),
			borderRadius: {
				xs: '0.125rem',
				sm: '0.25rem',
				md: '0.5rem',
				lg: '1rem',
				xl: '1.5rem',
			},
			gap: {
				xs: '0.125rem',
				sm: '0.25rem',
				md: '0.5rem',
				lg: '1rem',
				xl: '1.5rem',
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
				xs: '0.25rem', // 4
				sm: '0.5rem', // 8
				md: '0.75rem', // 12
				lg: '1rem', // 16
				xl: '1.5rem', // 24
				'2xl': '2rem', // 32
				'3xl': '2.5rem', // 40
			},
		},
	},
	plugins: [],
};
