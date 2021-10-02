import React, { ReactElement } from "react";

import Layout from "../common/Layout";

import InfoGrid from "./InfoGrid";

const Home = (): ReactElement => {
    return (
        <Layout>
            <InfoGrid />
        </Layout>
    );
};

export default Home;
