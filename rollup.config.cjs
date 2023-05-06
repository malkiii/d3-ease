import { readFileSync } from 'fs';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import * as meta from './package.json';

// Remove the scope from the package name
const packageName = meta.name.replace(/@.+\//g, '');

// Extract copyrights from the LICENSE
const copyright = readFileSync('./LICENSE', 'utf-8')
  .split(/\n/g)
  .filter(line => /^Copyright\s+/.test(line))
  .map(line => line.replace(/^Copyright\s+/, ''))
  .join(', ');

const config = {
  input: 'src/index.ts',
  external: Object.keys(meta.dependencies || {}).filter(key =>
    /^d3-/.test(key)
  ),
  output: {
    file: `dist/${packageName}.js`,
    name: 'd3',
    format: 'umd',
    indent: false,
    extend: true,
    banner: `// ${meta.homepage} v${meta.version} Copyright ${copyright}`,
    globals: Object.assign(
      {},
      ...Object.keys(meta.dependencies || {})
        .filter(key => /^d3-/.test(key))
        .map(key => ({ [key]: 'd3' }))
    )
  },
  plugins: [typescript()]
};

export default [
  config,
  {
    ...config,
    output: {
      ...config.output,
      file: `dist/${packageName}.min.js`
    },
    plugins: [
      ...config.plugins,
      terser({
        output: {
          preamble: config.output.banner
        }
      })
    ]
  }
];
