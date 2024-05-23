import units from './units';
import convert from '../utils/convert';

export default {
	null: convert(units.null),

	'3xs': convert(units['3xs']),
	'2xs': convert(units['2xs']),
	xs:    convert(units.xs),

	sm: convert(units.sm),

	md:  convert(units.md),
	xmd: convert(units.xmd),

	lg: convert(units.lg),

	xl:    convert(units.xl),
	'2xl': convert(units['2xl']),
	'3xl': convert(units['3xl']),
	'4xl': convert(units['4xl']),
	'5xl': convert(units['5xl']),
	'6xl': convert(units['6xl']),
	'7xl': convert(units['7xl']),
	'8xl': convert(units['8xl']),

	rd: convert(units.rd),
};
