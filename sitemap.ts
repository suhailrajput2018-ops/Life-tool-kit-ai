import { MetadataRoute } from "next";
import { ALL_TOOLS, CATEGORIES_META } from "@/data/toolsData";
import { BLOG_POSTS } from "@/data/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lifetoolkit.ai";

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/tools",
    "/categories",
    "/blog",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/disclaimer",
    "/cookie-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const toolRoutes: MetadataRoute.Sitemap = ALL_TOOLS.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const catRoutes: MetadataRoute.Sitemap = Object.keys(CATEGORIES_META).map((cat) => ({
    url: `${baseUrl}/categories/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...toolRoutes, ...catRoutes, ...blogRoutes];
}
