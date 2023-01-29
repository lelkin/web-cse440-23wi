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
 * An assignment milestone.
 */
interface AssignmentMilestone {
    title: string,
    canvasLink: Link,

    assignmentDueDate: DateTime | null
    assignmentSubmissionText: string,
}

/**
 * Type for the AssignmentStore.
 */
export interface AssignmentStore {
    milestones: {
        [item in AssignmentMilestoneKey]: AssignmentMilestone
    },
}
