import React from 'react';
import {default as NextHead} from 'next/head';


interface HeadProps {
    title: string;
    description: string;
    keywords: string;
    image: string;
    url: string;
}

const Head = ({ title, description, keywords, image, url }: HeadProps) => {
    return (
        <NextHead>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </NextHead>
    );
}

export default Head;
