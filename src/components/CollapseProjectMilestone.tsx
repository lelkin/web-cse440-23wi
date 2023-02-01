import {
    observer
} from "mobx-react-lite";

import {
    Stack,
} from "@mui/material";

import * as React from "react";

import {
    CollapseWithHeader
} from 'src/common/CollapseWithHeader';

import {
    anchorText
} from 'src/common/GeneratedAnchor';

import {
    AssignmentDueText
} from "src/components/AssignmentDueText";

import {
    assertAssignmentMilestoneKey,
    AssignmentMilestoneKey
} from "src/types/AssignmentStore";
import {getAppStore} from "src/stores/AppStore";

//
// Properties
//
interface CollapseProjectMilestoneProps extends React.PropsWithChildren<{}> {
    milestone: AssignmentMilestoneKey,
    revisionMilestone?: AssignmentMilestoneKey,
}

/**
 */
export const CollapseProjectMilestone: React.FunctionComponent<CollapseProjectMilestoneProps> = observer((props: CollapseProjectMilestoneProps) => {
    // Validate props, TypeScript does not validate in MDX
    assertAssignmentMilestoneKey(props.milestone);
    if(props.revisionMilestone) {
        assertAssignmentMilestoneKey(props.revisionMilestone);
    }

    const assignmentStore = getAppStore().courseDataStore.assignmentStore;

    const collapseTitle = assignmentStore.milestones[props.milestone].title;

    return <CollapseWithHeader header={
        <Stack>
            <h3 id={anchorText(collapseTitle)}>{collapseTitle}</h3>
            <p><AssignmentDueText milestone={props.milestone} /></p>
            {!!props.revisionMilestone && (
                <p>Revision: <AssignmentDueText milestone={props.revisionMilestone} /></p>
            )}
        </Stack>
    }>
        {props.children}
    </CollapseWithHeader>
});
