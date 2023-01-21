import * as React from 'react';
import { FunctionComponent } from 'react';

import {
    Box,
} from "@mui/material";

import GeneratedLink from '../common/GeneratedLink';

import { useAppStore } from '../stores/AppStoreProvider';
import { CourseDataStore } from "../stores/CourseDataStore";

/**
 * Name of the assignment date.
 */
interface CourseInformationDueDateProps {
    dueDateName: keyof CourseDataStore;
}

/**
 * Assignment title
 */
interface CourseInformationDueDateNewProps {
    assignmentTitle: keyof CourseDataStore;
}

/**
 * Render a named assignment date from the course information.
 */
export const CourseInformationDueDate: FunctionComponent<CourseInformationDueDateProps> = (props) => {
    const store = useAppStore();

    // Check this because TypeScript doesn't ensure in MDX files
    if (!(props.dueDateName in store.courseDataStore)) {
        throw new Error(
            `dueDateName '${props.dueDateName}' must be in store.courseDataStore.`
        );
    }
    if (!(props.dueDateName.startsWith('dueDate'))) {
        throw new Error(
            `dueDateName '${props.dueDateName}' must start with 'dueDate'.`
        );
    }

    const dueDateText = store.courseDataStore[props.dueDateName] as string;

    if (dueDateText) {
        return <span>{dueDateText}</span>;
    } else {
        return <Box component="span" sx={{color: "red"}}>Due date to be added</Box>;
    }
}

/**
 * Render a named assignment date from the course information.
 */
export const CourseInformationDueDateNew: FunctionComponent<CourseInformationDueDateNewProps> = (props) => {
    const store = useAppStore();

    const assignmentItem = store.courseDataStore.getAssignmentItemByTitle(props.assignmentTitle);

    if (typeof assignmentItem == 'undefined') {
        throw new Error(
            `Assignment '${props.assignmentTitle}' must be in store.courseDataStore.`
        );
    }

    const dueDateText = assignmentItem.assignmentDueDate;

    if (typeof dueDateText == 'string') {
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
 * Assignment title
 */
interface CourseInformationLinkNewProps {
    assignmentTitle: keyof CourseDataStore;
    anchorText?: string;
}

/**
 * Render a named link from the course information.
 */
export const CourseInformationLink: FunctionComponent<CourseInformationLinkProps> = (props) => {
    const store = useAppStore();

    // Check this because TypeScript doesn't ensure in MDX files
    if (!(props.linkName in store.courseDataStore)) {
        throw new Error('linkName must be in store.courseDataStore.');
    }
    if (!(props.linkName.startsWith('link'))) {
        throw new Error('linkName must start with "link".');
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
 * Render a named link from the course information.
 */
export const CourseInformationLinkNew: FunctionComponent<CourseInformationLinkNewProps> = (props) => {
    const store = useAppStore();

    const assignmentItem = store.courseDataStore.getAssignmentItemByTitle(props.assignmentTitle);

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
