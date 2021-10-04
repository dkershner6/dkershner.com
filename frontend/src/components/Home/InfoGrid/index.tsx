import React, { ReactElement } from "react";

import {
    Container,
    Grid,
    IconButton,
    ListItem,
    ListItemText,
    Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import styled from "styled-components";

import {
    LINKEDIN_URL,
    GITHUB_URL,
} from "../../../lib/common/personalConstants";
import HoverPaper from "../../common/HoverPaper";

const InfoGridContainer = styled.div`
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 3rem;
    background-color: ${(props) => props.theme.palette.grey[300]};
`;

const InfoGrid = (): ReactElement => {
    return (
        <InfoGridContainer>
            <Container>
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justify="center"
                >
                    <Grid item xs={12} md={4}>
                        <HoverPaper
                            defaultContent={
                                <>
                                    <Typography variant="h4" component="h1">
                                        Derek Kershner
                                    </Typography>
                                    <Typography
                                        color="primary"
                                        variant="subtitle1"
                                        component="h2"
                                    >
                                        Software Architect
                                    </Typography>
                                </>
                            }
                            hoverContent={
                                <>
                                    <IconButton
                                        aria-label="LinkedIn"
                                        href={LINKEDIN_URL}
                                    >
                                        <LinkedInIcon color="primary" />
                                    </IconButton>
                                    <IconButton
                                        aria-label="GitHub Profile"
                                        href={GITHUB_URL}
                                    >
                                        <GitHubIcon color="primary" />
                                    </IconButton>
                                </>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <HoverPaper
                            defaultContent={
                                <Typography
                                    color="primary"
                                    variant="h4"
                                    component="h3"
                                >
                                    Versatile
                                </Typography>
                            }
                            hoverContent={
                                <>
                                    <ListItemText>
                                        Architecture to DevOps Infrastructure to
                                        Frontend
                                    </ListItemText>
                                </>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <HoverPaper
                            defaultContent={
                                <Typography
                                    color="primary"
                                    variant="h4"
                                    component="h3"
                                >
                                    Technical Leader
                                </Typography>
                            }
                            hoverContent={
                                <>
                                    <ListItem
                                        button
                                        component="a"
                                        href="https://www.linkedin.com/in/derek-kershner-54b3392/"
                                    >
                                        <ListItemText>
                                            7+ years business leadership,
                                            including Senior Management &
                                            Director level
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem
                                        button
                                        component="a"
                                        href="https://www.linkedin.com/in/derek-kershner-54b3392/"
                                    >
                                        <ListItemText>
                                            Architecture leadership from
                                            start-ups to medium-size companies,
                                            AWS to Azure
                                        </ListItemText>
                                    </ListItem>
                                </>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <HoverPaper
                            defaultContent={
                                <Typography color="secondary" variant="h4">
                                    Learner
                                </Typography>
                            }
                            hoverContent={
                                <Typography color="secondary" variant="h6">
                                    Rapid. Unending.
                                </Typography>
                            }
                        />
                    </Grid>
                </Grid>
            </Container>
        </InfoGridContainer>
    );
};

export default InfoGrid;
