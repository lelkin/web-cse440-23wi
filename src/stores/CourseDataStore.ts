import { useAppStore } from 'src/stores/AppStoreProvider';

import {
    AssignmentItem,
    CalendarDate,
    CalendarItem,
    CalendarWeek,
    DueDate,
    Link,
    TimeAndLocation
} from 'src/types/CourseDataStore';

// info store
import {
    DateTime,
    DateTimeFormatOptions,
} from 'luxon';
import {ProjectSamplesStore, ProjectSamplesStoreImpl} from "src/stores/ProjectSamplesStore";

// info store
const DATE_FORMAT_OPTIONS = {
    month: 'long',
    day: 'numeric',
    weekday: 'long'
} as DateTimeFormatOptions;

function formatDateString(dateString: string): string {
    return DateTime.fromISO(dateString).toLocaleString(DATE_FORMAT_OPTIONS);
}
// end info store

const LECTURE_TIME_AND_LOCATION: TimeAndLocation = '10:00 - 11:20 | NAN 181';
const SECTION_TIME_AND_LOCATIONS: TimeAndLocation[] = [
    '10:30 - 11:20 | MGH 058',
    '11:30 - 12:20 | MGH 058',
    '12:30 - 1:20 | MGH 058',
    '1:30 - 2:20 | MGH 058',
]
const SECTION_TIME_AND_LOCATIONS_PRESENTATIONS = SECTION_TIME_AND_LOCATIONS;

/*
const EXAM_REVIEW_TIME_AND_LOCATION: TimeAndLocation = '6:00 - 6:50 | Zoom';
*/
const POSTER_SESSION_TIME_AND_LOCATION: TimeAndLocation = '11:00 - 12:00 | CSE Atrium';

const OFFICE_HOUR_LISA_TIME_AND_LOCATION: TimeAndLocation = '1:00 - 2:00 | CSE 624';
const OFFICE_HOUR_SIMONA_TIME_AND_LOCATION: TimeAndLocation = '2:30 - 3:30 | CSE 3rd Floor Breakout';




// TODO: Automatically generate these from course start date
const ASSIGNMENT_DUE_DATES: {[name: string]: string} = {
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


export class CourseDataStore {
    /**
     * Basic course information.
     */

    // Link to course Canvas
    linkCanvas: Link = 'https://canvas.uw.edu/courses/1612132';

    // Link to course GitHub
    linkGitHub: Link = 'https://github.com/uwcse440/web-cse440-23wi';

    // Link to university syllabus policies and guidelines
    linkUniversitySyllabusGuidelines: Link = 'https://registrar.washington.edu/staffandfaculty/syllabus-guidelines/';

    //
    // Readings
    //
    linkReadingPersonalInformatics: Link = 'https://doi.org/10.1145/1753326.1753409';
    linkReadingQuantifiedSelf: Link = 'https://archive.wired.com/medtech/health/magazine/17-07/lbnp_knowthyself';

    /**
     * Start and end dates for the course.
     */
    datesOfInstruction = {
        start: DateTime.fromFormat('Mon 2023-01-02', 'EEE yyyy-MM-dd'),  // Should be a Monday
        end:   DateTime.fromFormat('Fri 2023-03-17', 'EEE yyyy-MM-dd')   // Should be a Friday
    };

    /**
     * Use start and end dates to calculate a list of CalendarWeek objects.
     */
    get calendarWeeks(): CalendarWeek[] {
        return (
            // Obtain an interval for the dates of instruction
            this.datesOfInstruction.start.until(
                this.datesOfInstruction.end.plus({days: 1})
            )
            // Split the interval into weeks
            .splitBy({weeks: 1})
            // Convert each week interval into a list of dates
            .map(
                weekIntervalCurrent => weekIntervalCurrent.splitBy({days: 1}).map(
                    interval => interval.start
                )
                // Keep only weekdays
                .filter(
                    date => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(date.weekdayShort)
                )
            )
            // Convert each list of dates into a CalendarWeek
            .map(
                weekListDatesCurrent => ({
                    // Convert each date into a CalendarDate
                    days: weekListDatesCurrent.map(
                        dayCurrent => ({
                            date: dayCurrent
                        }) as CalendarDate
                    )
                }) as CalendarWeek
            )
        )
    }

    calendarItems: CalendarItem[] = [
        //
        // Lecture Calendar Items
        //
        {
            type: 'lecture',
            date: DateTime.fromISO('2023-01-03'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Introduction and Overview',
            slides: 'https://canvas.uw.edu/files/100693854/',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2023-01-05'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Design Diamond',
            slides: 'https://canvas.uw.edu/files/100693826/',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2023-01-10'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Design Research',
            slides: 'https://canvas.uw.edu/files/100693807/',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2023-01-12'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Introduction to Critique',
            slides: 'https://canvas.uw.edu/files/100693798/',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2023-01-17'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Design of Everyday Things',
            slides: 'https://canvas.uw.edu/files/100847593/',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2023-01-19'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Design of Everyday Things',
            slides: 'https://canvas.uw.edu/files/100847593/',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2023-01-24'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Task Analysis',
            // slides: 'https://canvas.uw.edu/files/91098921/',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2023-01-26'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Models and Human Performance',
            // slides: 'https://canvas.uw.edu/files/91192666/',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2023-01-31'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Storyboarding, Paper Prototyping, and Testing',
            // slides: 'https://canvas.uw.edu/files/91400789/',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2023-02-07'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Effective Presentations',
            // slides: 'https://canvas.uw.edu/files/91705969/',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2023-02-14'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Inspection',
            // slides: 'https://canvas.uw.edu/files/91968017/',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2023-02-16'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Patterns and Interface Implementation',
            // slides: 'https://canvas.uw.edu/files/92049795/',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2023-02-23'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Designing for Diverse Needs',
            // slides: 'https://canvas.uw.edu/files/92303593/',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2023-02-28'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'History',
            // slides: 'https://canvas.uw.edu/files/92480229',
        },

        //
        // Studio Calendar Items
        //
        {
            type: 'studio',
            dates: [
                DateTime.fromISO('2023-01-12'),
                DateTime.fromISO('2023-01-17'),
                DateTime.fromISO('2023-01-19'),
                DateTime.fromISO('2023-02-02'),
                DateTime.fromISO('2023-02-14'),
            ],
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Studio',
        },
        {
            type: 'studio',
            dates: [
                DateTime.fromISO('2023-01-06'),
                DateTime.fromISO('2023-01-13'),
                DateTime.fromISO('2023-01-20'),
                DateTime.fromISO('2023-01-27'),
                DateTime.fromISO('2023-02-03'),
                DateTime.fromISO('2023-02-17'),
                DateTime.fromISO('2023-02-24'),
            ],
            timeAndLocations: SECTION_TIME_AND_LOCATIONS,
            title: 'Studio',
        },
        {
            type: 'studio',
            dates: [
                DateTime.fromISO('2023-03-07'),
                DateTime.fromISO('2023-03-09'),
            ],
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Studio',
        },

        //
        // Exam Review Calendar Items
        //
        /*
        {
            type: 'studio',
            dates: [
                DateTime.fromISO('2023-02-20'),
            ],
            timeAndLocation: EXAM_REVIEW_TIME_AND_LOCATION,
            title: 'Exam Q&A',
            slides: 'https://canvas.uw.edu/files/92053501/',
        },
        */



        //
        // Assignment Calendar Items
        //
        
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment0"]),
            title: '0 - Introduction Slide',
        },
        
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment1a"]),
            title: '1a - Individual Brainstorm',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment1b"]),
            title: '1b - Group Proposals',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment1b_rev"]),
            title: '1b_rev - Group Proposals',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment1c"]),
            title: '1c - Finalized Proposal',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment2a"]),
            title: '2a - Project Ideation',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment2b"]),
            title: '2b - Design Research Plan',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment2c"]),
            title: '2c - Design Research Check-In',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment2d"]),
            title: '2d - Design Research Review',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment2e"]),
            title: '2e - Task Review',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment2f"]),
            title: '2f - Design Check-In',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment2f_rev"]),
            title: '2f_rev - Design Check-In',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment2g"]),
            title: '2g - Design Review',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment2p"]),
            title: '2p - Presentation',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment3a"]),
            title: '3a - Paper Prototype',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment3b"]),
            title: '3b - Heuristic Evaluation',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment3c"]),
            title: '3c - Usability Testing Check-In',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment3d"]),
            title: '3d - Usability Testing Review',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment3e"]),
            title: '3e - Digital Mockup',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment3p"]),
            title: '3p - Presentation',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment4web"]),
            title: '4web - Web Post',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment4web_final"]),
            title: '4web_final - Web Post',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment4poster"]),
            title: '4poster - Poster and Pitch',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO(ASSIGNMENT_DUE_DATES["assignment4poster_final"]),
            title: '4poster_final - Poster and Pitch',
        },

        //
        // Office Hour Calendar Items
        //
        {
            type: 'officehour',
            dates: [
                DateTime.fromISO('2023-01-05'),
                DateTime.fromISO('2023-01-12'),
                DateTime.fromISO('2023-01-19'),
                DateTime.fromISO('2023-01-26'),
                DateTime.fromISO('2023-02-02'),
                DateTime.fromISO('2023-02-09'),
                DateTime.fromISO('2023-02-16'),
                DateTime.fromISO('2023-02-23'),
                DateTime.fromISO('2023-03-02'),
                DateTime.fromISO('2023-03-09'),
            ],
            title: 'Office Hour - Lisa',
            timeAndLocation: OFFICE_HOUR_LISA_TIME_AND_LOCATION,
        },
        {
            type: 'officehour',
            dates: [
                DateTime.fromISO('2023-01-04'),
                DateTime.fromISO('2023-01-11'),
                DateTime.fromISO('2023-01-18'),
                DateTime.fromISO('2023-01-25'),
                DateTime.fromISO('2023-02-01'),
                DateTime.fromISO('2023-02-08'),
                DateTime.fromISO('2023-02-15'),
                DateTime.fromISO('2023-02-22'),
                DateTime.fromISO('2023-03-01'),
                DateTime.fromISO('2023-03-08'),
            ],
            title: 'Office Hour - Simona',
            timeAndLocation: OFFICE_HOUR_SIMONA_TIME_AND_LOCATION,
        },

        //
        // Away Calendar Items
        //
        {
            type: 'away',
            dates: [
            ],
            title: 'James Away',
        },
        {
            type: 'away',
            dates: [
                DateTime.fromISO('2023-01-17'),
            ],
            title: 'Ethan Away',
        },
        {
            type: 'away',
            dates: [
            ],
            title: 'Jason Away',
        },
        {
            type: 'away',
            dates: [
                DateTime.fromISO('2023-01-25'),
            ],
            title: 'Lisa Away',
        },
        {
            type: 'away',
            dates: [
                DateTime.fromISO('2023-01-17'),
                DateTime.fromISO('2023-02-07'),
                DateTime.fromISO('2023-03-07'),
            ],
            title: 'Simona Away',
        },

        //
        // Holiday Calendar Items
        //
        {
            type: 'holiday',
            title: "New Year's Day (Observed)",
            date: DateTime.fromISO('2023-01-02')
        },
        {
            type: 'holiday',
            title: 'Martin Luther King Jr. Day',
            date: DateTime.fromISO('2023-01-16')
        },
        {
            type: 'holiday',
            title: "Presidents' Day",
            date: DateTime.fromISO('2023-02-20')
        },

        //
        // Event Calendar Items
        //
        {
            type: 'event',
            title: 'Presentations',
            date: DateTime.fromISO('2023-02-09'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
        },
        {
            type: 'event',
            title: 'Presentations',
            date: DateTime.fromISO('2023-02-10'),
            timeAndLocations: SECTION_TIME_AND_LOCATIONS_PRESENTATIONS,
        },
        {
            type: 'event',
            title: 'Presentations',
            date: DateTime.fromISO('2023-03-02'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
        },
        {
            type: 'event',
            title: 'Presentations',
            date: DateTime.fromISO('2023-03-03'),
            timeAndLocations: SECTION_TIME_AND_LOCATIONS_PRESENTATIONS,
        },
        {
            type: 'event',
            title: 'Exam',
            date: DateTime.fromISO('2023-02-21'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
        },
        {
            type: 'event',
            title: 'Poster Session',
            date: DateTime.fromISO('2023-03-13'),
            timeAndLocation: POSTER_SESSION_TIME_AND_LOCATION,
        },

        //
    ];

    getCalendarItems(calendarDate: CalendarDate, itemType: string): CalendarItem[] {
        const store = useAppStore();

        return store.courseDataStore.calendarItems.filter(
            function(calendarItem) {
                if ('date' in calendarItem) {
                    if (!calendarItem.date.equals(calendarDate.date)) {
                        return false;
                    }
                } else {  // dates in calendarItem
                    if (!calendarItem.dates.some(itemDateCurrent => itemDateCurrent.equals(calendarDate.date))) {
                        return false;
                    }
                }

                return calendarItem.type == itemType;
            }
        )
    }



    //
    // Assignments
    //

    // TODO: Change these to new AsssignmentItem type.

    assignmentItems: AssignmentItem[] = [
        //
        // Assignment 0
        //
        {
            type: 'assignment-item',
            title: '0 - Introduction Slide',
            assignmentDueDate: 'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment0"]) + '.',
            assignmentLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941157'
        },
        //
        // Assignment 1
        //
        {
            type: 'assignment-item',
            title: '1a - Individual Brainstorm',
            assignmentDueDate:  'Uploaded 8:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment1a"]) + '.',
            assignmentLink: "https://canvas.uw.edu/courses/1612132/assignments/7941158"
        },
        {
            type: 'assignment-item',
            title: '1b - Group Proposals',
            assignmentDueDate: 'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment1b"]) + '.',
            assignmentLink: 'https://canvas.uw.edu/courses/1612132/assignments/8044498'
        },
        {
            type: 'assignment-item',
            title: '1b_rev - Group Proposals',
            assignmentDueDate: 'Uploaded 8:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment1b_rev"]) + '.',
            assignmentLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941160'
        },
        {
            type: 'assignment-item',
            title: '1c - Finalized Proposal',
            assignmentDueDate: 'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment1c"]) + '.',
            assignmentLink: 'https://canvas.uw.edu/courses/1612132/assignments/7941161'
        },
        
    ];


    getAssignmentItemByTitle(itemTitle: string): AssignmentItem | undefined {
        const store = useAppStore();

        return store.courseDataStore.assignmentItems.find(
            function(assignmentItem) {
                return assignmentItem.title == itemTitle;
            }
        )
    }

    // //
    // // // Assignment 0
    // // //
    // dueDateAssignment0: dueDate =
    //     'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment0"]) + '.';
    // linkCanvasAssignment0: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941157';

    // //
    // // Assignment 1
    // //
    // dueDateAssignment1a: dueDate =
    //     'Uploaded 8:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment1a"]) + '.';
    // linkCanvasAssignment1a: link = "https://canvas.uw.edu/courses/1612132/assignments/7941158";

    // dueDateAssignment1b: dueDate =
    //     'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment1b"]) + '.';
    // linkCanvasAssignment1b: link = 'https://canvas.uw.edu/courses/1612132/assignments/8044498';
    // dueDateAssignment1b_revised: dueDate =
    //     'Uploaded 8:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment1b_rev"]) + '.';
    // linkCanvasAssignment1b_revised: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941160';

    // dueDateAssignment1c: dueDate =
    //     'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment1c"]) + '.';
    // linkCanvasAssignment1c: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941161';


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

    projectSamplesStore: ProjectSamplesStore = new ProjectSamplesStoreImpl();

    //
    // Samples
    //
    /*
    projectSamples = [
        {
            name: 'BackTrack',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/backtrack/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133304',
                '1c': 'https://canvas.uw.edu/files/100133305',
                '2b': 'https://canvas.uw.edu/files/100133306',
                '2c': 'https://canvas.uw.edu/files/100133307',
                '2d': 'https://canvas.uw.edu/files/100133308',
                '2e': 'https://canvas.uw.edu/files/100133309',
                '2f': 'https://canvas.uw.edu/files/100133310',
                '2g': 'https://canvas.uw.edu/files/100133311',
                '2h': 'https://canvas.uw.edu/files/100133312',
                '2p': 'https://canvas.uw.edu/files/100133313',
                '3a': 'https://canvas.uw.edu/files/100133314',
                '3b': 'https://canvas.uw.edu/files/100133315',
                '3c': 'https://canvas.uw.edu/files/100133316',
                '3d': 'https://canvas.uw.edu/files/100133317',
                '3e': 'https://canvas.uw.edu/files/100133318',
                '3p': 'https://canvas.uw.edu/files/100133319',
                '4poster': 'https://canvas.uw.edu/files/100133320'
            },
        },
        {
            name: 'BookWurm',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/bookwurm/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133321',
                '1c': 'https://canvas.uw.edu/files/100133322',
                '2b': 'https://canvas.uw.edu/files/100133323',
                '2c': 'https://canvas.uw.edu/files/100133325',
                '2d': 'https://canvas.uw.edu/files/100133326',
                '2e': 'https://canvas.uw.edu/files/100133327',
                '2f': 'https://canvas.uw.edu/files/100133328',
                '2g': 'https://canvas.uw.edu/files/100133329',
                '2h': 'https://canvas.uw.edu/files/100133330',
                '2p': 'https://canvas.uw.edu/files/100133331',
                '3a': 'https://canvas.uw.edu/files/100133332',
                '3c': 'https://canvas.uw.edu/files/100133333',
                '3d': 'https://canvas.uw.edu/files/100133334',
                '3e': 'https://canvas.uw.edu/files/100133335',
                '3p': 'https://canvas.uw.edu/files/100133336',
                '4poster': 'https://canvas.uw.edu/files/100133337',
            }
        },
        {
            name: 'Clark',
            link: 'https://courses.cs.washington.edu/courses/cse440/22sp/projects/clark',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133338',
                '1c': 'https://canvas.uw.edu/files/100133339',
                '2b': 'https://canvas.uw.edu/files/100133340',
                '2c': 'https://canvas.uw.edu/files/100133341',
                '2d': 'https://canvas.uw.edu/files/100133342',
                '2e': 'https://canvas.uw.edu/files/100133343',
                '2f': 'https://canvas.uw.edu/files/100133344',
                '2g': 'https://canvas.uw.edu/files/100133345',
                '2p': 'https://canvas.uw.edu/files/100133346',
                '3a': 'https://canvas.uw.edu/files/100133347',
                '3c': 'https://canvas.uw.edu/files/100133348',
                '3d': 'https://canvas.uw.edu/files/100133349',
                '3e': 'https://canvas.uw.edu/files/100133350',
                '3p': 'https://canvas.uw.edu/files/100133351',
                '4poster': 'https://canvas.uw.edu/files/100133352'
            }
        },
        {
            name: 'Cup-anion',
            link: 'https://courses.cs.washington.edu/courses/cse440/22sp/projects/cupanion',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133353',
                '1c': 'https://canvas.uw.edu/files/100133354',
                '2b': 'https://canvas.uw.edu/files/100133355',
                '2c': 'https://canvas.uw.edu/files/100133356',
                '2d': 'https://canvas.uw.edu/files/100133357',
                '2e': 'https://canvas.uw.edu/files/100133358',
                '2f': 'https://canvas.uw.edu/files/100133359',
                '2g': 'https://canvas.uw.edu/files/100133360',
                '2p': 'https://canvas.uw.edu/files/100133361',
                '3a': 'https://canvas.uw.edu/files/100133362',
                '3c': 'https://canvas.uw.edu/files/100133363',
                '3d': 'https://canvas.uw.edu/files/100133364',
                '3e': 'https://canvas.uw.edu/files/100133365',
                '3p': 'https://canvas.uw.edu/files/100133366',
                '4poster': 'https://canvas.uw.edu/files/100133367'
            }
        },
        {
            name: 'Dash',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/dash/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133368',
                '1c': 'https://canvas.uw.edu/files/100133369',
                '2b': 'https://canvas.uw.edu/files/100133370',
                '2c': 'https://canvas.uw.edu/files/100133371',
                '2d': 'https://canvas.uw.edu/files/100133372',
                '2e': 'https://canvas.uw.edu/files/100133373',
                '2f': 'https://canvas.uw.edu/files/100133374',
                '2g': 'https://canvas.uw.edu/files/100133375',
                '2h': 'https://canvas.uw.edu/files/100133376',
                '2p': 'https://canvas.uw.edu/files/100133377',
                '3a': 'https://canvas.uw.edu/files/100133378',
                '3c': 'https://canvas.uw.edu/files/100133379',
                '3d': 'https://canvas.uw.edu/files/100133380',
                '3e': 'https://canvas.uw.edu/files/100133381',
                '3p': 'https://canvas.uw.edu/files/100133382',
                '4poster': 'https://canvas.uw.edu/files/100133383'
            }
        },
        {
            name: 'Hermes',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/hermes/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133384',
                '1c': 'https://canvas.uw.edu/files/100133385',
                '2b': 'https://canvas.uw.edu/files/100133386',
                '2c': 'https://canvas.uw.edu/files/100133387',
                '2d': 'https://canvas.uw.edu/files/100133388',
                '2e': 'https://canvas.uw.edu/files/100133389',
                '2f': 'https://canvas.uw.edu/files/100133390',
                '2g': 'https://canvas.uw.edu/files/100133391',
                '2h': 'https://canvas.uw.edu/files/100133392',
                '2p': 'https://canvas.uw.edu/files/100133393',
                '3a': 'https://canvas.uw.edu/files/100133394',
                '3b': 'https://canvas.uw.edu/files/100133395',
                '3c': 'https://canvas.uw.edu/files/100133396',
                '3d': 'https://canvas.uw.edu/files/100133397',
                '3e': 'https://canvas.uw.edu/files/100133398',
                '3p': 'https://canvas.uw.edu/files/100133399',
                '4poster': 'https://canvas.uw.edu/files/100133400'
            }
        },
        {
            name: 'Jasper',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/jasper/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133401',
                '1c': 'https://canvas.uw.edu/files/100133402',
                '2b': 'https://canvas.uw.edu/files/100133403',
                '2c': 'https://canvas.uw.edu/files/100133404',
                '2d': 'https://canvas.uw.edu/files/100133405',
                '2e': 'https://canvas.uw.edu/files/100133406',
                '2f': 'https://canvas.uw.edu/files/100133407',
                '2g': 'https://canvas.uw.edu/files/100133408',
                '2h': 'https://canvas.uw.edu/files/100133409',
                '2p': 'https://canvas.uw.edu/files/100133410',
                '3a': 'https://canvas.uw.edu/files/100133411',
                '3c': 'https://canvas.uw.edu/files/100133412',
                '3d': 'https://canvas.uw.edu/files/100133413',
                '3e': 'https://canvas.uw.edu/files/100133414',
                '3p': 'https://canvas.uw.edu/files/100133415',
                '4poster': 'https://canvas.uw.edu/files/100133416'
            }
        },
        {
            name: 'Laundr',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/laundr/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133417',
                '1c': 'https://canvas.uw.edu/files/100133418',
                '2b': 'https://canvas.uw.edu/files/100133419',
                '2c': 'https://canvas.uw.edu/files/100133420',
                '2d': 'https://canvas.uw.edu/files/100133421',
                '2e': 'https://canvas.uw.edu/files/100133422',
                '2f': 'https://canvas.uw.edu/files/100133423',
                '2g': 'https://canvas.uw.edu/files/100133424',
                '2h': 'https://canvas.uw.edu/files/100133425',
                '2p': 'https://canvas.uw.edu/files/100133426',
                '3a': 'https://canvas.uw.edu/files/100133427',
                '3c': 'https://canvas.uw.edu/files/100133428',
                '3d': 'https://canvas.uw.edu/files/100133429',
                '3e': 'https://canvas.uw.edu/files/100133430',
                '3p': 'https://canvas.uw.edu/files/100133431',
                '4poster': 'https://canvas.uw.edu/files/100133433'
            }
        },
        {
            name: 'notE',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/note/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133434',
                '1c': 'https://canvas.uw.edu/files/100133435',
                '2b': 'https://canvas.uw.edu/files/100133436',
                '2c': 'https://canvas.uw.edu/files/100133437',
                '2d': 'https://canvas.uw.edu/files/100133438',
                '2e': 'https://canvas.uw.edu/files/100133439',
                '2f': 'https://canvas.uw.edu/files/100133440',
                '2g': 'https://canvas.uw.edu/files/100133441',
                '2h': 'https://canvas.uw.edu/files/100133442',
                '2p': 'https://canvas.uw.edu/files/100133443',
                '3a': 'https://canvas.uw.edu/files/100133444',
                '3c': 'https://canvas.uw.edu/files/100133445',
                '3d': 'https://canvas.uw.edu/files/100133446',
                '3e': 'https://canvas.uw.edu/files/100133447',
                '3p': 'https://canvas.uw.edu/files/100133448',
                '4poster': 'https://canvas.uw.edu/files/100134675'
            }
        },
        {
            name: 'Pawsitive',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/pawsitive/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133449',
                '1c': 'https://canvas.uw.edu/files/100133450',
                '2b': 'https://canvas.uw.edu/files/100133451',
                '2c': 'https://canvas.uw.edu/files/100133452',
                '2d': 'https://canvas.uw.edu/files/100133453',
                '2e': 'https://canvas.uw.edu/files/100133454',
                '2f': 'https://canvas.uw.edu/files/100133455',
                '2g': 'https://canvas.uw.edu/files/100133456',
                '2h': 'https://canvas.uw.edu/files/100133457',
                '2p': 'https://canvas.uw.edu/files/100133458',
                '3a': 'https://canvas.uw.edu/files/100133460',
                '3c': 'https://canvas.uw.edu/files/100133461',
                '3d': 'https://canvas.uw.edu/files/100133462',
                '3e': 'https://canvas.uw.edu/files/100133463',
                '3p': 'https://canvas.uw.edu/files/100133464',
                '4poster': 'https://canvas.uw.edu/files/100133465'            }
        },
        {
            name: 'Pilltender',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/pilltender/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133466',
                '1c': 'https://canvas.uw.edu/files/100133467',
                '2b': 'https://canvas.uw.edu/files/100133468',
                '2c': 'https://canvas.uw.edu/files/100133469',
                '2d': 'https://canvas.uw.edu/files/100133470',
                '2e': 'https://canvas.uw.edu/files/100133471',
                '2f': 'https://canvas.uw.edu/files/100133472',
                '2g': 'https://canvas.uw.edu/files/100133473',
                '2h': 'https://canvas.uw.edu/files/100133474',
                '2p': 'https://canvas.uw.edu/files/100133475',
                '3a': 'https://canvas.uw.edu/files/100133476',
                '3b': 'https://canvas.uw.edu/files/100133477',
                '3c': 'https://canvas.uw.edu/files/100133478',
                '3d': 'https://canvas.uw.edu/files/100133479',
                '3e': 'https://canvas.uw.edu/files/100133480',
                '3p': 'https://canvas.uw.edu/files/100133481',
                '4poster': 'https://canvas.uw.edu/files/100133482'
            }
        },
        {
            name: 'SEEK',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/seek/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133483',
                '1c': 'https://canvas.uw.edu/files/100133484',
                '2b': 'https://canvas.uw.edu/files/100133485',
                '2c': 'https://canvas.uw.edu/files/100133486',
                '2d': 'https://canvas.uw.edu/files/100133487',
                '2e': 'https://canvas.uw.edu/files/100133488',
                '2f': 'https://canvas.uw.edu/files/100133489',
                '2g': 'https://canvas.uw.edu/files/100133490',
                '2h': 'https://canvas.uw.edu/files/100133491',
                '2p': 'https://canvas.uw.edu/files/100133492',
                '3a': 'https://canvas.uw.edu/files/100133493',
                '3c': 'https://canvas.uw.edu/files/100133494',
                '3d': 'https://canvas.uw.edu/files/100133495',
                '3e': 'https://canvas.uw.edu/files/100133496',
                '3p': 'https://canvas.uw.edu/files/100133497',
                '4poster': 'https://canvas.uw.edu/files/100133498'
            }
        },
        {
            name: 'SimPark',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/simpark/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133499',
                '1c': 'https://canvas.uw.edu/files/100133500',
                '2b': 'https://canvas.uw.edu/files/100133501',
                '2c': 'https://canvas.uw.edu/files/100133502',
                '2d': 'https://canvas.uw.edu/files/100133503',
                '2e': 'https://canvas.uw.edu/files/100133504',
                '2f': 'https://canvas.uw.edu/files/100133505',
                '2g': 'https://canvas.uw.edu/files/100133506',
                '2h': 'https://canvas.uw.edu/files/100133507',
                '2p': 'https://canvas.uw.edu/files/100133508',
                '3a': 'https://canvas.uw.edu/files/100133509',
                '3b': 'https://canvas.uw.edu/files/100133510',
                '3c': 'https://canvas.uw.edu/files/100133511',
                '3d': 'https://canvas.uw.edu/files/100133512',
                '3e': 'https://canvas.uw.edu/files/100133513',
                '3p': 'https://canvas.uw.edu/files/100133514',
                '4poster': 'https://canvas.uw.edu/files/100133515'
            }
        },
        {
            name: 'Sprout',
            link: 'https://courses.cs.washington.edu/courses/cse440/22sp/projects/sprout',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133516',
                '1c': 'https://canvas.uw.edu/files/100133517',
                '2b': 'https://canvas.uw.edu/files/100133518',
                '2c': 'https://canvas.uw.edu/files/100133519',
                '2d': 'https://canvas.uw.edu/files/100133520',
                '2e': 'https://canvas.uw.edu/files/100133521',
                '2f': 'https://canvas.uw.edu/files/100133522',
                '2g': 'https://canvas.uw.edu/files/100133523',
                '2p': 'https://canvas.uw.edu/files/100133524',
                '3a': 'https://canvas.uw.edu/files/100133525',
                '3c': 'https://canvas.uw.edu/files/100133526',
                '3d': 'https://canvas.uw.edu/files/100133527',
                '3e': 'https://canvas.uw.edu/files/100133528',
                '3p': 'https://canvas.uw.edu/files/100133529',
                '4poster': 'https://canvas.uw.edu/files/100133530'
            }
        },
        {
            name: 'Waste Wizard',
            link: 'https://courses.cs.washington.edu/courses/cse440/22sp/projects/wastewizard',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133531',
                '1c': 'https://canvas.uw.edu/files/100133532',
                '2b': 'https://canvas.uw.edu/files/100133533',
                '2c': 'https://canvas.uw.edu/files/100133534',
                '2d': 'https://canvas.uw.edu/files/100133535',
                '2e': 'https://canvas.uw.edu/files/100133536',
                '2f': 'https://canvas.uw.edu/files/100133537',
                '2g': 'https://canvas.uw.edu/files/100133539',
                '2p': 'https://canvas.uw.edu/files/100133540',
                '3a': 'https://canvas.uw.edu/files/100133541',
                '3c': 'https://canvas.uw.edu/files/100133542',
                '3d': 'https://canvas.uw.edu/files/100133544',
                '3e': 'https://canvas.uw.edu/files/100133545',
                '3p': 'https://canvas.uw.edu/files/100133546',
                '4poster': 'https://canvas.uw.edu/files/100133556'
            }
        },
        {
            name: 'Wishing Well',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/wishingwell/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133560',
                '1c': 'https://canvas.uw.edu/files/100133563',
                '2b': 'https://canvas.uw.edu/files/100133568',
                '2c': 'https://canvas.uw.edu/files/100133573',
                '2d': 'https://canvas.uw.edu/files/100133578',
                '2e': 'https://canvas.uw.edu/files/100133583',
                '2f': 'https://canvas.uw.edu/files/100133600',
                '2g': 'https://canvas.uw.edu/files/100133607',
                '2h': 'https://canvas.uw.edu/files/100133611',
                '2p': 'https://canvas.uw.edu/files/100133618',
                '3a': 'https://canvas.uw.edu/files/100133624',
                '3c': 'https://canvas.uw.edu/files/100133633',
                '3d': 'https://canvas.uw.edu/files/100133639',
                '3e': 'https://canvas.uw.edu/files/100133643',
                '3p': 'https://canvas.uw.edu/files/100133648',
                '4poster': 'https://canvas.uw.edu/files/100133654'
            }
        }
    ]
    */
}
