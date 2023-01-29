import {
    Link
} from "src/types/CourseDataStore";

import {
    DateTime
} from "luxon";

import {
    AssignmentMilestoneKeyValues
} from "src/stores/AssignmentStore";

/**
 * Key for an assignment milestone.
 */
export type AssignmentMilestoneKey = typeof AssignmentMilestoneKeyValues[number];

/**
 * Information on how an assignment milestone is submitted.
 *
 * Either:
 * - via Canvas, requiring a link and a time.
 * - via whatever is described in submitText.
 */
type AssignmentMilestoneSubmission = {
    canvasSubmitLink: Link,
    canvasSubmitTime: string,
} | {
    submitText: string,
}

/**
 * An assignment milestone.
 */
type AssignmentMilestone = {
    title: string,
    dueDate: DateTime,
} & AssignmentMilestoneSubmission;

/**
 * Type for the AssignmentStore.
 */
export interface AssignmentStore {
    milestones: {
        [item in AssignmentMilestoneKey]: AssignmentMilestone
    },
}
