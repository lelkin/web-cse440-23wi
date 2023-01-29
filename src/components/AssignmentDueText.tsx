import {assertAssignmentMilestoneKey} from "src/types/AssignmentStore";
import {
    AssignmentMilestoneKey
} from "src/types/AssignmentStore";
import {FunctionComponent} from "react";
import {useAppStore} from "src/stores/AppStoreProvider";
import {Box} from "@mui/material";
import * as React from "react";
import {formatDate} from "src/utils/Dates";

interface AssignmentDueTextProps {
    milestone: AssignmentMilestoneKey;
}

/**
 * Render when an assignment is due.
 */
export const AssignmentDueText: FunctionComponent<AssignmentDueTextProps> = (props) => {
    // Validate props, TypeScript does not validate in MDX
    assertAssignmentMilestoneKey(props.milestone);

    const assignment = useAppStore().courseDataStore.assignmentStore.milestones[props.milestone];

    if ("canvasDueTime" in assignment) {
        return <span>{
            'Uploaded ' +
            assignment.canvasDueTime + ' ' +
            formatDate(assignment.dueDate) + '.'
        }</span>
    } else if ("submitText" in assignment) {
        return <span>{assignment.submitText}</span>;
    } else {
        // Not currently reachable, included from old code for future use
        return <Box component="span" sx={{color: "red"}}>Due date to be added.</Box>;
    }
}
