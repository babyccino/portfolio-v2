import { ArchivePost } from "@/types/substack"

const substackUrl = import.meta.env.SUBSTACK_URL

export async function getPosts(offset = 0, limit = 50): Promise<ArchivePost[]> {
  const data = await fetch(`${substackUrl}api/v1/archive?sort=new&offset=${offset}&limit=${limit}`)
  return data.json()
}

async function _getAllPosts(
  offset: number = 0,
  totalPosts: ArchivePost[] = [],
): Promise<ArchivePost[]> {
  const newPosts = await getPosts(offset, 50)
  const newTotalPosts = totalPosts.concat(newPosts)
  if (newPosts.length !== 50) return newTotalPosts
  return _getAllPosts(offset + 50, newTotalPosts)
}

export function getAllPosts(): Promise<ArchivePost[]> {
  return _getAllPosts()
}
