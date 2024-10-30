/* eslint-disable sonarjs/no-duplicate-string */
import React from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import EngineeringIcon from "@mui/icons-material/Engineering";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import CartIcon from "@mui/icons-material/ShoppingCart";
import {
    AppBar,
    Box,
    Card,
    CardContent,
    CardHeader,
    Container,
    Grid2 as Grid,
    IconButton,
    Typography,
    useTheme,
} from "@mui/material";

const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
const PHONE_NUMBER = process.env.PHONE_NUMBER;

const enum ResumeType {
    CARMA,
    FINCH_CARE,
    HEADWAY,
    HUMAN_INTEREST,
    MEDBILL_AI,
    OFFER_FIT,
    WILLOW_HEALTH,

    AWS_REACT_TS,
    AWS_DATA_SCRAPING,
}

const RESUME_TYPE = ResumeType.AWS_REACT_TS;

const CONSULTING_FORWARD_RESUME_TYPES = [
    ResumeType.CARMA,
    ResumeType.FINCH_CARE,
    ResumeType.MEDBILL_AI,
    ResumeType.WILLOW_HEALTH,
];

const MOBILE_FORWARD_RESUME_TYPES = [
    ResumeType.CARMA,
    ResumeType.FINCH_CARE,
    ResumeType.MEDBILL_AI,
];

const HIGHLIGHTED_SKILLS_MAP: Record<ResumeType, string[]> = {
    [ResumeType.CARMA]: [
        "6+ yrs AWS",
        "10+ yrs Cloud Architecture",
        "5+ yrs Founding Startups",
        "5+ yrs Senior Leadership",
        "14+ yrs SQL, 6+ yrs NoSQL",
        "8+ yrs React / TypeScript",
        "3+ yrs React Native",
    ],
    [ResumeType.FINCH_CARE]: [
        "10+ yrs Cloud Architecture",
        "10+ yrs Full-Stack Software",
        "8+ yrs Open Source Software",
        "3+ yrs Mobile App Development (React Native)",
        "5+ yrs Senior Leadership",
        "5+ yrs in Startups",
    ],
    [ResumeType.HEADWAY]: [
        "6+ yrs AWS",
        "10+ yrs Cloud Architecture",
        "10+ yrs Full-Stack Software",
        "8+ yrs Open Source Software",
        "5+ yrs Senior Leadership",
        "14+ yrs SQL, 6+ yrs NoSQL (DynamoDB)",
        "8+ yrs React / TypeScript",
    ],
    [ResumeType.HUMAN_INTEREST]: [
        "6+ yrs AWS",
        "10+ yrs Cloud Architecture",
        "Life-long Finance Enthusiast",
        "8+ yrs Open Source Software",
        "2 yrs Monolith to microservices (SOA)",
        "5+ yrs Senior Leadership",
        "14+ yrs SQL, 6+ yrs NoSQL",
        "8+ yrs React",
        "8+ yrs TypeScript",
    ],
    [ResumeType.MEDBILL_AI]: [
        "6+ yrs AWS",
        "10+ yrs Cloud Architecture",
        "8+ yrs Containers",
        "5+ yrs Founding Startups",
        "Experimented with Gen AI (and understood your joke)",
        "5+ yrs Senior Leadership",
        "14+ yrs SQL, 6+ yrs NoSQL",
        "8+ yrs React / TypeScript",
        "3+ yrs React Native",
    ],
    [ResumeType.OFFER_FIT]: [
        "10+ yrs Cloud Architecture",
        "8+ yrs Containers, Some Kubernetes",
        "5+ yrs Founding Startups",
        "5+ yrs Senior Leadership",
        "14+ yrs SQL, 6+ yrs NoSQL",
        "8+ yrs React / TypeScript",
    ],
    [ResumeType.WILLOW_HEALTH]: [
        "10+ yrs Cloud Architecture",
        "8+ yrs Containers",
        "14+ yrs Data Analytics",
        "10+ yrs Full-Stack Software",
        "5+ yrs Founding Startups",
        "5+ yrs PCI/PII & User Management",
        "5+ yrs Senior Leadership",
        "14+ yrs SQL, 6+ yrs NoSQL",
        "8+ yrs React / TypeScript",
    ],
    [ResumeType.AWS_REACT_TS]: [
        // "6+ yrs AWS",
        "10+ yrs Cloud Architecture",
        "5+ yrs Founding Startups",
        "8+ yrs Open Source Software",
        "14+ yrs SQL, 6+ yrs NoSQL",
        "8+ yrs React",
        "5+ yrs Senior Leadership",
        "8+ yrs TypeScript",
    ],
    [ResumeType.AWS_DATA_SCRAPING]: [
        "6+ yrs AWS",
        "6+ yrs AWS S3",
        "8+ yrs Open Source Software",
        "3+ yrs Puppeteer",
        "8+ yrs TypeScript",
    ],
};

const Resume = () => {
    const { siteConfig } = useDocusaurusContext();
    const theme = useTheme();

    const renderHeader = () => {
        return (
            <AppBar color="inherit" position="static">
                <Grid
                    container
                    width="100%"
                    alignItems="center"
                    sx={{ paddingLeft: theme.spacing(2) }}
                >
                    <Grid size={{ sm: 8.75 }}>
                        <Typography component="h1" variant="h2" color="primary">
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
                                <MailIcon fontSize="small" color="primary" />
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
                                <PhoneIcon fontSize="small" color="primary" />
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
                                    siteConfig.customFields?.githubUrl as string
                                }
                            >
                                <GitHubIcon fontSize="small" color="primary" />
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
                                <LinkedInIcon
                                    fontSize="small"
                                    color="primary"
                                />
                            </IconButton>
                            <Typography
                                component="span"
                                color="textSecondary"
                                variant="caption"
                            >
                                {(
                                    siteConfig.customFields
                                        ?.linkedInUrl as string
                                )?.replace("https://www.linkedin.com/in/", "")}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </AppBar>
        );
    };

    const renderLeftColumn = () => {
        return (
            <Box display="flex" flexDirection="column" height="100%">
                <Box marginBottom={theme.spacing(2)}>
                    {renderHighlightedSkills()}
                </Box>
                <Box marginBottom={theme.spacing(2)}>{renderEducation()}</Box>
                <Box marginBottom={theme.spacing(2)}>{renderReferences()}</Box>
                <Box marginBottom={theme.spacing(2)}>{renderBuiltWith()}</Box>
            </Box>
        );
    };

    const renderHighlightedSkills = () => {
        return (
            <Card>
                <CardHeader
                    title="Highlighted Skills"
                    titleTypographyProps={{ color: "primary" }}
                />
                <CardContent>
                    {HIGHLIGHTED_SKILLS_MAP[RESUME_TYPE].map((skill) => (
                        <Typography
                            key={skill}
                            variant="body2"
                            fontWeight={800}
                            gutterBottom
                        >
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
                <CardHeader title="Education" />
                <CardContent>
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
                <CardHeader
                    title="Recommendations / References"
                    titleTypographyProps={{ fontSize: 15 }}
                />
                <CardContent>
                    <Typography variant="body2" gutterBottom>
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
                <Box marginBottom={theme.spacing(2)}>{renderEformed()}</Box>
                <Box marginBottom={theme.spacing(2)}>
                    {CONSULTING_FORWARD_RESUME_TYPES.includes(RESUME_TYPE)
                        ? renderConsulting()
                        : renderCbt()}
                </Box>
                <Box marginBottom={theme.spacing(2)}>
                    {CONSULTING_FORWARD_RESUME_TYPES.includes(RESUME_TYPE)
                        ? renderCbt()
                        : renderConsulting()}
                </Box>
                <Box marginBottom={theme.spacing(2)}>{renderAltrec()}</Box>
            </Box>
        );
    };

    const renderEformed = () => {
        return (
            <Card>
                <CardHeader
                    title="Chief Technology Officer"
                    subheader="eFormed Partners, 05/21 - Present"
                    action={
                        <IconButton>
                            <CartIcon color="primary" />
                        </IconButton>
                    }
                />
                <CardContent>
                    <Typography variant="body2">
                        Significant hands-on contribution in Architecture,
                        Infrastructure, DevOps, and Feature Engineering.
                    </Typography>
                    <Typography variant="body2">
                        Built & empowered team to create B2B (Supply) and B2C
                        (Storefront) marketplace e-commerce platform from the
                        ground up in a multi-year agile development process that
                        delivered specified product requirements early (25%).
                    </Typography>
                    <Typography variant="body2">
                        Platform able to achieve 99.99% availability across two
                        regions and experienced no scale related latency.
                    </Typography>
                    <Typography variant="body2">
                        Developer experience was consistently reviewed as very
                        strong due to clarity of cultural values and consistent,
                        honest feedback. Maintained leanness through DevOps
                        innovation such as fully automated CI/CD and fully
                        automated, standardized repository creation and
                        configuration.
                    </Typography>
                    <Typography variant="body2" fontWeight={800}>
                        Selected Tech: AWS, TypeScript, AWS CDK, DynamoDB,
                        Open/ElasticSearch, Lambda, Express, GraphQL, React,
                        Next.js
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
                    action={
                        <IconButton>
                            <ArchitectureIcon color="primary" />
                        </IconButton>
                    }
                />
                <CardContent>
                    <Typography variant="body2">
                        Was Architect and Advocate for the most productive
                        Software Engineering team in the company managing
                        complex domains, providing 50% above average code impact
                        and personally being the single most impactful engineer
                        (Pluralsight Flow measured).
                    </Typography>
                    <Typography variant="body2">
                        {
                            "Chosen as architect for EdTech skunkworks style project to broaden the company's product offering."
                        }
                    </Typography>
                    <Typography variant="body2" fontWeight={800}>
                        Tech: AWS, JavaScript/TypeScript, AWS CDK, DynamoDB,
                        Lambda, ECS, Express, GraphQL, React, Websockets
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
                    action={
                        <IconButton>
                            {<EngineeringIcon color="primary" />}
                        </IconButton>
                    }
                />
                <CardContent>
                    <Typography variant="body2">
                        Consulted and Partnered with companies such as Laird
                        Superfood, founded startups, experienced successful
                        exits including Kialoa Paddles being acquired by Werner
                        Paddles.
                    </Typography>
                    <Typography variant="body2">
                        {MOBILE_FORWARD_RESUME_TYPES.includes(RESUME_TYPE)
                            ? "Created a mobile app for Picky Bars that allowed for editing of subscription boxes, the core product for the business."
                            : "Contributed to open-source software libraries such as Projen and the AWS CDK."}
                    </Typography>
                    <Typography variant="body2">
                        Volunteered for non-profits, including development of a
                        web & mobile app to capture patient acuity for a health
                        clinic.
                    </Typography>
                    <Typography variant="body2" fontWeight={800}>
                        Sample of Tech: AWS, Azure, Google Cloud, TypeScript,
                        .NET, Python, AWS CDK, DynamoDB, CosmosDB, PostgreSQL,
                        MSSQL, Lambda, Azure Functions, Google Firebase, React,
                        React Native, Next.js
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
                    action={
                        <IconButton>
                            {<AnalyticsIcon color="primary" />}
                        </IconButton>
                    }
                />
                <CardContent>
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
