import type { MetadataRoute } from "next"

const baseUrl = "https://opuswebs.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/rubros", "/proceso", "/portfolio", "/planes", "/faq"]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))
}
