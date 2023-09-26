import {addVitePlugin} from '@nuxt/kit'

export default defineNuxtConfig({
  hooks: {
    listen: async (server, listener) => {
      addVitePlugin({
        name: 'live-designer',
        config: (config, {command, mode}) => {
          return config
        },
      })
    },
  },
})
