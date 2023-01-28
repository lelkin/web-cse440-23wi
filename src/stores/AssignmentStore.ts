import { useAppStore } from 'src/stores/AppStoreProvider';

import {
    CalendarItem,
    DueDate,
    Link
} from 'src/types/CourseDataStore';

import {
    formatDateString
} from 'src/stores/CourseDataStore';
import { DateTime } from 'luxon';


// // TODO: Automatically generate these from course start date
export const ASSIGNMENT_DUE_DATES: {[name: string]: string} = {
    "assignment0" : '2023-01-05',
    "assignment1a" : '2023-01-05',
    "assignment1b": '2023-01-11',
    "assignment1b_rev": '2023-01-12',
    "assignment1c": '2023-01-16',
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

export type AssignmentItem = {
    title: string,
    assignmentSubmissionText: string,
    assignmentLink: Link,
    assignmentDueDate: DateTime | null
}

export class AssignmentStore {


    assignmentItems: AssignmentItem[] = [
        //
        // Assignment 0
        //
        {
            title: '0 - Introduction Slide',
            assignmentSubmissionText:  'Uploaded 8:00pm',
            assignmentLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941157',
            assignmentDueDate: DateTime.fromISO('2023-01-05'),
        },
        //
        // Assignment 1
        //
        {
            title: '1a - Individual Brainstorm',
            assignmentSubmissionText:  'Uploaded 8:00pm',
            assignmentLink: "https://canvas.uw.edu/courses/1612132/assignments/7941158",
            assignmentDueDate: DateTime.fromISO('2023-01-05'),
        },
        {
            title: '1b - Group Proposals',
            assignmentSubmissionText: 'Uploaded 3:00pm',
            assignmentLink: 'https://canvas.uw.edu/courses/1612132/assignments/8044498',
            assignmentDueDate: DateTime.fromISO('2023-01-05'),
        },
        {
        
            title: '1b_rev - Group Proposals',
            assignmentSubmissionText: 'Uploaded 8:00pm',
            assignmentLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941160',
            assignmentDueDate: DateTime.fromISO('2023-01-05'),
        },
        {
            title: '1c - Finalized Proposal',
            assignmentSubmissionText: 'Uploaded 3:00pm',
            assignmentLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941161',
            assignmentDueDate: DateTime.fromISO('2023-01-05'),
        },
        
    ];

    //
    // Assignment 2
    //
    dueDateAssignment2a: DueDate =
        'Completed in class ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment2a"]) + '.';
    linkCanvasAssignment2a: Link = null;

    dueDateAssignment2b: DueDate =
        'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment2b"]) + '.';
    linkCanvasAssignment2b: Link = 'https://canvas.uw.edu/courses/1612132/assignments/7941162';

    dueDateAssignment2c: DueDate =
        'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment2c"]) + '.';
    linkCanvasAssignment2c: Link = 'https://canvas.uw.edu/courses/1612132/assignments/7941161';

    dueDateAssignment2d: DueDate =
        'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment2d"]) + '.';
    linkCanvasAssignment2d: Link = 'https://canvas.uw.edu/courses/1612132/assignments/7941164';

    dueDateAssignment2e: DueDate =
        'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment2e"]) + '.';
    linkCanvasAssignment2e: Link = 'https://canvas.uw.edu/courses/1612132/assignments/7941165';

    dueDateAssignment2f: DueDate =
        'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment2f"]) + '.';
    linkCanvasAssignment2f: Link = 'https://canvas.uw.edu/courses/1612132/assignments/7941166';
    dueDateAssignment2f_revised: DueDate =
        'Uploaded 8:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment2f_rev"]) + '.';
    linkCanvasAssignment2f_revised: Link = 'https://canvas.uw.edu/courses/1612132/assignments/7941167';

    dueDateAssignment2g: DueDate =
        'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment2g"]) + '.';
    linkCanvasAssignment2g: Link = 'https://canvas.uw.edu/courses/1612132/assignments/7941168';

    dueDateAssignment2p: DueDate =
        'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment2p"]) + '.';
    linkCanvasAssignment2p: Link = 'https://canvas.uw.edu/courses/1612132/assignments/7941169';

    //
    // Assignment 3
    //
    dueDateAssignment3a: DueDate =
        'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment3a"]) + '.';
    linkCanvasAssignment3a: Link = 'https://canvas.uw.edu/courses/1612132/assignments/7941170';

    dueDateAssignment3b: DueDate =
        'Submitted with Assignment 3c.';

    dueDateAssignment3c: DueDate =
        'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment3c"]) + '.';
    linkCanvasAssignment3c: Link = 'https://canvas.uw.edu/courses/1612132/assignments/7941172';

    dueDateAssignment3d: DueDate =
        'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment3d"]) + '.';
    linkCanvasAssignment3d: Link = 'https://canvas.uw.edu/courses/1612132/assignments/7941173';

    dueDateAssignment3e: DueDate =
        'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment3e"]) + '.';
    linkCanvasAssignment3e: Link = 'https://canvas.uw.edu/courses/1612132/assignments/7941174';

    dueDateAssignment3p: DueDate =
        'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment3p"]) + '.';
    linkCanvasAssignment3p: Link = 'https://canvas.uw.edu/courses/1612132/assignments/7941175';

    //
    // Assignment 4
    //
    dueDateAssignment4web: DueDate =
        'Uploaded 11:59pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment4web"]) + '.';
    linkCanvasAssignment4web: Link = 'https://canvas.uw.edu/courses/1545349/assignments/7332263';

    dueDateAssignment4web_final: DueDate =
        'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment4web_final"]) + '.';
    linkCanvasAssignment4web_final: Link = 'https://canvas.uw.edu/courses/1545349/assignments/7398746';

    dueDateAssignment4poster: DueDate =
        'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment4poster"]) + '.';
    linkCanvasAssignment4poster: Link = 'https://canvas.uw.edu/courses/1545349/assignments/7398750';

    dueDateAssignment4poster_final: DueDate =
        'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment4poster_final"]) + '.';
    linkCanvasAssignment4poster_final: Link = 'https://canvas.uw.edu/courses/1545349/assignments/7398752';

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