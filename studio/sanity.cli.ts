import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ic5fx2e2',
    dataset: 'production'
  },
  studioHost: process.env.SANITY_STUDIO_HOSTNAME!,
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
