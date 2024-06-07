---
layout: ../../layouts/post.astro
title: "How to create a static site using Astro"
pubDate: 2024-06-05
description: "How to create a static site using Astro"
author: "pgrangeiro"
excerpt: "Lately, I have been looking for a new way to writing about technology again. I had used a couple of platforms to do that in the past but I kindly prefer to use static content tools. Furthermore, media sharing and content platform services come and go, signatures and licenses can change, and I would like to have the minimum control about my notes. For me, that is the main reason about writing: having a place where I can search, review and rethink ideas without wondering if the content will be lost in the future or will be used for AI training. That said, I wrote this article about how to create static sites using Astro. A tool that I discovered yesterday, and 5 minutes later this new blog was born. Easy as it."
image:
  src:
  alt:
tags: ["software", "development", "astro"]
---
Lately, I have been looking for a new way to writing about technology again. I had used a couple of platforms to do that in the past but I kindly prefer to use static content tools. Furthermore, media sharing and content platform services come and go, signatures and licenses can change, and I would like to have the minimum control about my notes. For me, that is the main reason about writing: having a place where I can search, review and rethink ideas without wondering if the content will be lost in the future or will be used for AI training. That said, I wrote this article about how to create static sites using Astro. A tool that I discovered yesterday, and 5 minutes later this new blog was born. Easy as it.

## Astro

<a href="https://astro.build/" target="_blank">Astro</a> is a open source framework for building content-driven websites. It is important to recognize that **Astro can be used to create any kind of static content website**, not just blogs. Its island architecture¹ optimizes content loading and you can use React, Vue, AlpineJS², to create new components.

To start an empty project you have to type the command bellow and complete the prompt steps. It will create a base project with minimum needed to run locally. Astro has a strong development community which is responsible for sharing and maintaining many astro themes and integrations³ that could help boost your project.
```bash
npm create astro@latest
```

## Framework structure

Usually, the framework uses `.astro` extension for the files that are the foundational piece of your project. In spite of that, as mentioned before, you can use your preferred UI framework which also enables you to use `.js`, `.ts`, `.html`, (and even more) extensions. Content files usually have `.md` or `.mdx` extension like many content static generators. Everything has interoperability enough and no extra configuration is needed in case you won't use the `.astro` files.

<a href="https://docs.astro.build/en/guides/framework-components/#using-framework-components" target="_blank">How to create components using your preferred framework</a>

Astro projects are organized between layouts, pages and components. They are the reusable parts of your project and they work together to provide your content. Layouts comprehends the base design of the project, with main tags like `<html>` and base styling. Pages are responsible for routing and usually import a layout or implement new styles. Components can be used everywhere.

![image](public/posts/MjAyNDA2MDUyMDEy-1.png)

<a href="https://docs.astro.build/en/basics/project-structure/" target="_blank">Astro project structure documentation</a>

<a href="https://docs.astro.build/en/basics/astro-syntax/" target="_blank">Astro template syntax</a>


## Conclusion

Astro seems to be a modern solution for content-driven websites. The possibility of using consolidated UI frameworks helps projects that already have knowledgeable teams. It also supports you migrating an existent project, where you can move piece by piece and adapt your astro project to work with them. Dealing with `.js`, `.jsx`, `.ts`, also enable us to introduce unit tests on our content-driven project. Finally, the island architecture which helps us to delivery our content in a performative way sets a new standard line for the next content-driven solution.


---
¹ Island architecture improves frontend performance strategically hydrating the entire page in small placeholders that will be loaded as the client needs it. You can find more about it in <a href="https://docs.astro.build/en/concepts/islands/" target="_blank">this article</a> from Astro itself or from <a href="https://www.youtube.com/watch?v=SICd8tTEqvs" target="_blank">Nate Moore's talk in Vite Conf 2022</a>.

² Astro aims to be UI-Agnostic. For now, it officially supports React, Preact, Svelte, Vue, SolidJS, AlpineJS and Lit. Although it is open for community collaboration and you can have more insights <a href="https://docs.astro.build/en/guides/framework-components/" target="_blank">here</a>.

³ Integrations are libraries or frameworks that can be added on your project to extend Astro features. Know more about it <a href="https://docs.astro.build/en/guides/integrations-guide/" target="_blank">reading the Astro documentation</a> or navigating on <a href="https://astro.build/integrations/" target="_blank">Astro integrations page</a>.