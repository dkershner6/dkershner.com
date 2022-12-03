import React from "react";

import Layout from "@layout/Layout";
import markdownToHtml from "@lib/markdown/markdownToHtml";
import { getPostBySlug, getAllPosts, BlogPost } from "@lib/markdown/posts";
import { Container, Typography } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";

type BlogPostPageProps = {
    post: BlogPost;
};

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post }) => {
    return (
        <>
            <Head>
                <title>{`${post.title} | Kershner Endeavors Blog`}</title>
                {/* <meta
                                    property="og:image"
                                    content={post.ogImage.url}
                                /> */}
            </Head>
            <Layout>
                <Container component="article">
                    <Typography variant="h1">{post.title}</Typography>
                    <Typography variant="body1">{post.author}</Typography>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </Container>
            </Layout>
        </>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params?.slug || typeof params.slug !== "string") {
        return {
            notFound: true,
        };
    }

    const post = getPostBySlug(params.slug);
    const content = await markdownToHtml(post.content ?? "");

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts();

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
};

export default BlogPostPage;
