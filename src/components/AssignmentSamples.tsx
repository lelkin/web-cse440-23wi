import {
    Alert,
} from '@mui/material';

import * as React from 'react';
import { FunctionComponent } from 'react';

import GeneratedLink from '../common/GeneratedLink';

import { useAppStore } from '../stores/AppStoreProvider';

interface AssignmentSamplesProps {
    milestone: '1b' | '1c';
}

export const AssignmentSamples: FunctionComponent<AssignmentSamplesProps> = (props) => {
    const store = useAppStore();

    return (
        <React.Fragment>
            {
                ['1b'].includes(props.milestone) && (
                    <Alert severity='warning'>
                        Some samples are from a significantly revised prior milestone.
                    </Alert>
                )
            }
            <p>
                Samples are intended to illustrate a variety of approaches,
                none of which is intended to be ideal or exemplary.
                Also note details of assignments may have changed since prior offerings,
                so these samples may not completely correspond to the current project.
                Be sure to understand and carefully consider project requirements and
                feedback from the course staff in the context of your own work.
            </p>
            {
                store.courseDataStore.projectSamples.map(
                    (sampleCurrent) => {
                        const renderMilestone = (() => {
                            if (
                                props.milestone == '1b' &&
                                [
                                    'BookWurm', 'Dash', 'Jasper', 'Wishing Well', // 17wi
                                    'BackTrack', 'Hermes', 'Pilltender', 'SimPark', // 17au
                                    'Laundr', 'notE', 'Pawsitive', 'SEEK', // 19wi
                                ].includes(sampleCurrent.name)
                            ) {
                                return '1c';
                            }

                            return props.milestone;
                        })();

                        return (
                            // Ensure we have a sample for this project
                            (renderMilestone in sampleCurrent.samples) &&
                            // Render the sample
                            (
                                <React.Fragment
                                    // Generate a unique key using props.milestone.
                                    // Do not use renderMilestone, because they may not be equal.
                                    // If two milestones were to alias the same renderMilestone,
                                    // the resulting keys would not be unique.
                                    key={props.milestone + sampleCurrent.name}
                                >
                                    <p>
                                        <GeneratedLink href={sampleCurrent.samples[renderMilestone]}>
                                            {'Sample ' + renderMilestone}
                                        </GeneratedLink>
                                        {' from '}
                                        <GeneratedLink href={sampleCurrent.link}>{sampleCurrent.name}</GeneratedLink>
                                    </p>
                                </React.Fragment>
                            )
                        )
                    }
                )
            }
        </React.Fragment>
    )
}
