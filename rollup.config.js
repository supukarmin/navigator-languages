import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    name: 'navigator-languages',
    file: 'dist/index.js',
    format: 'umd',
  },
  plugins: [
    commonjs(),
    uglify(),
  ],
};
