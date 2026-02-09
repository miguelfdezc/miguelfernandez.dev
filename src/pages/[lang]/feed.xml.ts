import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { useTranslations, type Lang } from "@/i18n";

export function getStaticPaths() {
  return [{ params: { lang: "en" } }, { params: { lang: "es" } }];
}

export async function GET(context: APIContext) {
  const lang = context.params.lang as Lang;
  const t = useTranslations(lang);

  let posts: Awaited<ReturnType<typeof getCollection>> = [];
  try {
    posts = await getCollection("blog", ({ data }) => !data.draft && data.lang === lang);
  } catch {
    // Collection is empty
  }

  return rss({
    title: t("rss.title"),
    description: t("rss.description"),
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/${lang}/blog/${post.id.replace(/^(en|es)\//, "")}/`,
    })),
  });
}
