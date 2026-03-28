import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },
    sitemap: "https://celldoctor.co.za/sitemap.xml",
    host: "https://celldoctor.co.za",
  };
}
