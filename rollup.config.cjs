import { readFileSync } from 'fs';
import * as meta from './package.json';
import { terser } from 'rollup-plugin-terser';
import deletePlugin from 'rollup-plugin-delete';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';

// Remove the scope from the package name
const name = meta.name.replace(/@.+\//g, '');

// Extract copyrights from the LICENSE
const copyright = readFileSync('./LICENSE', 'utf-8')
  .split(/\n/g)
  .filter(line => /^Copyright\s+/.test(line))
  .map(line => line.replace(/^Copyright\s+/, ''))
  .join(', ');

const banner = `// ${meta.homepage} v${meta.version} Copyright ${copyright}`;

const globals = Object.assign(
  {},
  ...Object.keys(meta.dependencies || {})
    .filter(key => /^d3-/.test(key))
    .map(key => ({ [key]: 'd3' }))
);

const bundle = config => ({
  ...config,
  input: 'src/index.ts',
  external: Object.keys(meta.dependencies || {}).filter(key => /^d3-/.test(key))
});

export default [
  bundle({
    plugins: [typescript()],
    output: [
      {
        name,
        file: `dist/${name}.js`,
        format: 'es',
        banner,
        globals
      },
      {
        name,
        file: `dist/${name}.min.js`,
        format: 'umd',
        globals,
        plugins: [terser({ output: { preamble: banner } })]
      }
    ]
  }),
  bundle({
    plugins: [dts.default(), deletePlugin({ targets: 'dist/!(index).d.ts' })],
    output: {
      file: `dist/index.d.ts`,
      format: 'es'
    }
  })
];
