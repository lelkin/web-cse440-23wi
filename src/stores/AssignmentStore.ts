import {
    AssignmentStore,
} from "src/types/AssignmentStore";

import {
    DateTime,
} from 'luxon';


/**
 * A key for each assignment milestone.
 */
export const AssignmentMilestoneKeyValues = [
    'assignment0',
    'assignment1a',
    'assignment1b',
    'assignment1b_rev',
    'assignment1c',
    'assignment2a',
    'assignment2b',
    'assignment2c',
    'assignment2d',
    'assignment2e',
    'assignment2f',
    'assignment2f_rev',
    'assignment2g',
    'assignment2p',
    'assignment3a',
    'assignment3b',
    'assignment3c',
    'assignment3d',
    'assignment3e',
    'assignment3p',
    'assignment4web',
    'assignment4web_final',
    'assignment4poster',
    'assignment4poster_final',
    'assignment4poster_session',
] as const;


const ASSIGNMENT_STORE: AssignmentStore = {
    milestones: {
        //
        // Assignment 0
        //
        assignment0: {
            title: '0 - Introduction Slide',
            dueDate: DateTime.fromISO('2023-01-05'),

            submission: 'canvas',
            canvasDueTime: '8:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941157',
        },
        //
        // Assignment 1
        //
        assignment1a: {
            title: '1a - Individual Brainstorm',
            dueDate: DateTime.fromISO('2023-01-05'),

            submission: 'canvas',
            canvasDueTime: '8:00pm',
            canvasSubmitLink: "https://canvas.uw.edu/courses/1612132/assignments/7941158",
        },
        assignment1b: {
            title: '1b - Group Proposals',
            dueDate: DateTime.fromISO('2023-01-11'),

            submission: 'canvas',
            canvasDueTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/8044498',
        },
        assignment1b_rev: {
            title: '1b_rev - Group Proposals',
            dueDate: DateTime.fromISO('2023-01-12'),

            submission: 'canvas',
            canvasDueTime: '8:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941160',
        },
        assignment1c: {
            title: '1c - Finalized Proposal',
            dueDate: DateTime.fromISO('2023-01-16'),

            submission: 'canvas',
            canvasDueTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941161',
        },
        //
        // Assignment 2
        //
        assignment2a: {
            title: '2a - Project Ideation',
            dueDate: DateTime.fromISO('2023-01-17'),

            submission: 'other',
            submitText: 'Completed in class.',
        },
        assignment2b: {
            title: '2b - Design Research Plan',
            dueDate: DateTime.fromISO('2023-01-19'),

            submission: 'canvas',
            canvasDueTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941162',
        },
        assignment2c: {
            title: '2c - Design Research Check-In',
            dueDate: DateTime.fromISO('2023-01-23'),

            submission: 'canvas',
            canvasDueTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941161',
        },
        assignment2d: {
            title: '2d - Design Research Review',
            dueDate: DateTime.fromISO('2023-01-26'),

            submission: 'canvas',
            canvasDueTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941164',
        },
        assignment2e: {
            title: '2e - Task Review',
            dueDate: DateTime.fromISO('2023-01-30'),

            submission: 'canvas',
            canvasDueTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941165',
        },
        assignment2f: {
            title: '2f - Design Check-In',
            dueDate: DateTime.fromISO('2023-02-01'),

            submission: 'canvas',
            canvasDueTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941166',
        },
        assignment2f_rev: {
            title: '2f_rev - Design Check-In',
            dueDate: DateTime.fromISO('2023-02-02'),

            submission: 'canvas',
            canvasDueTime: '8:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941167',
        },
        assignment2g: {
            title: '2g - Design Review',
            dueDate: DateTime.fromISO('2023-02-06'),

            submission: 'canvas',
            canvasDueTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941168',
        },
        assignment2p: {
            title: '2p - Presentation',
            dueDate: DateTime.fromISO('2023-02-08'),

            submission: 'canvas',
            canvasDueTime: '8:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941169',
        },
        //
        // Assignment 3
        //
        assignment3a: {
            title: '3a - Paper Prototype',
            dueDate: DateTime.fromISO('2023-02-13'),

            submission: 'canvas',
            canvasDueTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941170',
        },
        assignment3b: {
            title: '3b - Heuristic Evaluation',
            dueDate: DateTime.fromISO('2023-02-14'),

            submission: 'other',
            submitText: 'Submitted with Assignment 3c.',
        },
        assignment3c: {
            title: '3c - Usability Testing Check-In',
            dueDate: DateTime.fromISO('2023-02-16'),

            submission: 'canvas',
            canvasDueTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941172',
        },
        assignment3d: {
            title: '3d - Usability Testing Review',
            dueDate: DateTime.fromISO('2023-02-23'),

            submission: 'canvas',
            canvasDueTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941173',
        },
        assignment3e: {
            title: '3e - Digital Mockup',
            dueDate: DateTime.fromISO('2023-02-27'),

            submission: 'canvas',
            canvasDueTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941174',
        },
        assignment3p: {
            title: '3p - Presentation',
            dueDate: DateTime.fromISO('2023-03-01'),

            submission: 'canvas',
            canvasDueTime: '8:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941175',
        },
        //
        // Assignment 4
        //
        assignment4web: {
            title: '4web - Web Post',
            dueDate: DateTime.fromISO('2023-03-06'),

            submission: 'canvas',
            canvasDueTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1545349/assignments/7332263',
        },
        assignment4web_final: {
            title: '4web_final - Web Post',
            dueDate: DateTime.fromISO('2023-03-07'),

            submission: 'canvas',
            canvasDueTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1545349/assignments/7398746',
        },
        assignment4poster: {
            title: '4poster - Poster and Pitch',
            dueDate: DateTime.fromISO('2023-03-08'),

            submission: 'canvas',
            canvasDueTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1545349/assignments/7398750',
        },
        assignment4poster_final: {
            title: '4poster_final - Poster and Pitch',
            dueDate: DateTime.fromISO('2023-03-09'),

            submission: 'canvas',
            canvasDueTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1545349/assignments/7398752',
        },
        assignment4poster_session: {
            title: '4poster_session - Poster Session',
            dueDate: DateTime.fromISO('2023-03-13'),

            submission: 'other',
            submitText: '11:00 - 12:00 in the CSE Atrium.'
        }
    }
}

export const getAssignmentStore: () => AssignmentStore = () => { return ASSIGNMENT_STORE; }
