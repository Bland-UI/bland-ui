import esbuild from 'rollup-plugin-esbuild';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { rollupPluginUseClient } from 'rollup-plugin-use-client';
import { rimraf } from 'rimraf';
import { execSync } from 'node:child_process';

import {
	glob,
} from 'glob';

const components = await glob('src/components/**/index.ts');

function cleanOutput() {
	return {
		name: 'clean-output',
		async buildStart() {
			await rimraf('dist');
		},
	};
}

function dts() {
	return {
		name: 'dts',
		closeBundle() {
			execSync('tsc -p tsconfig.build.json --outDir dist/types', {
				stdio: 'inherit',
			});
		},
	};
}

export default [
	{
		input: [
			'src/index.ts',
			'src/tailwind.ts',
			...components,
		],
		output: [
			{
				format:          'es',
				dir:             'dist/esm',
				entryFileNames:  '[name].mjs',
				preserveModules: true,
				sourcemap:       true,
			},
			{
				format:          'cjs',
				dir:             'dist/cjs',
				entryFileNames:  '[name].cjs',
				preserveModules: true,
				sourcemap:       true,
			},
		],
		plugins: [
			cleanOutput(),
			peerDepsExternal(),
			esbuild({
				sourceMap: false,
			}),
			rollupPluginUseClient(),
			dts(),
		],
	},
];
