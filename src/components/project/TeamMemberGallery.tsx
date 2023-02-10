import * as React from 'react';
import { FunctionComponent } from 'react';

import {
    Card,
    CardContent,
    Grid,
    Stack,
} from '@mui/material';

interface TeamMemberProps {
    name: string;
    photo: string;
}

interface TeamMemberGalleryProps {
    members: TeamMemberProps[];
}

export const TeamMemberGallery: FunctionComponent<TeamMemberGalleryProps> = (props) => {
    return (
        <React.Fragment>
            <Grid container spacing={1}>
                {
                    props.members
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(
                        teamMemberProps => (
                            <Grid
                                item
                                key={teamMemberProps.name}
                            >
                                <Card>
                                    <CardContent>
                                        <Stack>
                                            {teamMemberProps.name}
                                            <img
                                                src={teamMemberProps.photo}
                                                width="150"
                                                alt={"Photo of " + teamMemberProps.name}
                                            />
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    )
                }
            </Grid>
        </React.Fragment>
    );
}

export default TeamMemberGallery;
