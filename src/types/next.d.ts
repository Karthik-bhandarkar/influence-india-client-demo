export {}

declare module "next" {
  export namespace MetadataRoute {
    export type Sitemap = Array<{
      url: string
      lastModified?: string | Date
      changeFrequency?:
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never"
      priority?: number
    }>

    export interface Robots {
      rules:
        | {
            userAgent?: string | string[]
            allow?: string | string[]
            disallow?: string | string[]
            crawlDelay?: number
          }
        | Array<{
            userAgent?: string | string[]
            allow?: string | string[]
            disallow?: string | string[]
            crawlDelay?: number
          }>
      sitemap?: string | string[]
      host?: string
    }
  }

  export interface Metadata {
    metadataBase?: URL | null
    title?: string | { default: string; template: string }
    description?: string | null
    keywords?: string[]
    alternates?: {
      canonical?: string
      languages?: Record<string, string>
    }
    openGraph?: {
      title?: string
      description?: string
      url?: string
      siteName?: string
      locale?: string
      type?: string
      images?: Array<{ url: string; width?: number; height?: number; alt?: string }>
      [key: string]: any
    }
    twitter?: {
      card?: string
      title?: string
      description?: string
      images?: string[]
      [key: string]: any
    }
    other?: Record<string, string | number | (string | number)[]>
    [key: string]: any
  }
}
