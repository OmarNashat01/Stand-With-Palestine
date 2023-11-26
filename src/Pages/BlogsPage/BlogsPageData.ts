interface Blog {
    showBlog: boolean;
    name: string;
    subTitle: string;
    imagePath: string;
    blogPath: string;
    summary: string;
}

export const blogs = [
    {
        showBlog: true,
        name: "Very Important Blog to Read!",
        subTitle: "A Blog For the Next Gen Z Kids",
        imagePath: "/Gaza-Now.jpeg",
        blogPath: "/blogs/mock-blog.md",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tempor nunc. Vestibulum id ligula.",
    },
    {
        showBlog: false,
        name: "Blog 2",
        subTitle: "A Blog For the Next Gen Z Kids",
        imagePath: "/Gaza-red.jpeg",
        blogPath: "/blogs/mock-blog.md",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tempor nunc. Vestibulum id ligula.",
    },
    {
        showBlog: true,
        name: "Blog 3",
        subTitle: "A Blog For the Next Gen Z Kids",
        imagePath: "/Gaza-Now2.jpeg",
        blogPath: "/blogs/mock-blog.md",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tempor nunc. Vestibulum id ligula.",
    },
    {
        showBlog: true,
        id: 4,
        name: "Blog 4",
        imagePath: "/Gaza-Sat.jpeg",
        subTitle: "A Blog For the Next Gen Z Kids",
        blogPath: "/blogs/mock-blog.md",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tempor nunc. Vestibulum id ligula.",
    },
    {
        showBlog: true,
        id: 5,
        name: "Blog 5",
        subTitle: "A Blog For the Next Gen Z Kids",
        imagePath: "/Gaza-smoke.jpeg",
        blogPath: "/blogs/mock-blog.md",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus sapien, semper eget tincidunt vel, interdum sit amet erat. Duis.",
    },
];
