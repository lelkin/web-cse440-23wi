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
 * Render a named assignment date from the course information.
 */
export const CourseInformationDueDate: FunctionComponent<CourseInformationDueDateProps> = (props) => {
    const store = useAppStore();

    // Check this because TypeScript doesn't ensure in MDX files
    if (!(props.dueDateName in store.courseInformation)) {
        throw new Error(
            `dueDateName '${props.dueDateName}' must be in store.courseInformation.`
        );
    }
    if (!(props.dueDateName.startsWith('dueDate'))) {
        throw new Error(
            `dueDateName '${props.dueDateName}' must start with 'dueDate'.`
        );
    }

    const dueDateText = store.courseInformation[props.dueDateName] as string;

    if (dueDateText) {
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
 * Render a named link from the course information.
 */
export const CourseInformationLink: FunctionComponent<CourseInformationLinkProps> = (props) => {
    const store = useAppStore();

    // Check this because TypeScript doesn't ensure in MDX files
    if (!(props.linkName in store.courseInformation)) {
        throw new Error('linkName must be in store.courseInformation.');
    }
    if (!(props.linkName.startsWith('link'))) {
        throw new Error('linkName must start with "link".');
    }

    const link = store.courseInformation[props.linkName] as string;
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
