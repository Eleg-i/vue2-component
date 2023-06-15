import { build } from 'vite'
import packageJson from '../package.json' assert { type: 'json' }

const root = process.cwd(),
      { outfile } = packageJson

/**
 * 构建
 */
async function main() {
  // 执行构建
  build({
    root
  })

  build({
    root,
    build: {
      emptyOutDir: false,
      lib: {
        fileName: format => `${outfile}.${format === 'es' ? 'esm' : format}.browser.js`
      },
      minify: false
    }
  })
}

main()
