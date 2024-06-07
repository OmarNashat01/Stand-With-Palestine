import { blogs, Blog } from "@/PagesData/BlogsPageData";
import fs from "fs";
import yaml from "js-yaml";


export const getBlog = (blogPath: string) => {
    let blog: Blog | undefined = blogs.find(
        (blog) => blog.blogPath === `${blogPath}.md`
    );
    if (!blog) {
        blog = blogs.find(
            (blog) => blog.blogPath === `${blogPath}.json`
        );
    }
    if (!blog)
        return undefined;
    let content: string | object | undefined = fs.readFileSync(`public${blog.blogPath}`, "utf8");
    if (blog.blogPath.endsWith('.json')) {
        content = yaml.load(content) as Object;
    }
    if (!content)
        return undefined;

    return { blog, content };
}
