import {
    Alert,
} from '@mui/material';

import * as React from 'react';

import GeneratedLink from '../common/GeneratedLink';

import { useAppStore } from '../stores/AppStoreProvider';

import { ProjectSamplesProjectKeyValues } from "src/stores/ProjectSamplesStore";
import { assertProjectSampleMilestoneKey, ProjectSamplesMilestoneKey } from "src/types/ProjectSamplesStore";

interface ProjectMilestoneSamplesProps {
    milestone: ProjectSamplesMilestoneKey;
}

export const ProjectMilestoneSamples: React.FunctionComponent<ProjectMilestoneSamplesProps> = (props) => {
    const store = useAppStore();

    // Validate props, TypeScript does not validate in MDX
    assertProjectSampleMilestoneKey(props.milestone);

    return (
        <React.Fragment>
            <p>
                Samples are intended to illustrate a variety of approaches,
                none of which is intended to be ideal or exemplary.
                Also note details of assignments may have changed since prior offerings,
                so these samples may not completely correspond to the current project.
                Be sure to understand and carefully consider project requirements and
                feedback from the course staff in the context of your own work.
            </p>
            {
                (['assignment1b'].includes(props.milestone)) &&
                (
                    <Alert severity='warning'>
                        Some samples are from a significantly revised prior milestone.
                    </Alert>
                )
            }
            {(() => {
                const projectSamplesStore = store.courseDataStore.projectSamplesStore;

                return ProjectSamplesProjectKeyValues.map((sampleKeyCurrent) => {
                    const sampleCurrent = projectSamplesStore.samples[sampleKeyCurrent];

                    const renderMilestone: ProjectSamplesMilestoneKey = (() => {
                        if (
                            props.milestone == 'assignment1b' &&
                            [
                                'bookwurm', 'dash', 'jasper', 'wishingwell', // 17wi
                                'backtrack', 'hermes', 'pilltender', 'simpark', // 17au
                                'laundr', 'note', 'pawsitive', 'seek', // 19wi
                            ].includes(sampleKeyCurrent)
                        ) {
                            return 'assignment1c';
                        }

                        return props.milestone;
                    })();

                    return (
                        // Ensure we have a sample for this project
                        (!!sampleCurrent.sampleCanvasLinks?.[renderMilestone]) &&
                        (
                            <React.Fragment key={sampleKeyCurrent}>
                                <p>
                                    <GeneratedLink href={sampleCurrent.sampleCanvasLinks[renderMilestone]}>
                                        {'Sample ' + renderMilestone}
                                    </GeneratedLink>
                                    {' from '}
                                    <GeneratedLink href={sampleCurrent.link}>{sampleCurrent.name}</GeneratedLink>
                                </p>
                            </React.Fragment>
                        )
                    );
                });
            })()}
        </React.Fragment>
    )
}
