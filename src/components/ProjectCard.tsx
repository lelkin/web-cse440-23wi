import * as React from 'react';
import { FunctionComponent } from 'react';

import GeneratedLink from '../common/GeneratedLink';

import {
    Card,
    CardContent,
    Stack,
} from '@mui/material';

interface ProjectCardProps {
    name: string;
    logo: string;
    path: string;
}

export const ProjectCard: FunctionComponent<ProjectCardProps> = (props) => {
    return (
        <Card>
            <CardContent>
                <GeneratedLink href={"/projects/" + props.path}>
                    <Stack>
                        { props.name }
                        <img
                            src={props.logo}
                            height="150"
                            width="150"
                            alt={ "Project Logo: " + props.name }
                        />
                    </Stack>
                </GeneratedLink>
            </CardContent>
        </Card>
    );
}

export default ProjectCard;
