import { revalidate } from '@teleporthq/cms-mappers/contentful/revalidate'

export default async function handler(req, res) {
  try {
    if (process.env.WEBHOOK_SECRET !== req.query['WEBHOOK_SECRET']) {
      return res.status(401).json({
        revalidated: false,
      })
    }
    await revalidate(req, async (data, contentType) => {
      switch (contentType) {
        case 'category': {
          try {
            await res.revalidate(`/categories/${data.id}`)
            await res.revalidate(`/categories`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        case 'author': {
          try {
            await res.revalidate(`/authors/${data.id}`)
            await res.revalidate(`/authors`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        case 'tag': {
          try {
            await res.revalidate(`/tags`)
            await res.revalidate(`/tags/${data.id}`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        case 'blogPost': {
          try {
            await res.revalidate(`/blog/${data.slug}`)
            await res.revalidate(`/blog`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        default:
          throw new Error('Invalid content typ, received', contentType)
      }
    })
    return res.status(200).json({
      revalidated: true,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      revalidated: false,
    })
  }
}
