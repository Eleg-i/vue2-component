import { build } from 'vite'
import packageJson from '../package.json' assert { type: 'json' }

const root = process.cwd(),
      { outfile } = packageJson

/**
 * 构建
 */
async function main() {
  // 执行构建
  await build({
    root,
    mode: 'development',
    build: {
      watch: true
    }
  })

  build({
    root,
    mode: 'development',
    build: {
      emptyOutDir: false,
      lib: {
        fileName: format => `${outfile}.${format === 'es' ? 'esm' : format}.browser.js`
      },
      minify: false,
      watch: true
    }
  })
}

main()
