import { useAppStore } from 'src/stores/AppStoreProvider';

import {
    AssignmentStore,
} from "src/types/AssignmentStore";

import {
    CalendarItem,
    DueDate,
    Link,
} from 'src/types/CourseDataStore';

import {
    formatDateString
} from 'src/stores/CourseDataStore';

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
] as const;


/*
// // TODO: Automatically generate these from course start date
export const ASSIGNMENT_DUE_DATES: {[name: string]: string} = {
    "assignment2a": '2023-01-17',
    "assignment2b": '2023-01-19',
    "assignment2c": '2023-01-23',
    "assignment2d": '2023-01-26',
    "assignment2e": '2023-01-30',
    "assignment2f": '2023-02-01',
    "assignment2f_rev": '2023-02-02',
    "assignment2g": '2023-02-06',
    "assignment2p": '2023-02-08',
    "assignment3a": '2023-02-13',
    "assignment3b": '2023-02-14',
    "assignment3c": '2023-02-16',
    "assignment3d": '2023-02-23',
    "assignment3e": '2023-02-27',
    "assignment3p": '2023-03-01',
    "assignment4web": '2022-05-30',
    "assignment4web_final": '2023-03-07',
    "assignment4poster": '2023-03-08',
    "assignment4poster_final": '2023-03-09'
};
 */

/*
export type AssignmentItem = {
    title: string,
    assignmentSubmissionText: string,
    assignmentLink: Link,
    assignmentDueDate: DateTime | null
}
 */

const ASSIGNMENT_STORE: AssignmentStore = {
    milestones: {
        //
        // Assignment 0
        //
        assignment0: {
            title: '0 - Introduction Slide',
            dueDate: DateTime.fromISO('2023-01-05'),

            canvasSubmitTime: '8:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941157',
        },
        //
        // Assignment 1
        //
        assignment1a: {
            title: '1a - Individual Brainstorm',
            dueDate: DateTime.fromISO('2023-01-05'),

            canvasSubmitTime: '8:00pm',
            canvasSubmitLink: "https://canvas.uw.edu/courses/1612132/assignments/7941158",
        },
        assignment1b: {
            title: '1b - Group Proposals',
            dueDate: DateTime.fromISO('2023-01-11'),

            canvasSubmitTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/8044498',
        },
        assignment1b_rev: {
            title: '1b_rev - Group Proposals',
            dueDate: DateTime.fromISO('2023-01-12'),

            canvasSubmitTime: '8:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941160',
        },
        assignment1c: {
            title: '1c - Finalized Proposal',
            dueDate: DateTime.fromISO('2023-01-16'),

            canvasSubmitTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941161',
        },
        //
        // Assignment 2
        //
        assignment2a: {
            title: '2a - Project Ideation',
            dueDate: DateTime.fromISO('2023-01-17'),

            submitText: 'Completed in class.',
        },
        assignment2b: {
            title: '2b - Design Research Plan',
            dueDate: DateTime.fromISO('2023-01-19'),

            canvasSubmitTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941162',
        },
        assignment2c: {
            title: '2c - Design Research Check-In',
            dueDate: DateTime.fromISO('2023-01-23'),

            canvasSubmitTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941161',
        },
        assignment2d: {
            title: '2d - Design Research Review',
            dueDate: DateTime.fromISO('2023-01-26'),

            canvasSubmitTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941164',
        },
        assignment2e: {
            title: '2e - Task Review',
            dueDate: DateTime.fromISO('2023-01-30'),

            canvasSubmitTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941165',
        },
        assignment2f: {
            title: '2f - Design Check-In',
            dueDate: DateTime.fromISO('2023-02-01'),

            canvasSubmitTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941166',
        },
        assignment2f_rev: {
            title: '2f_rev - Design Check-In',
            dueDate: DateTime.fromISO('2023-02-02'),

            canvasSubmitTime: '8:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941167',
        },
        assignment2g: {
            title: '2g - Design Review',
            dueDate: DateTime.fromISO('2023-02-06'),

            canvasSubmitTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941168',
        },
        assignment2p: {
            title: '2p - Presentation',
            dueDate: DateTime.fromISO('2023-02-08'),

            canvasSubmitTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941169',
        },
        //
        // Assignment 3
        //
        assignment3a: {
            title: '3a - Paper Prototype',
            dueDate: DateTime.fromISO('2023-02-13'),

            canvasSubmitTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941170',
        },
        assignment3b: {
            title: '3b - Heuristic Evaluation',
            dueDate: DateTime.fromISO('2023-02-14'),

            submitText: 'Submitted with Assignment 3c.',
        },
        assignment3c: {
            title: '3c - Usability Testing Check-In',
            dueDate: DateTime.fromISO('2023-02-16'),

            canvasSubmitTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941172',
        },
        assignment3d: {
            title: '3d - Usability Testing Review',
            dueDate: DateTime.fromISO('2023-02-23'),

            canvasSubmitTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941173',
        },
        assignment3e: {
            title: '3e - Digital Mockup',
            dueDate: DateTime.fromISO('2023-02-27'),

            canvasSubmitTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941174',
        },
        assignment3p: {
            title: '3p - Presentation',
            dueDate: DateTime.fromISO('2023-03-01'),

            canvasSubmitTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941175',
        },
        //
        // Assignment 4
        //
        assignment4web: {
            title: '4web - Web Post',
            dueDate: DateTime.fromISO('2023-03-06'),

            canvasSubmitTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1545349/assignments/7332263',
        },
        assignment4web_final: {
            title: '4web_final - Web Post',
            dueDate: DateTime.fromISO('2023-03-07'),

            canvasSubmitTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1545349/assignments/7398746',
        },
        assignment4poster: {
            title: '4poster - Poster and Pitch',
            dueDate: DateTime.fromISO('2023-03-08'),

            canvasSubmitTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1545349/assignments/7398750',
        },
        assignment4poster_final: {
            title: '4poster_final - Poster and Pitch',
            dueDate: DateTime.fromISO('2023-03-09'),

            canvasSubmitTime: '3:00pm',
            canvasSubmitLink: 'https://canvas.uw.edu/courses/1545349/assignments/7398752',
        },
    }
}

export const getAssignmentStore: () => AssignmentStore = () => { return ASSIGNMENT_STORE; }

/*
export class AssignmentStore {

    dueDateAssignment4poster_session: DueDate = '11:00 - 12:00 ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment4poster_final"]) + ' in the CSE Atrium.';

    // Assign values for assignmentDueDate from courseCalendar when instantiated
    // TODO: I like this better than going through courseDataStore to courseCalendarStore becuase the assignment title, link, and date are all in the same assignment item, but I'm happy to change it if you don't agree.
    // TODO: Should assignments be allowed to have multiple due dates?
    // TODO: How to handle due date to be added? If it's in the course calendar, it has a date, right?
    constructor(calendarItems: CalendarItem[]) {

        this.assignmentItems.forEach(

            (assignmentItem) => {
                // find corresponding calendar item.

                const assignmentCalendarItem = calendarItems.find (
                    function(calendarItem) {
                        return (calendarItem.title == assignmentItem.title && calendarItem.type == 'assignment');
                    }
                )

                // assignment not in calendar
                if(typeof assignmentCalendarItem == 'undefined') {
                    throw new Error (
                        `Assignment '${assignmentItem.title}' must be in store.courseDataStore.`
                    )
                }

                // assignment has multiple due dates
                if('dates' in assignmentCalendarItem){
                    throw new Error (
                        `Assignment '${assignmentItem.title}' should only have one due date.`
                    )
                }

                assignmentItem.assignmentDueDate = assignmentCalendarItem.date;
                return assignmentItem;
            }
        )
    }


    getAssignmentItemByTitle(itemTitle: string): AssignmentItem | undefined {
        const store = useAppStore();

        return store.courseDataStore.assignmentStore.assignmentItems.find(
            function(assignmentItem) {
                return assignmentItem.title == itemTitle;
            }
        )
    }

}
*/
