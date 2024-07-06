import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

export default async (req, res) => {
  const links = [
    { url: '/', changefreq: 'daily', priority: 0.7 }

    // Add more URLs here
  ]

  const stream = new SitemapStream({ hostname: 'https://fanavaran.ca' })

  res.writeHead(200, {
    'Content-Type': 'application/xml'
  })

  const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString())

  res.end(xmlString)
}
