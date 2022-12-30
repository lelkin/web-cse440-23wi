import * as React from 'react';
import { FunctionComponent } from 'react';

import {
    Box,
    Grid,
    Paper, Typography,
} from '@mui/material';

interface ProjectImage {
    src: string;
    caption?: string;
}

interface ProjectImagesBlockProps {
    children: React.ReactNode,
    images: ProjectImage[];
    caption?: string;
    direction: "row" | "column";
    width: 4 | 6 | 8;
    maxHeight?: string;
}

export const ProjectImagesBlock: FunctionComponent<ProjectImagesBlockProps> = (props) => {
    return (
        <React.Fragment>
            <Grid container spacing={4}>
                <Grid item md={12 - props.width} sx={{marginTop: -2}}>
                    { props.children }
                </Grid>
                <Grid item md={props.width} sx={{marginTop: -2}}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: props.direction,
                        justifyContent: "center",
                    }}>
                        {
                            props.images.map(
                                projectImage => (
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                        }}
                                        key={projectImage.src}
                                    >
                                        <Box sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "start",
                                        }}>
                                            <Paper sx={{
                                                marginX: 1,
                                                marginY: 2,
                                                padding: 1
                                            }}>
                                                <img
                                                    src={projectImage.src}
                                                    style={{
                                                        maxHeight: (props.maxHeight === undefined) ? "400px" : props.maxHeight,
                                                        maxWidth: "100%"
                                                    }}
                                                />
                                            </Paper>
                                            {
                                                projectImage.caption != undefined &&
                                                <React.Fragment>
                                                    <Box sx={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        justifyContent: "center",
                                                        marginTop: 1,
                                                        marginBottom: 4,
                                                    }}>
                                                        <Typography fontStyle="oblique">
                                                            { projectImage.caption }
                                                        </Typography>
                                                    </Box>
                                                </React.Fragment>
                                            }
                                        </Box>
                                    </Box>
                                )
                            )
                        }
                    </Box>
                    {
                        props.caption != undefined &&
                        <React.Fragment>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    marginTop: 1,
                                    marginBottom: 4,
                                }}>
                                    <Typography fontStyle="oblique">
                                        { props.caption }
                                    </Typography>
                                </Box>
                        </React.Fragment>
                    }
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default ProjectImagesBlock;
