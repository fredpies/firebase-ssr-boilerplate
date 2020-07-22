import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import livereload from "rollup-plugin-livereload";
import serve from 'rollup-plugin-serve';

const production = process.env.NODE_ENV === 'production';
const outputDir = production ? '../../static/js' : 'public';

export default {
	input: 'src/main.js',
	output: {
		sourcemap: !production,
		format: 'es',
		dir: outputDir,
		chunkFileNames: '[name].component.js'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
            emitCss: false,
            customElement: true,
            preprocess: sveltePreprocess({
				sourceMap: false,
				postcss: {
					plugins: [
						require('tailwindcss')('../../tailwind.config.js'),
						require('autoprefixer'),
					]
				}
			})
		}),
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		production && terser(),
		!production && livereload({
			watch: 'public'
		}),
		!production && serve('public')

	]
};
