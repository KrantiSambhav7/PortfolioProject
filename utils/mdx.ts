import fs from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';

export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.promises.readFile(
      path.join(process.cwd(), "/data/", `${slug}.mdx`),
      'utf-8'
    );

    const { content, frontmatter } = await compileMDX<{title: string}>({
        source: singleBlog,
        options: {
            parseFrontmatter: true,
        },
    });

    return {content, frontmatter};
  } catch (error) {
    console.error(`Error reading blog file for slug "${slug}":`, error);
    return null;
  }
};

export const getBlogs = async () => {
    const files = await fs.promises.readdir(path.join(process.cwd(), "/data/"));
    const allBlogs = await Promise.all(files.map(async (file) => {
        if (file.endsWith('.mdx')) {
            const slug = file.replace('.mdx', '');
            const frontmatter = await getBlogFrontMatterBySlug(slug);
            return {slug , ...frontmatter};
        }
        return null;
    }));

    return allBlogs;
}

const getBlogFrontMatterBySlug = async (slug: string) => {
    try {
        const singleBlog = await fs.promises.readFile(
        path.join(process.cwd(), "/data/", `${slug}.mdx`),
        'utf-8'
        );
    
        const { frontmatter } = await compileMDX<{title: string}>({
            source: singleBlog,
            options: {
                parseFrontmatter: true,
            },
        });
    
        return frontmatter;
    } catch (error) {
        console.error(`Error reading blog file for slug "${slug}":`, error);
        return null;
    }
}