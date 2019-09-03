import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
export default {
    input: './src/index.js',
    output: {
        file: './dist/index.js',
        format: 'umd',
        name:'E'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        commonjs(),
        terser()
    ]
};
