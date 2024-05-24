import blanduiPlugin from 'blandui';

interface Content {
	base?: string;
  }

export function content({ base = './' }: Content = {}) {
	const path = 'node_modules/blandui-react/dist/esm/**/*.mjs';

	return `${base}${path}`;
}

export function plugin() {
	return blanduiPlugin;
}
