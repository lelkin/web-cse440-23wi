import { useAppStore } from 'src/stores/AppStoreProvider';

import {
    CalendarDate,
    CalendarItem,
    CalendarWeek,
    Link,
    TimeAndLocation
} from 'src/types/CourseDataStore';

import {
    DateTime,
} from 'luxon';

import {
    AssignmentMilestone,
    AssignmentStore
} from "src/types/AssignmentStore";
import {
    getAssignmentStore
} from "src/stores/AssignmentStore";

import {
    ProjectSamplesStore,
} from "src/types/ProjectSamplesStore";
import {
    getProjectSamplesStore,
} from "src/stores/ProjectSamplesStore";

const LECTURE_TIME_AND_LOCATION: TimeAndLocation = '10:00 - 11:20 | NAN 181';
const SECTION_TIME_AND_LOCATIONS: TimeAndLocation[] = [
    '10:30 - 11:20 | MGH 058',
    '11:30 - 12:20 | MGH 058',
    '12:30 - 1:20 | MGH 058',
    '1:30 - 2:20 | MGH 058',
]
const SECTION_TIME_AND_LOCATIONS_WITHOUT_A: TimeAndLocation[] = [
    '11:30 - 12:20 | MGH 058',
    '12:30 - 1:20 | MGH 058',
    '1:30 - 2:20 | MGH 058',
]
const SECTION_TIME_AND_LOCATIONS_WITHOUT_D: TimeAndLocation[] = [
    '10:30 - 11:20 | MGH 058',
    '11:30 - 12:20 | MGH 058',
    '12:30 - 1:20 | MGH 058',
]

const EXAM_REVIEW_TIME_AND_LOCATION: TimeAndLocation = '1:30 - 2:20 | Zoom';
const POSTER_SESSION_TIME_AND_LOCATION: TimeAndLocation = '11:00 - 12:00 | CSE Atrium';

const OFFICE_HOUR_LISA_TIME_AND_LOCATION: TimeAndLocation = '1:00 - 2:00 | CSE 624';
const OFFICE_HOUR_LISA_TIME_AND_LOCATION_2PM: TimeAndLocation = '2:00 - 3:00 | CSE 624';
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

    get calendarItems(): CalendarItem[] {
        let calendarItems: CalendarItem[] = [
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
                slides: 'https://canvas.uw.edu/files/102115599/',
            },
            {
                type: 'lecture',
                date: DateTime.fromISO('2023-01-31'),
                timeAndLocation: LECTURE_TIME_AND_LOCATION,
                title: 'Storyboarding, Paper Prototyping, and Testing',
                slides: 'https://canvas.uw.edu/files/101474158/',
            },
            {
                type: 'lecture',
                date: DateTime.fromISO('2023-02-07'),
                timeAndLocation: LECTURE_TIME_AND_LOCATION,
                title: 'Effective Presentations',
                slides: 'https://canvas.uw.edu/files/101784235/',
            },
            {
                type: 'lecture',
                date: DateTime.fromISO('2023-02-14'),
                timeAndLocation: LECTURE_TIME_AND_LOCATION,
                title: 'Inspection',
                slides: 'https://canvas.uw.edu/files/102112566/',
            },
            {
                type: 'lecture',
                date: DateTime.fromISO('2023-02-16'),
                timeAndLocation: LECTURE_TIME_AND_LOCATION,
                title: 'Patterns and Interface Implementation',
                slides: 'https://canvas.uw.edu/files/102112518/',
            },
            {
                type: 'lecture',
                date: DateTime.fromISO('2023-02-23'),
                timeAndLocation: LECTURE_TIME_AND_LOCATION,
                title: 'Designing for Diverse Needs',
                slides: 'https://canvas.uw.edu/files/102516490/',
            },
            {
                type: 'lecture',
                date: DateTime.fromISO('2023-02-28'),
                timeAndLocation: LECTURE_TIME_AND_LOCATION,
                title: 'History',
                slides: 'https://canvas.uw.edu/files/102772743/',
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
            {
                type: 'studio',
                dates: [
                    DateTime.fromISO('2023-02-20'),
                ],
                timeAndLocation: EXAM_REVIEW_TIME_AND_LOCATION,
                title: 'Exam Q&A',
                slides: 'https://canvas.uw.edu/files/102116761/',
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
                    DateTime.fromISO('2023-02-02'),
                ],
                title: 'Office Hour - Lisa',
                timeAndLocation: OFFICE_HOUR_LISA_TIME_AND_LOCATION_2PM,
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
                    DateTime.fromISO('2023-02-14'),
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
                timeAndLocations: SECTION_TIME_AND_LOCATIONS_WITHOUT_D,
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
                timeAndLocations: SECTION_TIME_AND_LOCATIONS_WITHOUT_A,
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
        ];

        calendarItems = [
            ...calendarItems,
            ...Object.values(getAssignmentStore().milestones).map(
                (assignmentCurrent: AssignmentMilestone): CalendarItem => {
                    return {
                        type: 'assignment',
                        title: assignmentCurrent.title,
                        date: assignmentCurrent.dueDate,
                    }
                }
            )
        ]

        return calendarItems;
    }

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

    projectSamplesStore: ProjectSamplesStore = getProjectSamplesStore();

    assignmentStore: AssignmentStore = getAssignmentStore();
}
