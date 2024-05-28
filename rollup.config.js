import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
    input: "src/index.ts",
    output: [
        {
            file: 'dist/bundle-util.cjs.js',
			format: 'cjs',
            sourcemap: true
        },
        {
            file: 'dist/bundle-util.es.js',
			format: 'es',
            sourcemap: true
        },
        {
            file: 'dist/bundle-util.umd.js',
			format: 'umd',
            sourcemap: true
        }
    ],
    plugins: [typescript(),terser()]
}