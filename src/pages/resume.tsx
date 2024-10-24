import React from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import {
    AppBar,
    Box,
    Card,
    CardContent,
    CardHeader,
    Container,
    Grid2 as Grid,
    IconButton,
    Toolbar,
    Typography,
    useTheme,
} from "@mui/material";

const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
const PHONE_NUMBER = process.env.PHONE_NUMBER;

const HIGHLIGHTED_SKILLS = [
    "6+ yrs AWS",
    "6+ yrs Cloud Architecture",
    "8+ yrs Open Source",
    "12+ yrs SQL",
    "8+ yrs React",
    "8+ yrs TypeScript",
];

const Resume = () => {
    const { siteConfig } = useDocusaurusContext();
    const theme = useTheme();

    const renderHeader = () => {
        return (
            <AppBar color="inherit" position="static">
                <Toolbar>
                    <Grid container width="100%" alignItems="center">
                        <Grid size={{ sm: 8.75 }}>
                            <Typography component="h1" variant="h2">
                                Derek Kershner
                            </Typography>
                            <Typography
                                component="h2"
                                variant="caption"
                                color="textSecondary"
                            >
                                {siteConfig.tagline}
                            </Typography>
                        </Grid>
                        <Grid size={{ sm: 3.25 }}>
                            <Box>
                                <IconButton
                                    size="small"
                                    href={
                                        EMAIL_ADDRESS
                                            ? `mailto:${EMAIL_ADDRESS}`
                                            : undefined
                                    }
                                >
                                    <MailIcon fontSize="small" />
                                </IconButton>
                                <Typography
                                    component="span"
                                    color="textSecondary"
                                    variant="caption"
                                >
                                    {EMAIL_ADDRESS ?? "Sanitized for robots"}
                                </Typography>
                            </Box>
                            <Box>
                                <IconButton
                                    size="small"
                                    href={
                                        PHONE_NUMBER
                                            ? `tel:${PHONE_NUMBER}`
                                            : undefined
                                    }
                                >
                                    <PhoneIcon fontSize="small" />
                                </IconButton>
                                <Typography
                                    component="span"
                                    color="textSecondary"
                                    variant="caption"
                                >
                                    {PHONE_NUMBER ?? "Sanitized for robots"}
                                </Typography>
                            </Box>
                            <Box>
                                <IconButton
                                    size="small"
                                    href={
                                        siteConfig.customFields
                                            ?.githubUrl as string
                                    }
                                >
                                    <GitHubIcon fontSize="small" />
                                </IconButton>
                                <Typography
                                    component="span"
                                    color="textSecondary"
                                    variant="caption"
                                >
                                    dkershner6
                                </Typography>
                            </Box>
                            <Box>
                                <IconButton
                                    size="small"
                                    href={
                                        siteConfig.customFields
                                            ?.linkedInUrl as string
                                    }
                                >
                                    <LinkedInIcon fontSize="small" />
                                </IconButton>
                                <Typography
                                    component="span"
                                    color="textSecondary"
                                    variant="caption"
                                >
                                    {(
                                        siteConfig.customFields
                                            ?.linkedInUrl as string
                                    )?.replace(
                                        "https://www.linkedin.com/in/",
                                        "",
                                    )}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    };

    const renderLeftColumn = () => {
        return (
            <Box display="flex" flexDirection="column" height="100%">
                <Box marginBottom={theme.spacing(1)}>
                    {renderHighlightedSkills()}
                </Box>
                <Box marginBottom={theme.spacing(1)}>{renderEducation()}</Box>
                <Box marginBottom={theme.spacing(1)}>{renderReferences()}</Box>
                <Box flex="1"></Box>
                <Box marginBottom={theme.spacing(1)}>{renderBuiltWith()}</Box>
            </Box>
        );
    };

    const renderHighlightedSkills = () => {
        return (
            <Card>
                <CardHeader subheader="Highlighted Skills" />
                <CardContent sx={{ paddingTop: 0 }}>
                    {HIGHLIGHTED_SKILLS.map((skill) => (
                        <Typography key={skill} variant="body2">
                            {skill}
                        </Typography>
                    ))}
                </CardContent>
            </Card>
        );
    };

    const renderEducation = () => {
        return (
            <Card>
                <CardHeader subheader="Education" />
                <CardContent sx={{ paddingTop: 0 }}>
                    <Typography variant="body2">
                        University of Oregon, 2005
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        BS Business Administration, Finance
                    </Typography>
                </CardContent>
            </Card>
        );
    };

    const renderReferences = () => {
        return (
            <Card>
                <CardHeader subheader="Recommendations / References" />
                <CardContent sx={{ paddingTop: 0 }}>
                    <Typography variant="body2">
                        Many recommendations available on LinkedIn.
                    </Typography>
                    <Typography variant="body2">
                        References available upon request.
                    </Typography>
                </CardContent>
            </Card>
        );
    };

    const renderBuiltWith = () => {
        return (
            <Typography fontSize={10}>
                *This resume built with React Typescript
            </Typography>
        );
    };

    const renderRightColumn = () => {
        return (
            <Box>
                <Box marginBottom={theme.spacing(1)}>{renderEformed()}</Box>
                <Box marginBottom={theme.spacing(1)}>{renderCbt()}</Box>
                <Box marginBottom={theme.spacing(1)}>{renderConsulting()}</Box>
                <Box marginBottom={theme.spacing(1)}>{renderAltrec()}</Box>
            </Box>
        );
    };

    const renderEformed = () => {
        return (
            <Card>
                <CardHeader
                    title="Chief Technology Officer"
                    subheader="eFormed Partners, 05/21 - Present"
                />
                <CardContent sx={{ paddingTop: 0 }}>
                    <Typography variant="body2">
                        Built & empowered team to create B2B (Supply) and B2C
                        (Storefront) marketplace e-commerce platform from the
                        ground up in a multi-year agile development process that
                        delivered specified product requirements early (25%).
                    </Typography>
                    <Typography variant="body2">
                        Developer experience was consistently reviewed as very
                        strong due to clarity of cultural values and consistent,
                        honest feedback. Maintained leanness through DevOps
                        innovation such as fully automated CI/CD and fully
                        automated, standardized repository creation and
                        configuration.
                    </Typography>
                </CardContent>
            </Card>
        );
    };

    const renderCbt = () => {
        return (
            <Card>
                <CardHeader
                    title="Software Architect"
                    subheader={
                        <>
                            {`CBT Nuggets, 08/19 - 05/21`}
                            <br />
                            {`Senior Software Engineer`}
                        </>
                    }
                />
                <CardContent sx={{ paddingTop: 0 }}>
                    <Typography variant="body2">
                        Was Architect and Advocate for the most productive
                        Software Engineering team in the company managing
                        complex domains, providing 50% above average code impact
                        and personally being the single most impactful engineer
                        (Pluralsight Flow measured).
                    </Typography>
                </CardContent>
            </Card>
        );
    };

    const renderConsulting = () => {
        return (
            <Card>
                <CardHeader
                    title="Principal Consultant"
                    subheader="Kershner Endeavors, 10/14 - Present"
                />
                <CardContent sx={{ paddingTop: 0 }}>
                    <Typography variant="body2">
                        Consulted and Partnered with companies such as Laird
                        Superfood, founded startups, experienced successful
                        exits including Kialoa Paddles being acquired by Werner
                        Paddles.
                    </Typography>
                    <Typography variant="body2">
                        Contributed to open-source software libraries such as
                        Projen and the AWS CDK.
                    </Typography>
                    <Typography variant="body2">
                        Volunteered for non-profits.
                    </Typography>
                </CardContent>
            </Card>
        );
    };

    const renderAltrec = () => {
        return (
            <Card>
                <CardHeader
                    title="Director of Business Analytics"
                    subheader={
                        <>
                            {"Altrec, 11/06 - 10/14"}
                            <br />
                            {
                                "Marketing Analytics Manager, Search Marketing Analyst"
                            }
                        </>
                    }
                />
                <CardContent sx={{ paddingTop: 0 }}>
                    <Typography variant="body2">
                        Handled the sourcing and presentation of all company
                        analysis and reporting to the rest of the senior
                        management team.
                    </Typography>
                    <Typography variant="body2">
                        Planned Merchandise strategy and managed Marketing team
                        and associated budget, received Altrec trail guide award
                        for automating these processes.
                    </Typography>
                    <Typography variant="body2">
                        Was solely responsible for development of a project that
                        sold $400K of distressed inventory through a new B2C
                        process.
                    </Typography>
                </CardContent>
            </Card>
        );
    };

    return (
        <Container maxWidth="md">
            {renderHeader()}
            <Grid container marginTop={theme.spacing(1)} spacing={1}>
                <Grid size={{ sm: 3 }}>{renderLeftColumn()}</Grid>
                <Grid size={{ sm: 9 }}>{renderRightColumn()}</Grid>
            </Grid>
        </Container>
    );
};

export default Resume;
