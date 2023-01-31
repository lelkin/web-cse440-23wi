import {FunctionComponent} from "react";
import {useAppStore} from "src/stores/AppStoreProvider";
import GeneratedLink from "src/common/GeneratedLink";
import {Box} from "@mui/material";
import * as React from "react";
import {
    assertAssignmentIsCanvasSubmission,
    assertAssignmentMilestoneKey,
    AssignmentMilestoneKey
} from "src/types/AssignmentStore";

interface AssignmentCanvasLinkProps {
    milestone: AssignmentMilestoneKey;
}

export const AssignmentCanvasLink: FunctionComponent<AssignmentCanvasLinkProps> = (props) => {
    // Validate props, TypeScript does not validate in MDX
    assertAssignmentMilestoneKey(props.milestone);

    const assignment = useAppStore().courseDataStore.assignmentStore.milestones[props.milestone];

    // Assert this assignment has a Canvas link
    assertAssignmentIsCanvasSubmission(assignment);

    if (assignment.canvasSubmitLink) {
        return <GeneratedLink href={assignment.canvasSubmitLink}>{assignment.canvasSubmitLink}</GeneratedLink>;
    } else {
        // Not currently reachable, included from old code for future use
        return <Box component="span" sx={{color: "red"}}>Link to be added.</Box>;
    }
}
