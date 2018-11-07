import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/wrapper.js',
  output: {
    name: 'BackgroundVideo',
    exports: 'named'
  },
  plugins: [
    vue({
      css: true,
      compileTemplate: true
    }),
    buble(),
    terser()
  ]
}