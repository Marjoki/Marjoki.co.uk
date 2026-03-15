import { flavourProducts } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/shop",
    "/discovery-pack",
    "/how-it-works",
    "/for-dentists",
    "/about",
    "/faq",
    "/contact",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
    })),
    ...flavourProducts.map((product) => ({
      url: `${siteConfig.url}/products/${product.slug}`,
      lastModified: new Date(),
    })),
  ];
}
