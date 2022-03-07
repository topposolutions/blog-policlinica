import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from 'next-sanity'



export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
  apiVersion: '2021-03-25',
  useCdn: process.env.NODE_ENV === 'production',
}

//set up the client for fetching data in getProps page functions
export const sanityClient = createClient(config)

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

//Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)
