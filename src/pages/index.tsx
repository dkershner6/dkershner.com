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
    ListItemButton,
    Paper,
    Typography,
    useTheme,
} from "@mui/material";
import Layout from "@theme/Layout";
import { Parallax } from "react-parallax";

import ThemeProviders from "../styles/ThemeProviders";

const Home = (): ReactElement => {
    const theme = useTheme();

    const HOME_CARD_SX = {
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
                                    0.7,
                                ),
                                marginY: theme.spacing(12),
                                padding: theme.spacing(4),
                            }}
                        >
                            <Typography variant="h1">Software</Typography>
                            <Typography
                                component="h2"
                                variant="body1"
                                color="textSecondary"
                            >
                                Founding Software Leader | Cloud Infrastructure
                                Architect | Full-Stack Engineer | DevOps | AI
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
                        <Card sx={HOME_CARD_SX}>
                            <CardHeader title="Software Leadership" />
                            <CardContent>
                                <List>
                                    <ListItem>
                                        Founded several startups.
                                    </ListItem>
                                    <ListItem>
                                        6+ Years Senior Leadership Experience.
                                    </ListItem>
                                    <ListItem>
                                        Met with potential investors to explain
                                        technical vision.
                                    </ListItem>
                                    <ListItem>
                                        Built cultural principles and coding
                                        guidelines.
                                    </ListItem>
                                    <ListItem>
                                        Recruited, hired, and trained software
                                        engineering team.
                                    </ListItem>
                                    <ListItem>
                                        Managed multi-domain, multi-year
                                        software development process to
                                        successful minimum viable product launch
                                        with early delivery.
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Card sx={HOME_CARD_SX}>
                            <CardHeader title="Cloud/Infrastructure Solutions Architecture" />
                            <CardContent>
                                <List>
                                    <ListItem>
                                        Extensive experience with AWS and Azure.
                                    </ListItem>
                                    <ListItem>
                                        Have Planned, Constructed, and
                                        Maintained massive, multi-faceted
                                        architectures across several capability
                                        requests.
                                    </ListItem>
                                    <ListItem>
                                        Have proven performance without
                                        degradation at massive scale.
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Card sx={HOME_CARD_SX}>
                            <CardHeader title="DevOps / Platform / Site Reliability Engineering" />
                            <CardContent>
                                <List>
                                    <ListItem>
                                        Extensive experience with Infrastructure
                                        as Code and have contributed constructs
                                        and libraries through Open Source (see
                                        NavBar).
                                    </ListItem>
                                    <ListItemButton href="https://projen.io/">
                                        Extensive experience with automating and
                                        standardizing repository creation.
                                        Extensive contribution to projen, the
                                        current leader in the space.
                                    </ListItemButton>
                                    <ListItem>
                                        Extensive experience with CI/CD and
                                        automation. Many open source GitHub
                                        Actions created or contributed to (see
                                        NavBar).
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Card sx={HOME_CARD_SX}>
                            <CardHeader title="Full-Stack Software Engineering" />
                            <CardContent>
                                <List>
                                    <ListItem>
                                        Extensive experience in various Object
                                        Oriented Programming languages in both
                                        the front and backends.
                                    </ListItem>
                                    <ListItem>
                                        Highly effective mentor and advocate.
                                    </ListItem>
                                    <ListItem>
                                        Many open-source contributions and
                                        creations (see NavBar).
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
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
