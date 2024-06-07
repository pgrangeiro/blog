---
layout: ../../layouts/post.astro
title: "How to create a static site using Astro"
pubDate: 2024-06-05
description: "How to create a static site using Astro"
author: "pgrangeiro"
excerpt: "Lately, I have been looking for a new way to writing about tecnology again. I had used a couple of platforms to do that in the past but I kindly prefer to use static content tools. Furthermore, media sharing and content platform services come and go, signatures and licenses can change, and I would like to have the minimum control about my notes. For me, that is the main reason about writing: having a place where I can search, review and rethink ideas without wondering if the content will be lost in the future or will be used for AI training. That said, I wrote this article about how to create static sites using Astro. A tool that I discovered yesterday, and 5 minutes later this new blog was born. Easy as it."
image:
  src:
  alt:
tags: ["software", "development", "astro"]
---
Lately, I have been looking for a new way to writing about tecnology again. I had used a couple of platforms to do that in the past but I kindly prefer to use static content tools. Furthermore, media sharing and content platform services come and go, signatures and licenses can change, and I would like to have the minimum control about my notes. For me, that is the main reason about writing: having a place where I can search, review and rethink ideas without wondering if the content will be lost in the future or will be used for AI training. That said, I wrote this article about how to create static sites using Astro. A tool that I discovered yesterday, and 5 minutes later this new blog was born. Easy as it.

## Astro

<a href="https://astro.build/" target="_blank">Astro</a> is a open source framework for building content-driven websites. It is important to recognize that **Astro can be used to create any kind of static content website**, not just blogs. Its island architecture¹ optimizes content loading and you can use React, Vue, AlpineJS², to create new components.

To start an empty project you have to type:
```bash
npm create astro@latest
```
![image](public/posts/MjAyNDA2MDUyMDEy-1.png)

And complete the prompt steps. After that, you just have to run the application.
```bash
npm run dev
```

The main page will show you instructions how you can customize your website. If you choose the blog template option, it will be like the image bellow. 
![image](public/posts/MjAyNDA2MDUyMDEy-2.png)

### Components
In case of having frontend experience, you can start to customize and create new components. You can use your prefered UI framework to do that or just start coding __astro components__. You might notice the empty project you created there is a folder called `components` and inside that some `*.astro` files. Let's take a look into `src/components/Header.astro`.

```ts title="src/components/Header.astro" showLineNumbers {1-4,10-12}
---
import HeaderLink from './HeaderLink.astro';
import { SITE_TITLE } from '../consts';
---

<header>
	<nav>
		<h2><a href="/">{SITE_TITLE}</a></h2>
		<div class="internal-links">
			<HeaderLink href="/">Home</HeaderLink>
			<HeaderLink href="/blog">Blog</HeaderLink>
			<HeaderLink href="/about">About</HeaderLink>
		</div>
		<!-- HIDING THE CODE FOR EXAMPLE PURPOSES -->
	</nav>
</header>
```

This file contains a astro component. The code between the frontmatter³ (lines 1-4) should contain your **component script**, the necessary javascript to render your component (like imports, variables definition, data loading, etc). The code bellow it (starting on line 10) should have the **template to be rendered**. This code structure will be the same for the following peaces of an atom project.

### Pages
Despite the (astro) components using only `*.astro` extension, pages also can be `*.md`, `*.mdx`, `*.html`, `*.js`, and `*.ts`. Pages are responsible for routing and it should has the main design for a given endpoint on your website. 

```ts title="src/pages/about.astro"
---
import Layout from '../layouts/BlogPost.astro';
---

<Layout
	title="About Me"
	description="Lorem ipsum dolor sit amet"
	pubDate={new Date('August 08 2021')}
	heroImage="/blog-placeholder-about.jpg"
>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo
		viverra. Adipiscing enim eu turpis egestas pretium. Euismod elementum nisi quis eleifend quam
		adipiscing. In hac habitasse platea dictumst vestibulum. Sagittis purus sit amet volutpat. Netus
		et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus
		vestibulum lorem. Varius sit amet mattis vulputate enim. Habitasse platea dictumst quisque
		sagittis. Integer quis auctor elit sed vulputate mi. Dictumst quisque sagittis purus sit amet.
	</p>
</Layout>
```

### Layout

Finally, we have the layout files where the design shared between pages lives. Usually, layout files should has main components or elements (like the `<html>` tag). 

```ts title="src/layouts/BlogPost.astro"
---
import type { CollectionEntry } from 'astro:content';
import BaseHead from '../components/BaseHead.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import FormattedDate from '../components/FormattedDate.astro';

type Props = CollectionEntry<'blog'>['data'];

const { title, description, pubDate, updatedDate, heroImage } = Astro.props;
---

<html lang="en">
	<head>
		<BaseHead title={title} description={description} />
		<style>
      <!-- HIDING THE CSS FOR EXAMPLE PURPOSES -->
    </style>
  <body>
    <!-- HIDING THE CODE FOR EXAMPLE PURPOSES -->
  </body>
</html>
```

### Themes

Many static content frameworks have a strong community of theme creators, and Astro isn't different. If you just want test an idea and deploy it take a look on the <a href="https://astro.build/themes/" target="_blank">Astro theme explorer</a>.


## Conclusion

Astro seems to be a modern solution for content-driven websites. The possibility of using consolidated UI frameworks help projects that already have knowledgeable teams. It also helps if you want to migrate an existent project, where you can move piece by piece and adapt your astro project to work with them. Dealing with `*.js`, `*.jsx`, `*.ts`, also enable us to introduce unit tests on our content-driven project. Finally, the island architecture which help us to delivery our content in a performatic way sets a new standard line for the next content-driven solution.


---
¹ Island architecture improves frontend performance strategically hydrateting the entire page in small placeholders that will be loaded as the client needs it. You can find more about it in <a href="https://docs.astro.build/en/concepts/islands/" target="_blank">this article</a> from Astro itself or from <a href="https://www.youtube.com/watch?v=SICd8tTEqvs" target="_blank">Nate Moore's talk in Vite Conf 2022</a>.

² Astro aims to be UI-Agnostic. For now, it officially supports React, Preact, Svelte, Vue, SolidJS, AlpineJS and Lit. Although it is open for community colaboration and you can have more insights <a href="https://docs.astro.build/en/guides/framework-components/" target="_blank">here</a>.

³ The area between these two code fences `---` is called __frontmatter__. It is a common area for definition in others static content frameworks.