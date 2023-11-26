interface Blog {
    showBlog: boolean;
    name: string;
    subTitle: string;
    imagePath: string;
    blogPath: string;
    summary: string;
}

export const blogs: Blog[] = [
    {
        showBlog: true,
        name: "Very Important Blog to Read!",
        subTitle: "A Blog For the Next Gen Z Kids",
        imagePath: "/Unused/Gaza-Now.jpeg",
        blogPath: "/BlogsPage/mock-blog.md",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tempor nunc. Vestibulum id ligula.",
    },
    {
        showBlog: false,
        name: "Blog 2",
        subTitle: "A Blog For the Next Gen Z Kids",
        imagePath: "/Unused/Gaza-red.jpeg",
        blogPath: "/BlogsPage/mock-blog.md",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tempor nunc. Vestibulum id ligula.",
    },
    {
        showBlog: true,
        name: "Blog 3",
        subTitle: "A Blog For the Next Gen Z Kids",
        imagePath: "/Unused/Gaza-Now2.jpeg",
        blogPath: "/BlogsPage/mock-blog.md",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tempor nunc. Vestibulum id ligula.",
    },
    {
        showBlog: true,
        name: "Blog 4",
        subTitle: "A Blog For the Next Gen Z Kids",
        imagePath: "/Unused/Gaza-Sat.jpeg",
        blogPath: "/BlogsPage/mock-blog.md",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tempor nunc. Vestibulum id ligula.",
    },
    {
        showBlog: true,
        name: "Blog 5",
        subTitle: "A Blog For the Next Gen Z Kids",
        imagePath: "/Unused/Gaza-red.jpeg",
        blogPath: "/BlogsPage/mock-blog.md",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus sapien, semper eget tincidunt vel, interdum sit amet erat. Duis.",
    },
];
