import rss, {pagesGlobToRssItems} from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Paula Grangeiro',
    description: 'Sharing ideas about software development, leadership and how to survive late captalism.',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./posts/*.{md,mdx}'),
    ),
    stylesheet: './rss/styles.xsl',
    customData: `<language>en-us</language>`,
  });
}