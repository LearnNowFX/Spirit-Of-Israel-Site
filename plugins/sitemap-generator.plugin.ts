import fs from "fs";

const XML_TAGS = {
  XML_HEADER: `<?xml version="1.0" encoding="UTF-8"?>`,
  URLSET_OPEN: `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  URLSET_CLOSE: `</urlset>`,
  URL_OPEN: `<url>`,
  URL_CLOSE: `</url>`,
  LOC_OPEN: `<loc>`,
  LOC_CLOSE: `</loc>`,
  PRIORITY_OPEN: `<priority>`,
  PRIORITY_CLOSE: `</priority>`,
  LASTMOD_OPEN: `<lastmod>`,
  LASTMOD_CLOSE: `</lastmod>`,
  CHANGEFREQ_OPEN: `<changefreq>`,
  CHANGEFREQ_CLOSE: `</changefreq>`,
} as const;

export class SiteMapGenerator {
  private static generateUrl(domain: string, route: string) {
    const URL = `${domain}/${route}`;
    const PRIORITY = route === "home" ? 1 : 0.8;
    const LAST_MODIFIED = new Date().toISOString();
    const CHANGEFREQ = route === "home" ? "weekly" : "monthly";

    return `${XML_TAGS.URL_OPEN}
            ${XML_TAGS.LOC_OPEN}${URL}${XML_TAGS.LOC_CLOSE}
            ${XML_TAGS.PRIORITY_OPEN}${PRIORITY}${XML_TAGS.PRIORITY_CLOSE}
            ${XML_TAGS.CHANGEFREQ_OPEN}${CHANGEFREQ}${XML_TAGS.CHANGEFREQ_CLOSE}
            ${XML_TAGS.LASTMOD_OPEN}${LAST_MODIFIED}${XML_TAGS.LASTMOD_CLOSE}
            ${XML_TAGS.URL_CLOSE}`;
  }

  private static generateXml(urls: string[]) {
    return `${XML_TAGS.XML_HEADER}
                ${XML_TAGS.URLSET_OPEN}
                ${urls.join("")}
                ${XML_TAGS.URLSET_CLOSE}`;
  }

  public static generate(domain: string | undefined, routes: string[]) {
    if (!domain) {
      return [];
    }

    const urls = routes.map((route) => {
      return this.generateUrl(domain, route);
    });

    const xml = this.generateXml(urls).replace(/\s+/g, "");

    fs.writeFile("./public/sitemap.xml", xml, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log("sitemap.xml generated successfully");
    });

    return [];
  }
}
