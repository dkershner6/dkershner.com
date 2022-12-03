import React, { ReactElement } from "react";

import Layout from "@layout/Layout";
import { Container, Typography } from "@mui/material";

const NotFoundPage = (): ReactElement => (
    <Layout>
        <Container sx={{ marginTop: (theme) => theme.spacing(2) }}>
            <Typography variant="h1">Not Found</Typography>
            <Typography variant="body1">
                You just hit a route that doesn&#39;t exist... the sadness.
            </Typography>
        </Container>
    </Layout>
);

export default NotFoundPage;
