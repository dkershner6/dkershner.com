import React, { PropsWithChildren, ReactElement } from "react";

import { Container, Typography } from "@mui/material";
import Head from "next/head";

import Layout from "./Layout";

export type BlogLayoutProps = PropsWithChildren<{
    meta: {
        author?: string;
        description?: string;
        title?: string;
    };
}>;

const BlogLayout = ({ children, meta }: BlogLayoutProps): ReactElement => {
    const { author, title } = meta ?? {};
    return (
        <>
            <Head>
                <title>
                    {title
                        ? `${title} | Kershner Endeavors Blog`
                        : "Kershner Endeavors Blog"}
                </title>
            </Head>
            <Layout>
                <Container>
                    <Typography variant="h1">{title}</Typography>
                    <Typography variant="body1">{author}</Typography>
                    {children}
                </Container>
            </Layout>
        </>
    );
};

export default BlogLayout;
