import {
    ProjectSampleKeyValues,
    ProjectSampleMilestoneKeyValues,
} from "src/stores/ProjectSamplesStore";

export type ProjectSampleKey = typeof ProjectSampleKeyValues[number];
export type ProjectSampleMilestoneKey = typeof ProjectSampleMilestoneKeyValues[number];

/**
 * A sample project.
 */
interface ProjectSample {
    name: string,
    link: string,
    sampleCanvasLinks: {
        [item in ProjectSampleMilestoneKey]: string
    },
}

/**
 * Type for Collection of sample projects.
 */
export type ProjectSamples = {
    [item in ProjectSampleKey]: ProjectSample
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
export function assertProjectSampleMilestoneKey(value: unknown): asserts value is ProjectSampleMilestoneKey {
    const valid = (ProjectSampleMilestoneKeyValues as unknown as Array<unknown>).includes(value);

    if (!valid) {
        throw new Error(`Invalid AssignmentSampleLinkKey: ${value}`)
    }
}
