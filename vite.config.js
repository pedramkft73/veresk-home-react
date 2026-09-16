import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import postcss from 'postcss'

const wordpressScope = '#veresk-react-home'

const scopeSelector = (selector) => {
  const trimmedSelector = selector.trim()

  if (!trimmedSelector || trimmedSelector.startsWith(wordpressScope)) {
    return trimmedSelector
  }

  if (/^(?:html\s+body|body\s+html)(?=$|[\s.#:[>+~])/.test(trimmedSelector)) {
    return trimmedSelector.replace(
      /^(?:html\s+body|body\s+html)(?=$|[\s.#:[>+~])/,
      wordpressScope,
    )
  }

  if (/^(?:html|body|:root)(?=$|[\s.#:[>+~])/.test(trimmedSelector)) {
    return trimmedSelector.replace(
      /^(?:html|body|:root)(?=$|[\s.#:[>+~])/,
      wordpressScope,
    )
  }

  return `${wordpressScope} ${trimmedSelector}`
}

const createWordPressScopedCss = () => ({
  name: 'create-wordpress-scoped-css',
  apply: 'build',
  enforce: 'post',
  async generateBundle(_, bundle) {
    const cssAssets = Object.values(bundle).filter(
      (output) => output.type === 'asset' && output.fileName.endsWith('.css'),
    )

    if (cssAssets.length !== 1 || typeof cssAssets[0].source !== 'string') {
      throw new Error('Expected one generated CSS asset for the WordPress homepage.')
    }

    const result = await postcss({
      postcssPlugin: 'scope-veresk-react-home',
      Rule(rule) {
        let parent = rule.parent

        while (parent) {
          if (
            parent.type === 'atrule'
            && parent.name.toLowerCase().endsWith('keyframes')
          ) {
            return
          }

          parent = parent.parent
        }

        rule.selectors = rule.selectors.map(scopeSelector)
      },
    }).process(cssAssets[0].source, { from: undefined })

    this.emitFile({
      type: 'asset',
      fileName: 'assets/veresk-react-home.css',
      source: result.css,
    })
  },
})

const rewriteLegacyPublicAssetUrls = (base) => ({
  name: 'rewrite-legacy-public-asset-urls',
  apply: 'build',
  generateBundle(_, bundle) {
    const rootAssetPattern = /(^|[^a-zA-Z0-9_-])\/assets\//g
    const rewrite = (source) => source.replace(
      rootAssetPattern,
      `$1${base}assets/`,
    )

    Object.values(bundle).forEach((output) => {
      if (output.type === 'chunk') {
        output.code = rewrite(output.code)
      } else if (typeof output.source === 'string') {
        output.source = rewrite(output.source)
      }
    })
  },
})

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build'
  const env = loadEnv(mode, '.', '')
  const wordpressBuildBase = env.VITE_WORDPRESS_BASE || '/veresk-home/'

  if (isBuild && !wordpressBuildBase.startsWith('/')) {
    throw new Error('VITE_WORDPRESS_BASE must be a root-relative URL beginning with /.')
  }

  const normalizedBuildBase = wordpressBuildBase.endsWith('/')
    ? wordpressBuildBase
    : `${wordpressBuildBase}/`

  return {
    base: isBuild ? normalizedBuildBase : '/',
    server: {
      proxy: {
        '/wp-json/generateblocks-pro': {
          target: 'https://veresk.com.au',
          changeOrigin: true,
          secure: true,
          headers: {
            Origin: 'https://veresk.com.au',
            Referer: 'https://veresk.com.au/contact/',
          },
        },
      },
    },
    plugins: [
      react(),
      rewriteLegacyPublicAssetUrls(normalizedBuildBase),
      createWordPressScopedCss(),
    ],
    build: {
      manifest: true,
    },
  }
})
