import convert from '../utils/convert';
import units from './units';

export default {
	sm: convert(units['3xs']),
	md: convert(units['2xs']),
	lg: convert(units.xs),
	xl: convert(units.sm),
};
