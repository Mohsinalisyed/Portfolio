import type { MetadataRoute } from "next";
import { featuredProjects } from "@/data/projects";
import { siteConfig } from "@/lib/site-config";

const baseUrl = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = featuredProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
