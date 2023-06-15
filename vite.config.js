import { entry, outfile } from './package.json'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue2'

export default defineConfig(({ mode }) => {
  var resolveAlias = {}
  const dev = mode === 'development'

  if (dev)
    resolveAlias = {
      '@cailiao/watermark': resolve(__dirname, '../../dist/watermark.esm.browser.js')
    }

  return {
    plugins: [vue()],
    build: {
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: resolve(__dirname, entry),
        // the proper extensions will be added
        fileName: format => `${outfile}.${format === 'es' ? 'esm' : format}.browser.min.js`,
        formats: ['es', 'cjs']
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue'
          }
        },
        plugins: [cssInjectedByJsPlugin()]
      }
    },
    resolve: {
      alias: resolveAlias
    }
  }
})
