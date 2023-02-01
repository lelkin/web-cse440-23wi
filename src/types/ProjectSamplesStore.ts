import {
    ProjectSamplesProjectKeyValues,
    ProjectSamplesMilestoneKeyValues,
} from "src/stores/ProjectSamplesStore";

import {
    Link
} from "src/types/CourseDataStore";

/**
 * Key for a sample project.
 */
export type ProjectSamplesProjectKey = typeof ProjectSamplesProjectKeyValues[number];

/**
 * Key for a sample project milestone.
 */
export type ProjectSamplesMilestoneKey = typeof ProjectSamplesMilestoneKeyValues[number];

/**
 * Type for a sample project.
 *
 * Includes a link to each sample project milestone.
 */
interface ProjectSample {
    name: string,
    link: Link,
    sampleCanvasLinks: {
        [item in ProjectSamplesMilestoneKey]: Link
    },
}

/**
 * Type for collection of sample projects.
 */
type ProjectSamples = {
    [item in ProjectSamplesProjectKey]: ProjectSample
}

/**
 * Type for the ProjectSamplesStore.
 */
export interface ProjectSamplesStore {
    samples: ProjectSamples,
}

/**
 * Assert the provided value is a valid ProjectSampleMilestoneKey.
 */
export function assertProjectSampleMilestoneKey(value: unknown): asserts value is ProjectSamplesMilestoneKey {
    const valid = (ProjectSamplesMilestoneKeyValues as unknown as Array<unknown>).includes(value);

    if (!valid) {
        throw new Error(`Invalid AssignmentSampleLinkKey: ${value}`)
    }
}
