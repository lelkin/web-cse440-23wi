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
 * - via Canvas, requiring a time and a link.
 * - via something else described text.
 */

type CanvasSubmission = {
    submission: 'canvas',
    canvasDueTime: string,
    canvasSubmitLink: Link,
}
type OtherSubmission = {
    submission: 'other',
    submitText: string,
}
type AssignmentMilestoneSubmission = CanvasSubmission | OtherSubmission;

/**
 * An assignment milestone.
 */
export type AssignmentMilestone = {
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

/**
 * Assert the provided value is a valid AssignmentMilestoneKey.
 */
export function assertAssignmentMilestoneKey(value: unknown): asserts value is AssignmentMilestoneKey {
    const valid = (AssignmentMilestoneKeyValues as unknown as Array<unknown>).includes(value);

    if (!valid) {
        throw new Error(`Invalid AssignmentMilestoneKey: ${value}`)
    }
}

/**
 * Assert the provided value is a valid AssignmentMilestoneKey.
 */
export function assertAssignmentIsCanvasSubmission(value: AssignmentMilestoneSubmission): asserts value is CanvasSubmission {
    const valid = (value.submission === 'canvas');

    if (!valid) {
        throw new Error(`Invalid submission: ${value.submission}`)
    }
}
