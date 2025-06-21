import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: 'article/*.md'
    }),
    notes: defineCollection({
      type: 'page',
      source: 'note/*.md'
    }),
    eassys: defineCollection({
      type: 'page',
      source: 'eassy/*.md'
    })
  }
})
