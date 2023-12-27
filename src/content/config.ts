// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content"
// Define a `type` and `schema` for each collection

const projectsSchema = z.object({
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
  schema: projectsSchema,
})

const expierenceSchema = z.object({
  title: z.string(),
  description: z.string(),
  started: z.string(),
  ended: z.string(),
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
const expierenceCollection = defineCollection({
  type: "content",
  schema: expierenceSchema,
})

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
})
const blogCollection = defineCollection({
  type: "content",
  schema: blogSchema,
})

export const collections = {
  projects: projectsCollection,
  expierence: expierenceCollection,
  blog: blogCollection,
}
export type ProjectEntry = z.infer<typeof projectsSchema>
export type ExperienceEntry = z.infer<typeof expierenceSchema>
export type BlogEntry = z.infer<typeof blogSchema>
