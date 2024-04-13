import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

interface HeadProps {
    title: string;
    description: string;
    keywords: string;
    image: string;
    url: string;
}

const Head: FC<HeadProps> = ({ title, description, keywords, image, url }) => {
    return (
        <head>
            <Helmet>
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
            </Helmet>
        </head>
    );
}

export default Head;