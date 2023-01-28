import * as React from 'react';
import { FunctionComponent } from 'react';

import {
    Box,
} from "@mui/material";

import GeneratedLink from '../common/GeneratedLink';

import { useAppStore } from '../stores/AppStoreProvider';
import { CourseDataStore, formatDateStringNew } from "../stores/CourseDataStore";
import { AssignmentStore } from "../stores/AssignmentStore";
import { DateTime } from 'luxon';

/**
 * Name of the assignment date.
 */
interface AssignmentDueDateProps {
    dueDateName: keyof AssignmentStore;
}

/**
 * Assignment title
 */
interface AssignmentDueDateNewProps {
    assignmentTitle: keyof AssignmentStore;
}

/**
 * Render a named assignment date from the course information.
 */
export const AssignmentDueDate: FunctionComponent<AssignmentDueDateProps> = (props) => {
    const store = useAppStore();

    // Check this because TypeScript doesn't ensure in MDX files
    if (!(props.dueDateName in store.courseDataStore.assignmentStore)) {
        throw new Error(
            `dueDateName '${props.dueDateName}' must be in store.courseDataStore.`
        );
    }
    if (!(props.dueDateName.startsWith('dueDate'))) {
        throw new Error(
            `dueDateName '${props.dueDateName}' must start with 'dueDate'.`
        );
    }

    const dueDateText = store.courseDataStore.assignmentStore[props.dueDateName] as string;

    if (dueDateText) {
        return <span>{dueDateText}</span>;
    } else {
        return <Box component="span" sx={{color: "red"}}>Due date to be added</Box>;
    }
}

// /**
//  * Render a named assignment date from the course information.
//  */
// export const AssignmentDueDateNew: FunctionComponent<AssignmentDueDateNewProps> = (props) => {
//     const store = useAppStore();

//     const assignmentItem = store.courseDataStore.assignmentStore.getAssignmentItemByTitle(props.assignmentTitle);

//     if (typeof assignmentItem == 'undefined') {
//         throw new Error(
//             `Assignment '${props.assignmentTitle}' must be in store.courseDataStore.`
//         );
//     }

//     const dueDateText = assignmentItem.assignmentDueDate;

//     if (typeof dueDateText == 'string') {
//         return <span>{dueDateText}</span>;
//     } else {
//         return <Box component="span" sx={{color: "red"}}>Due date to be added</Box>;
//     }
// }

/**
 * Render a named assignment date from the course information.
 */
export const AssignmentDueDateNew: FunctionComponent<AssignmentDueDateNewProps> = (props) => {
    const store = useAppStore();

    const assignmentItem = store.courseDataStore.assignmentStore.getAssignmentItemByTitle(props.assignmentTitle);

    if (typeof assignmentItem == 'undefined') {
        throw new Error(
            `Assignment '${props.assignmentTitle}' must be in store.courseDataStore.`
        );
    }

    const dueDate = assignmentItem.assignmentDueDate;

    if (dueDate instanceof DateTime) {
        const dueDateText = assignmentItem.assignmentSubmissionText + ' ' + formatDateStringNew(dueDate) + '.';
        return <span>{dueDateText}</span>;
    } else {
        return <Box component="span" sx={{color: "red"}}>Due date to be added</Box>;
    }
}


/**
 * Name of the link.
 */
interface CourseInformationLinkProps {
    linkName: keyof CourseDataStore;
    anchorText?: string;
}

/**
 * Name of the link.
 */
interface AssignmentLinkProps {
    linkName: keyof AssignmentStore;
    anchorText?: string;
}

/**
 * Assignment title
 */
interface AssignmentLinkNewProps {
    assignmentTitle: keyof AssignmentStore;
    anchorText?: string;
}

/**
 * Render a named link from the course information (e.g., quantified self paper)
 */
export const CourseInformationLink: FunctionComponent<CourseInformationLinkProps> = (props) => {
    const store = useAppStore();
    
    // Check this because TypeScript doesn't ensure in MDX files
    if (!(props.linkName in store.courseDataStore)) {
        throw new Error(
            `linkName '${props.linkName}' must be in store.courseDataStore.`
        );
    }
    if (!(props.linkName.startsWith('link'))) {
        throw new Error(
            `linkName '${props.linkName}' must start with "link".`
        );
    }

    const link = store.courseDataStore[props.linkName] as string;
    let anchorText = link;
    if (props.anchorText) {
        anchorText = props.anchorText;
    }

    if (link) {
        return <GeneratedLink href={link}>{anchorText}</GeneratedLink>;
    } else {
        return <Box component="span" sx={{color: "red"}}>Link to be added</Box>;
    }
}

/**
 * Render a named link from the old format of assignments
 */
export const AssignmentLink: FunctionComponent<AssignmentLinkProps> = (props) => {
    const store = useAppStore();
    
    // Check this because TypeScript doesn't ensure in MDX files
    if (!(props.linkName in store.courseDataStore.assignmentStore)) {
        throw new Error(
            `linkName '${props.linkName}' must be in store.courseDataStore.assignmentStore.`
        );
    }
    if (!(props.linkName.startsWith('link'))) {
        throw new Error(
            `linkName '${props.linkName}' must start with "link".`
        );
    }

    const link = store.courseDataStore.assignmentStore[props.linkName] as string;
    let anchorText = link;
    if (props.anchorText) {
        anchorText = props.anchorText;
    }

    if (link) {
        return <GeneratedLink href={link}>{anchorText}</GeneratedLink>;
    } else {
        return <Box component="span" sx={{color: "red"}}>Link to be added</Box>;
    }
}

/**
 * Render a named link from the new format of assignments
 */
export const AssignmentLinkNew: FunctionComponent<AssignmentLinkNewProps> = (props) => {
    const store = useAppStore();

    const assignmentItem = store.courseDataStore.assignmentStore.getAssignmentItemByTitle(props.assignmentTitle);

    if (typeof assignmentItem == 'undefined') {
        throw new Error(
            `Assignment '${props.assignmentTitle}' must be in store.courseDataStore.`
        );
    }

    const link = assignmentItem.assignmentLink as string;
    let anchorText = link;

    if (props.anchorText) {
        anchorText = props.anchorText;
    }

    if (link) {
        return <GeneratedLink href={link}>{anchorText}</GeneratedLink>;
    } else {
        return <Box component="span" sx={{color: "red"}}>Link to be added</Box>;
    }
}
