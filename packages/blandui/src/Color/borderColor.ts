import colors from './colors';

export default {
	bold:    colors.gray[200],
	subtle:  colors.gray[100],
	minimal: colors.gray[50],

	focused: colors.carbon[300],
	hover:   colors.carbon[100],

	success:           colors.green[500],
	'success-focused': colors.green[200],

	danger:           colors.red[500],
	'danger-focused': colors.red[100],

	warning:           colors.amber[500],
	'warning-focused': colors.amber[200],

	brand:   colors.carbon[1000],
	inverse: colors.gray[0],

	// BUTTON - BRAND
	'btn-brand-primary-focused':   colors.carbon[300],
	'btn-brand-secondary-focused': colors.carbon[300],
	'btn-brand-ghost-focused':     colors.carbon[300],

	'btn-brand-stroke-rest':     colors.carbon[100],
	'btn-brand-stroke-focused':  colors.carbon[300],
	'btn-brand-stroke-disabled': colors.gray[100],

	// BUTTON - SUCCESS
	'btn-success-primary-focused':   colors.green[200],
	'btn-success-secondary-focused': colors.green[200],
	'btn-success-ghost-focused':     colors.green[200],

	'btn-success-stroke-rest':     colors.green[500],
	'btn-success-stroke-focused':  colors.green[200],
	'btn-success-stroke-disabled': colors.gray[100],

	// BUTTON - DANGER
	'btn-danger-primary-focused':   colors.red[100],
	'btn-danger-secondary-focused': colors.red[100],
	'btn-danger-ghost-focused':     colors.red[100],

	'btn-danger-stroke-rest':     colors.red[500],
	'btn-danger-stroke-focused':  colors.red[100],
	'btn-danger-stroke-disabled': colors.gray[100],

	// BUTTON - WARNING
	'btn-warning-primary-focused':   colors.amber[200],
	'btn-warning-secondary-focused': colors.amber[200],
	'btn-warning-ghost-focused':     colors.amber[200],

	'btn-warning-stroke-rest':     colors.amber[500],
	'btn-warning-stroke-focused':  colors.amber[200],
	'btn-warning-stroke-disabled': colors.gray[100],

	// RADIO BUTTON
	'radio-btn':          colors.gray[200],
	'radio-btn-disabled': colors.gray[100],

	'radio-btn-checked': colors.gray[0],
	'radio-btn-hover':   colors.carbon[100],
	'radio-btn-focused': colors.carbon[300],
};
