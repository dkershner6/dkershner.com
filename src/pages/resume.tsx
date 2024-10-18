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
                        Built e-commerce marketplace-capable software platform
                        (Shopify-like with vastly increased Supply-side
                        capability) and an e-commerce site.
                    </Typography>
                    <Typography variant="body2">
                        Met with potential investors to explain technical
                        vision.
                    </Typography>
                    <Typography variant="body2">
                        Planned and constructed initial architecture and
                        foundational software.
                    </Typography>
                    <Typography variant="body2">
                        Built cultural principles and coding guidelines.
                    </Typography>
                    <Typography variant="body2">
                        Recruited, hired, and trained software engineering team.
                    </Typography>
                    <Typography variant="body2">
                        Managed multi-domain, multi-year software development
                        process to successful minimum viable product launch with
                        early delivery (25%).
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
                    subheader="CBT Nuggets, 08/19 - 05/21"
                />
                <CardContent sx={{ paddingTop: 0 }}>
                    <Typography variant="body2">
                        Was Architect and Advocate for the most productive
                        Software Engineering team in the company managing the
                        more complex domains, providing 50% above average code
                        impact and being the single most impactful engineer
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
                        Software Consulting for companies such as Laird
                        Superfood, KIALOA, and founded startups.
                    </Typography>
                    <Typography variant="body2">
                        Open Source Software contributions to libraries such as
                        projen and the AWS CDK.
                    </Typography>
                    <Typography variant="body2">
                        Volunteering for non-profits.
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
                    subheader="Altrec, 11/06 - 10/14"
                />
                <CardContent sx={{ paddingTop: 0 }}>
                    <Typography variant="body2">
                        Handled the sourcing and presentation of all company
                        analysis and reporting to the rest of the senior
                        management team, received award for critical tools.
                    </Typography>
                    <Typography variant="body2">
                        Managed Marketing Team and associated budget. Planned
                        Merchandise strategy.
                    </Typography>
                    <Typography variant="body2">
                        Was solely responsible for a project that liquidated
                        $400K of distressed inventory.
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
