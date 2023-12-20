// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content"
// Define a `type` and `schema` for each collection

const schema = z.object({
  title: z.string(),
  description: z.string(),
  mainImage: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  mainVideo: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  otherImages: z.array(
    z.object({
      url: z.string(),
      alt: z.string(),
    }),
  ),
  technologies: z.array(z.string()),
  links: z.array(z.object({ link: z.string(), icon: z.string() })),
})
const projectsCollection = defineCollection({
  type: "content",
  schema,
})
// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsCollection,
}
export type ProjectEntry = z.infer<typeof schema>
