// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content"
// Define a `type` and `schema` for each collection

const sharedSchema = {
  title: z.string(),
  description: z.string(),
  started: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  video: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  technologies: z.array(z.string()),
}

const projectsSchema = z.object({
  ...sharedSchema,
  links: z.array(z.object({ link: z.string(), icon: z.string() })),
})
const projectsCollection = defineCollection({
  type: "content",
  schema: projectsSchema,
})

const expierenceSchema = z.object({ ...sharedSchema, ended: z.string(), link: z.string() })
const expierenceCollection = defineCollection({
  type: "content",
  schema: expierenceSchema,
})

export const collections = {
  projects: projectsCollection,
  experience: expierenceCollection,
}
export type ProjectEntry = z.infer<typeof projectsSchema>
export type ExperienceEntry = z.infer<typeof expierenceSchema>
