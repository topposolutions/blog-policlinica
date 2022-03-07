// import { client } from '../client'

export const userQuery = (categorySlug) => {
  const query = `
    *[_type == "category" && title == "${categorySlug}"]`

  return query
}
