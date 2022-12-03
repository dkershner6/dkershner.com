import React, { ReactElement } from "react";

import Head from "next/head";

import Home from "../components/Home";
import Layout from "../layout/Layout";

const HomePage = (): ReactElement => {
    return (
        <>
            <Head>
                <title>Kershner Endeavors</title>
            </Head>
            <Layout>
                <Home />
            </Layout>
        </>
    );
};

export default HomePage;
