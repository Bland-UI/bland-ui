import esbuild from 'rollup-plugin-esbuild';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { rimraf } from 'rimraf';
import { execSync } from 'node:child_process';

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
			dts(),
		],
	},
];
