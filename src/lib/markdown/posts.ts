import fs from "fs";
import { join } from "path";

import matter from "gray-matter";

export type BlogPost = {
    author?: string;
    content: string;
    date: string;
    description?: string;
    slug: string;
    title: string;
};

const postsDirectory = join(process.cwd(), "posts");

export const getPostSlugs = (): string[] => {
    return fs.readdirSync(postsDirectory);
};

export const getPostBySlug = (slug: string): BlogPost => {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        ...data,
        content,
        slug: realSlug,
        date: data.date.toISOString(),
    } as BlogPost;
};

export const getAllPosts = (): BlogPost[] => {
    const slugs = getPostSlugs();
    return (
        slugs
            .map((slug) => getPostBySlug(slug))
            // sort posts by date in descending order
            .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    );
};
