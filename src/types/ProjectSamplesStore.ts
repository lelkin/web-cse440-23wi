import {
    ProjectSamplesProjectKeyValues,
    ProjectSamplesMilestoneKeyValues,
} from "src/stores/ProjectSamplesStore";

export type ProjectSamplesProjectKey = typeof ProjectSamplesProjectKeyValues[number];
export type ProjectSamplesMilestoneKey = typeof ProjectSamplesMilestoneKeyValues[number];

/**
 * A sample project.
 */
interface ProjectSample {
    name: string,
    link: string,
    sampleCanvasLinks: {
        [item in ProjectSamplesMilestoneKey]: string
    },
}

/**
 * Type for Collection of sample projects.
 */
export type ProjectSamples = {
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
