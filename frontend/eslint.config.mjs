// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  ignores: ['/backend'],
  rules: {
    'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
  }
}
  // Your custom configs here
)
