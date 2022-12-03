import React, { ReactElement } from "react";

import {
    alpha,
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Grid,
    List,
    ListItem,
    Paper,
    Typography,
    useTheme,
} from "@mui/material";
import { Parallax } from "react-parallax";

const Home = (): ReactElement => {
    const theme = useTheme();

    const SERVICE_CARD_SX = {
        height: "100%",
    };

    return (
        <Box>
            <Parallax strength={300} bgImage="/img/geometric.webp">
                <Grid container justifyContent="flex-end">
                    <Grid item textAlign="right">
                        <Paper
                            sx={{
                                bgcolor: alpha(
                                    theme.palette.background.default,
                                    0.7
                                ),
                                marginY: theme.spacing(12),
                                padding: theme.spacing(4),
                            }}
                        >
                            <Typography variant="h1">Services</Typography>
                            <Typography
                                component="h2"
                                variant="body1"
                                sx={{
                                    color: theme.palette.text.secondary,
                                }}
                            >
                                Software Consulting
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
                    <Grid item xs={12} md={6}>
                        <Card sx={SERVICE_CARD_SX}>
                            <CardHeader
                                title="Software Leadership"
                                subheader="Fractional CTO"
                            />
                            <CardContent>
                                <List>
                                    <ListItem>
                                        Assess current technology choices.
                                    </ListItem>
                                    <ListItem>
                                        Develop strategic vision and software
                                        principles.
                                    </ListItem>
                                    <ListItem>
                                        Oversee development roadmap and provide
                                        cohesive deliverables.
                                    </ListItem>
                                    <ListItem>
                                        Improve and Monitor Software Development
                                        Life Cycle.
                                    </ListItem>
                                    <ListItem>
                                        Pragmatic, not lofty solutions.
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
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
                    <Grid item xs={12} md={6}>
                        <Card sx={SERVICE_CARD_SX}>
                            <CardHeader
                                title="Software Engineering"
                                subheader="Limitless potential"
                            />
                            <CardContent>
                                <ListItem>Build new functionality.</ListItem>
                                <ListItem>
                                    Improve existing functionality.
                                </ListItem>
                                <ListItem>
                                    Maintain high quality for the lowest
                                    possible future maintenance.
                                </ListItem>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={SERVICE_CARD_SX}>
                            <CardHeader
                                title="Reporting & Data"
                                subheader="Nimble, accurate decision making"
                            />
                            <CardContent>
                                <ListItem>
                                    Automate extraction and transformation.
                                </ListItem>
                                <ListItem>Maximize value.</ListItem>
                                <ListItem>Visualize patterns.</ListItem>
                                <ListItem>Act.</ListItem>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={SERVICE_CARD_SX}>
                            <CardHeader
                                title="Staff Training & Recruitment"
                                subheader="Expand Capabilities"
                            />
                            <CardContent>
                                <ListItem>Aid the search.</ListItem>
                                <ListItem>
                                    Assess incoming talent for impact.
                                </ListItem>
                                <ListItem>Ensure cultural fit.</ListItem>
                                <ListItem>Maximize Engineer learning.</ListItem>
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
                    <Grid item>
                        <Button
                            variant="contained"
                            href={`mailto:${process.env.NEXT_PUBLIC_CONSULTING_EMAIL_ADDRESS}`}
                        >
                            Contact Us
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;
