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
    AssignmentDueDate,
    AssignmentDueDateNew,
} from 'src/components/CourseInformation';

import {
    AssignmentStore,
    AssignmentItem
} from "src/stores/AssignmentStore";

//
// Properties
//
interface CollapseProjectMilestoneProps extends React.PropsWithChildren<{}> {
    heading: string,
    dueDateName: keyof AssignmentStore,
    revisionDueDateName?: keyof AssignmentStore,
}

interface CollapseProjectMilestonePropsNew extends React.PropsWithChildren<{}> {
    heading: string,
    assignmentTitle: AssignmentItem["title"],
    revisionTitle?: AssignmentItem["title"],
}

/**
 */
export const CollapseProjectMilestone: React.FunctionComponent<CollapseProjectMilestoneProps> = observer((props: CollapseProjectMilestoneProps) => {
    return <CollapseWithHeader header={
        <Stack>
            <h3 id={anchorText(props.heading)}>{props.heading}</h3>
            <p><AssignmentDueDate dueDateName={props.dueDateName} /></p>
            {!!props.revisionDueDateName && (
                <p>Revision: <AssignmentDueDate dueDateName={props.revisionDueDateName} /></p>
            )}
        </Stack>
    }>
        {props.children}
    </CollapseWithHeader>
});


/**
 * TODO: Resolve existence of two versions of this.
 */
export const CollapseProjectMilestoneNew: React.FunctionComponent<CollapseProjectMilestonePropsNew> = observer((props: CollapseProjectMilestonePropsNew) => {
    let heading = props.heading ? props.heading : props.assignmentTitle;
    
    return <CollapseWithHeader header={
        <Stack>
            <h3 id={anchorText(heading)}>{heading}</h3>
            <p><AssignmentDueDateNew assignmentTitle={props.assignmentTitle} /></p>
            {!!props.revisionTitle && (
                <p>Revision: <AssignmentDueDateNew assignmentTitle={props.assignmentTitle} /></p>
            )}
        </Stack>
    }>
        {props.children}
    </CollapseWithHeader>
});

//export default CollapseProjectMilestoneNew;
