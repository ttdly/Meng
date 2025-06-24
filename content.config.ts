import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: 'article/*.md',
      schema: z.object({
        create_at: z.date(),
        update_at: z.date(),
        labels: z.array(z.string()),
        locked: z.boolean(),
      })
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
