import units from './units';
import convert from '../utils/convert';

export default {
	null: convert(units.null),

	'2xs': convert(units.xs),
	xs:    convert(units.sm),

	sm: convert(units.md),

	md: convert(units.xmd),

	lg: convert(units.lg),

	xl:    convert(units.xl),
	'2xl': convert(units['2xl']),
	'3xl': convert(units['3xl']),
};
