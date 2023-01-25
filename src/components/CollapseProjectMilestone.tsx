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
    CourseInformationDueDate,
    CourseInformationDueDateNew,
} from 'src/components/CourseInformation';

import {
    CourseDataStore
} from "src/stores/CourseDataStore";

//
// Properties
//
interface CollapseProjectMilestoneProps extends React.PropsWithChildren<{}> {
    heading: string,
    dueDateName: keyof CourseDataStore,
    revisionDueDateName?: keyof CourseDataStore,
}

interface CollapseProjectMilestonePropsNew extends React.PropsWithChildren<{}> {
    heading: string,
    assignmentTitle: keyof CourseDataStore,
    revisionTitle?: keyof CourseDataStore,
}

/**
 */
export const CollapseProjectMilestone: React.FunctionComponent<CollapseProjectMilestoneProps> = observer((props: CollapseProjectMilestoneProps) => {
    return <CollapseWithHeader header={
        <Stack>
            <h3 id={anchorText(props.heading)}>{props.heading}</h3>
            <p><CourseInformationDueDate dueDateName={props.dueDateName} /></p>
            {!!props.revisionDueDateName && (
                <p>Revision: <CourseInformationDueDate dueDateName={props.revisionDueDateName} /></p>
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
            <p><CourseInformationDueDateNew assignmentTitle={props.assignmentTitle} /></p>
            {!!props.revisionTitle && (
                <p>Revision: <CourseInformationDueDateNew assignmentTitle={props.assignmentTitle} /></p>
            )}
        </Stack>
    }>
        {props.children}
    </CollapseWithHeader>
});

//export default CollapseProjectMilestoneNew;
