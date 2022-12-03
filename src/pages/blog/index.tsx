import React from "react";

import Layout from "@layout/Layout";
import { BlogPost, getAllPosts } from "@lib/markdown/posts";
import {
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    Container,
    Typography,
    useTheme,
} from "@mui/material";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

interface BlogIndexPageProps {
    allPosts: BlogPost[];
}

const BlogIndexPage: NextPage<BlogIndexPageProps> = ({ allPosts }) => {
    const theme = useTheme();

    return (
        <>
            <Head>
                <title>Kershner Endeavors Blog</title>
            </Head>
            <Layout>
                <Container>
                    <Typography variant="h1">Blog</Typography>
                    {allPosts.map((post) => (
                        <Card
                            key={post.slug}
                            sx={{ marginY: theme.spacing(4) }}
                        >
                            <CardActionArea href={`/blog/${post.slug}`}>
                                <CardHeader
                                    title={post.title}
                                    subheader={`${post.author}`}
                                />
                                <CardContent>
                                    {post.description ?? "No Description"}
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </Container>
            </Layout>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const allPosts = getAllPosts();

    return {
        props: { allPosts },
    };
};

export default BlogIndexPage;
