import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    "",
  ];
  return [
    ...staticPages.map((page) => ({
      url: `https://www.seudominio.com.br/${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.8,
    })),

    // ...posts.map((post: any) => ({
    //   url: `https://www.seudominio.com.br/blog/${post.slug}`,
    //   lastModified: new Date(post.updatedAt),
    //   changeFrequency: "weekly" as const,
    //   priority: 0.7,
    // }))
  ];
}