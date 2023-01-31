import * as React from 'react';
import { FunctionComponent } from 'react';

import {
    Box,
} from "@mui/material";

import GeneratedLink from '../common/GeneratedLink';

import { useAppStore } from '../stores/AppStoreProvider';
import { CourseDataStore } from "../stores/CourseDataStore";

/**
 * Name of the link.
 */
interface CourseInformationLinkProps {
    linkName: keyof CourseDataStore;
    anchorText?: string;
}

/**
 * Render a named link from the course information (e.g., quantified self paper)
 * 
 * Note: Need this for non-assignment links
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
