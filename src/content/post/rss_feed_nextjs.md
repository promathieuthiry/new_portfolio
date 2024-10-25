---
layout: ../../layouts/post.astro
title: Creating an RSS Feed in your Next.js Project
description: How to create an RSS Feed in your Next.js Project
date: 2023-06-24
tags: ["nextjs", "rss", "tutorial"]
cover: "/assets/images/posts/rssfeed_cover.jpeg"
---

![Blog article cover](/assets/images/posts/rssfeed_cover.jpeg)

## Keep Your Audience Informed

Hey there! Are you looking to keep your users up-to-date with the latest content from your Next.js project? One powerful way to achieve this is by implementing an RSS feed. In this blog post, we'll explore how to create an RSS feed in your Next.js project using the magic of the [Rss library](https://github.com/dylang/node-rss). By the end, you'll have a solid understanding of how to provide your audience with an easy and convenient way to stay informed.

### Why RSS Feeds Matter

Before we jump into the technical details, let's quickly discuss why RSS feeds are still relevant in today's digital landscape. RSS (Really Simple Syndication) allows users to subscribe to content from websites they love, receiving updates in a centralized place without the need to constantly visit each site separately. It's an efficient way for your audience to stay engaged and informed, ensuring they never miss your latest blog posts, news articles, or any other valuable content you provide.

### Setting Up the Next.js Project

To begin, let's create a new `Next.js` project using the Blog Starter example. Open your terminal and run the following command:

```bash
npx create-next-app --example blog-starter blog-starter-app
```

This command will clone the "blog-starter" repository and scaffold a new Next.js project named "blog-starter-app" based on that template. Navigate into the project directory:

```bash
cd blog-starter-app
```

The Blog Starter template provides a solid foundation for building a blog using Next.js. It includes features like blog post pages, a homepage, and a data source to fetch blog content created in markdown locally.

## Adding the RSS Feed Functionality

To add an RSS feed to your Next.js project, follow these steps:

Install the rss library by running the following command:

```bash
npm install rss
```

Create a new RSS feed by creating the file `utils/rss.ts` and adding the following code:

```typescript
import fs from "fs";
import RSS from "rss";

export default async function generateRssFeed(allPosts) {
  const site_url =
    process.env.NODE_ENV === "production"
      ? "https://nameofwebsite"
      : "http://localhost:3000";

  const feedOptions = {
    title: "Blog posts | RSS Feed",
    description: "Welcome to this blog posts!",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/logo.jpeg`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  // Add each individual post to the feed.
  allPosts.map((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `${site_url}/posts/${post.slug}`,
      date: post.date,
    });
  });

  // Write the RSS feed to a file as XML.
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
```

This code generates an RSS feed by iterating over a collection of blog posts, creating an RSS item for each post, and then writing the resulting XML feed to a file. It writes the generated RSS feed to a file named "rss.xml" in the "./public" directory using the "writeFileSync" method from the "fs" module.

Import our function in the `pages/index.tsx` file and call it in the `getStaticProps()` like this:

```typescript
export const getStaticProps = async () => {
  const allPosts = await getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  generateRssFeed(allPosts);
  return {
    props: { allPosts },
  };
};
```

### Testing the RSS Feed

To test the RSS feed functionality, start your Next.js development server by running:

```bash
npm run dev
```

To generate the file, please access the `http://localhost:3000` page, and then open `http://localhost:3000/rss.xml` in your browser. You should see the XML data representing your RSS feed.

![Rss image screenshot](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w2brirm7pqabz03pm73s.png)

If you use an extension like [RSS Feed Reader](https://chrome.google.com/webstore/detail/rss-feed-reader/pnjaodmkngahhkoihejjehlcdlnohgmp/related), it will appear like this:

![Rss feed with a feed reader](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0itp8ejznkicr6ycs09y.png)

🥳 Congratulations! You've successfully added an RSS feed to your Next.js project. By keeping your users informed and engaged with your latest content, you're building a stronger connection. Feel free to customize the feed further based on your project's needs.
