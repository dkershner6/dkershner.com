import React, { ReactElement } from "react";

import {
    alpha,
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Grid2 as Grid,
    List,
    ListItem,
    Paper,
    Typography,
    useTheme,
} from "@mui/material";
import Layout from "@theme/Layout";
import { Parallax } from "react-parallax";

import ThemeProviders from "../styles/ThemeProviders";

const Home = (): ReactElement => {
    const theme = useTheme();

    const SERVICE_CARD_SX = {
        height: "100%",
    };

    return (
        <Box>
            <Parallax strength={300} bgImage="/img/geometric.webp">
                <Grid container justifyContent="flex-end">
                    <Grid textAlign="right">
                        <Paper
                            sx={{
                                bgcolor: alpha(
                                    theme.palette.background.paper,
                                    0.7
                                ),
                                marginY: theme.spacing(12),
                                padding: theme.spacing(4),
                            }}
                        >
                            <Typography variant="h1">Skills</Typography>
                            <Typography
                                component="h2"
                                variant="body1"
                                color="textSecondary"
                            >
                                "Founding Software Leader | Cloud Infrastructure Architect | Full-Stack Engineer | DevOps | AI"
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Parallax>
            <Container>
                <Grid
                    container
                    spacing={4}
                    marginY={theme.spacing(8)}
                    justifyContent="center"
                >
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Card sx={SERVICE_CARD_SX}>
                            <CardHeader
                                title="Software Leadership"
                            />
                            <CardContent>
                                <List>
                                    <ListItem>
                                        Founded several startups.
                                    </ListItem>
                                    <ListItem>
                                        6+ Years Senior Leadership Experience.
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Card sx={SERVICE_CARD_SX}>
                            <CardHeader
                                title="Cloud Architecture & Infrastructure"
                                subheader="AWS and Azure"
                            />
                            <CardContent>
                                <List>
                                    <ListItem>
                                        Maximize benefits of cloud computing.
                                    </ListItem>
                                    <ListItem>Minimize costs.</ListItem>
                                    <ListItem>
                                        Reduce operational and development
                                        friction.
                                    </ListItem>
                                    <ListItem>
                                        Implement modern DevOps practices.
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Card sx={SERVICE_CARD_SX}>
                            <CardHeader
                                title="Software Engineering"
                                subheader="Limitless potential"
                            />
                            <CardContent>
                                <List>
                                    <ListItem>
                                        Build new functionality.
                                    </ListItem>
                                    <ListItem>
                                        Improve existing functionality.
                                    </ListItem>
                                    <ListItem>
                                        Maintain high quality for the lowest
                                        possible future maintenance.
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Card sx={SERVICE_CARD_SX}>
                            <CardHeader
                                title="Reporting & Data"
                                subheader="Nimble, accurate decision making"
                            />
                            <CardContent>
                                <List>
                                    <ListItem>
                                        Automate extraction and transformation.
                                    </ListItem>
                                    <ListItem>Maximize value.</ListItem>
                                    <ListItem>Visualize patterns.</ListItem>
                                    <ListItem>Act.</ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Card sx={SERVICE_CARD_SX}>
                            <CardHeader
                                title="Staff Training & Recruitment"
                                subheader="Expand Capabilities"
                            />
                            <CardContent>
                                <List>
                                    <ListItem>Aid the search.</ListItem>
                                    <ListItem>
                                        Assess incoming talent for impact.
                                    </ListItem>
                                    <ListItem>Ensure cultural fit.</ListItem>
                                    <ListItem>
                                        Maximize Engineer learning.
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justifyContent="center"
                    spacing={4}
                    marginBottom={theme.spacing(6)}
                >
                    <Grid>
                        <Button
                            variant="contained"
                            href={`mailto:consulting@dkershner.com`}
                        >
                            Contact Us
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

const HomePage = (): ReactElement => {
    return (
        <Layout>
            <ThemeProviders>
                <Home />
            </ThemeProviders>
        </Layout>
    );
};

export default HomePage;
