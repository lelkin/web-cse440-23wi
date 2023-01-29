import { useAppStore } from 'src/stores/AppStoreProvider';

import {
    //AssignmentItem,
    CalendarDate,
    CalendarItem,
    CalendarWeek,
    //DueDate,
    Link,
    TimeAndLocation
} from 'src/types/CourseDataStore';

// info store
import {
    DateTime,
    DateTimeFormatOptions,
} from 'luxon';
import {
    ProjectSamplesStore,
} from "src/types/ProjectSamplesStore";
import {
    getProjectSamplesStore,
} from "src/stores/ProjectSamplesStore";
import {AssignmentStore} from "src/stores/AssignmentStore";

// info store
const DATE_FORMAT_OPTIONS = {
    month: 'long',
    day: 'numeric',
    weekday: 'long'
} as DateTimeFormatOptions;

export function formatDateString(dateString: string): string {
    return DateTime.fromISO(dateString).toLocaleString(DATE_FORMAT_OPTIONS);
}

// TODO: Resolve existence of two versions of this.
export function formatDateStringNew(dueDate: DateTime): string {
    return dueDate.toLocaleString(DATE_FORMAT_OPTIONS);
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
            slides: 'https://canvas.uw.edu/files/101151132/',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2023-01-26'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Models and Human Performance',
            slides: 'https://canvas.uw.edu/files/101252848/',
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
        
        
        // {
        //     type: 'assignment',
        //     date: DateTime.fromISO('2023-01-05'),
        //     title: '0 - Introduction Slide',
        // },

        // TODO: Thoughts on formatting date like this?
        {
            type: 'assignment',
            date: this.datesOfInstruction.start.plus({days: 3}),
            title: '0 - Introduction Slide',
        },
        {
            type: 'assignment',
            //date: DateTime.fromISO('2023-01-05'),
            date: this.datesOfInstruction.start.plus({days: 3}),
            title: '1a - Individual Brainstorm',
        },
        {
            type: 'assignment',
            //date: DateTime.fromISO('2023-01-11'),
            date: this.datesOfInstruction.start.plus({days:9}),
            title: '1b - Group Proposals',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-01-12'),
            title: '1b_rev - Group Proposals',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-01-16'),
            title: '1c - Finalized Proposal',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-01-17'),
            title: '2a - Project Ideation',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-01-19'),
            title: '2b - Design Research Plan',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-01-23'),
            title: '2c - Design Research Check-In',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-01-26'),
            title: '2d - Design Research Review',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-01-30'),
            title: '2e - Task Review',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-02-01'),
            title: '2f - Design Check-In',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-02-02'),
            title: '2f_rev - Design Check-In',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-02-06'),
            title: '2g - Design Review',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-02-08'),
            title: '2p - Presentation',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-02-13'),
            title: '3a - Paper Prototype',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-02-14'),
            title: '3b - Heuristic Evaluation',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-02-16'),
            title: '3c - Usability Testing Check-In',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-02-23'),
            title: '3d - Usability Testing Review',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-02-27'),
            title: '3e - Digital Mockup',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-03-01'),
            title: '3p - Presentation',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-05-30'),
            title: '4web - Web Post',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-03-07'),
            title: '4web_final - Web Post',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-03-08'),
            title: '4poster - Poster and Pitch',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2023-03-09'),
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

    getCalendarItemsByTitle(itemTitle: string, itemType: string): CalendarItem | undefined {
        const store = useAppStore();

        return store.courseDataStore.calendarItems.find(
            function(calendarItem) {
                return (calendarItem.title == itemTitle && calendarItem.type == itemType);
            }
        )
    }

    projectSamplesStore: ProjectSamplesStore = getProjectSamplesStore();

    assignmentStore: AssignmentStore = new AssignmentStore(this.calendarItems);
}
