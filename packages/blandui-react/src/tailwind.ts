import blanduiPlugin from 'blandui';

export function content({ base = './' } = {}) {
	const path = 'node_modules/blandui-react/dist/*.js';

	return `${base}${path}`;
}

export function plugin() {
	return blanduiPlugin;
}
