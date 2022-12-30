import {
    Box,
    Grid,
    Stack,
} from '@mui/material';

import * as React from 'react';

import { useAppStore } from '../stores/AppStoreProvider';
import {
    CalendarDate,
    CalendarWeek,
    AssignmentCalendarItem,
    AwayCalendarItem,
    BaseCalendarItemTimeAndLocation,
    EventCalendarItem,
    HolidayCalendarItem,
    LectureCalendarItem,
    OfficeHourCalendarItem,
    StudioCalendarItem, CalendarItem,
} from 'src/stores/CourseCalendarStore';


const DATE_FORMAT = 'EEE MMM d';


function keyCalendarDate(calendarDate: CalendarDate): string {
    return calendarDate.date.toFormat(DATE_FORMAT);
}


function keyCalendarItem(calendarDate: CalendarDate, calendarItem: CalendarItem): string {
    let key = "";

    key += keyCalendarDate(calendarDate);
    key += ":"
    key += calendarItem.type
    key += ":"
    key += calendarItem.title

    return key
}

function keyCalendarWeek(calendarWeek: CalendarWeek): string {
    // Key based on the date of Monday

    let key = "";

    key += "Week Of";
    key += ":"
    key += keyCalendarDate(calendarWeek.days[0]);

    return key;
}

function renderAssignmentCalendarItems(calendarDate: CalendarDate) {
    const store = useAppStore();

    return (
        <React.Fragment>
            {
                (
                    store.courseCalendar.getCalendarItems(
                        calendarDate, 'assignment'
                    ) as AssignmentCalendarItem[]
                )
                .map(
                    calendarItem => (
                        <Box
                            key={keyCalendarItem(calendarDate, calendarItem)}
                            sx={{
                                backgroundColor: "lightgreen",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
                        >
                            {calendarItem.title}
                        </Box>
                    )
                )
            }
        </React.Fragment>
    )
}

function renderAwayCalendarItems(calendarDate: CalendarDate) {
    const store = useAppStore();

    return (
        <React.Fragment>
            {
                (
                    store.courseCalendar.getCalendarItems(
                        calendarDate, 'away'
                    ) as AwayCalendarItem[]
                )
                .map(
                    calendarItem => (
                        <Box
                            key={keyCalendarItem(calendarDate, calendarItem)}
                            sx={{
                                backgroundColor: "lightpink",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
                        >
                            {calendarItem.title}
                        </Box>
                    )
                )
            }
        </React.Fragment>
    )}

function renderEventCalendarItems(calendarDate: CalendarDate) {
    const store = useAppStore();

    return (
        <React.Fragment>
            {
                (
                    store.courseCalendar.getCalendarItems(
                        calendarDate, 'event'
                    ) as EventCalendarItem[]
                )
                .map(
                    calendarItem => (
                        <Box
                            key={keyCalendarItem(calendarDate, calendarItem)}
                            sx={{
                                backgroundColor: "lavender",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
                        >
                            {calendarItem.title}<br/>
                            {renderTimeAndLocation(calendarItem)}
                        </Box>
                    )
                )
            }
        </React.Fragment>
    )
}

function renderHolidayCalendarItems(calendarDate: CalendarDate) {
    const store = useAppStore();

    return (
        <React.Fragment>
            {
                (
                    store.courseCalendar.getCalendarItems(
                        calendarDate, 'holiday'
                    ) as HolidayCalendarItem[]
                )
                .map(
                    calendarItem => (
                        <Box
                            key={keyCalendarItem(calendarDate, calendarItem)}
                            sx={{
                                backgroundColor: "orange",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
                        >
                            {calendarItem.title}
                        </Box>
                    )
                )
            }
        </React.Fragment>
    )}

function renderLectureCalendarItems(calendarDate: CalendarDate) {
    const store = useAppStore();

    return (
        <React.Fragment>
            {
                (
                    store.courseCalendar.getCalendarItems(
                        calendarDate, 'lecture'
                    ) as LectureCalendarItem[]
                )
                .map(
                    calendarItem => (
                        <Box
                            key={keyCalendarItem(calendarDate, calendarItem)}
                            sx={{
                                backgroundColor: "lightsalmon",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
                        >
                            {calendarItem.title}<br/>
                            {renderTimeAndLocation(calendarItem)}
                            {calendarItem.slides != undefined &&
                                <React.Fragment>
                                    [<a href={calendarItem.slides}>slides</a>]
                                </React.Fragment>
                            }
                            {(calendarItem.slides != undefined && calendarItem.video != undefined) &&
                                <React.Fragment>
                                    {" "}
                                </React.Fragment>
                            }
                            {calendarItem.video != undefined &&
                                <React.Fragment>
                                    [<a href={calendarItem.video}>video</a>]
                                </React.Fragment>
                            }
                            {(calendarItem.slides != undefined || calendarItem.video != undefined) &&
                                <React.Fragment>
                                    <br/>
                                </React.Fragment>
                            }
                        </Box>
                    )
                )
            }
        </React.Fragment>
    )
}

function renderOfficeHourCalendarItems(calendarDate: CalendarDate) {
    const store = useAppStore();

    return (
        <React.Fragment>
            {
                (
                    store.courseCalendar.getCalendarItems(
                        calendarDate, 'officehour'
                    ) as OfficeHourCalendarItem[]
                )
                .map(
                    calendarItem => (
                        <Box
                            key={keyCalendarItem(calendarDate, calendarItem)}
                            sx={{
                                backgroundColor: "lightgoldenrodyellow",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
                        >
                            {calendarItem.title}<br/>
                            {renderTimeAndLocation(calendarItem)}
                        </Box>
                    )
                )
            }
        </React.Fragment>
    )
}

function renderSectionCalendarItems(calendarDate: CalendarDate) {
    const store = useAppStore();

    return (
        <React.Fragment>
            {
                (
                    store.courseCalendar.getCalendarItems(
                        calendarDate, 'studio'
                    ) as StudioCalendarItem[]
                )
                .map(
                    calendarItem => (
                        <Box
                            key={keyCalendarItem(calendarDate, calendarItem)}
                            sx={{
                                backgroundColor: "lightblue",
                                fontSize: "small",
                                borderRadius: ".25rem",
                                padding: "4px",
                            }}
                        >
                            {calendarItem.title}<br/>
                            {renderTimeAndLocation(calendarItem)}
                            {calendarItem.slides != undefined &&
                                <React.Fragment>
                                    [<a href={calendarItem.slides}>slides</a>]
                                </React.Fragment>
                            }
                            {(calendarItem.slides != undefined && calendarItem.video != undefined) &&
                                <React.Fragment>
                                    {" "}
                                </React.Fragment>
                            }
                            {calendarItem.video != undefined &&
                                <React.Fragment>
                                    [<a href={calendarItem.video}>video</a>]
                                </React.Fragment>
                            }
                        </Box>
                    )
                )
            }
        </React.Fragment>
    )
}

function renderTimeAndLocation(calendarItem: BaseCalendarItemTimeAndLocation) {
    return <React.Fragment>
        {'timeAndLocation' in calendarItem &&
            <React.Fragment>
                {calendarItem.timeAndLocation}<br/>
            </React.Fragment>
        }
        {'timeAndLocations' in calendarItem &&
            <React.Fragment>
                {calendarItem.timeAndLocations.map(timeAndLocationCurrent => {
                    return (
                        <React.Fragment
                            key={timeAndLocationCurrent}
                        >
                            {timeAndLocationCurrent}<br/>
                        </React.Fragment>
                    );
                })}
            </React.Fragment>
        }
    </React.Fragment>
}

function renderCalendarItems(calendarDate: CalendarDate) {
    return (
        <Stack spacing={0.5}>
            {renderHolidayCalendarItems(calendarDate)}
            {renderLectureCalendarItems(calendarDate)}
            {renderSectionCalendarItems(calendarDate)}
            {renderEventCalendarItems(calendarDate)}
            {renderAssignmentCalendarItems(calendarDate)}
            {renderOfficeHourCalendarItems(calendarDate)}
            {renderAwayCalendarItems(calendarDate)}
        </Stack>
    );
}

function renderCalendarDate(calendarDate: CalendarDate) {
    return (
        <Box>
            <h3>
                {calendarDate.date.toFormat(DATE_FORMAT)}
            </h3>
            {renderCalendarItems(calendarDate)}
        </Box>
    );
}

function renderCalendarWeek(calendarWeekCurrent: CalendarWeek) {
    return (
        <React.Fragment>
            {/* Sizes >= md render a week as a row in a calendar */}
            <Box
                sx={{
                    display: { xs: "none", md: "block"}
                }}
            >
                <Grid container width="100%" spacing={2}>
                    {calendarWeekCurrent.days.map(calendarDateCurrent => {
                        return (
                            <React.Fragment
                                key={keyCalendarDate(calendarDateCurrent)}
                            >
                                <Grid item xs={12} sm md>
                                    {renderCalendarDate(calendarDateCurrent)}
                                </Grid>
                            </React.Fragment>
                        )
                    })}
                </Grid>
            </Box>
            {/* Sizes < md render a week as a stack */}
            <Box
                sx={{
                    display: { xs: "block", md: "none"}
                }}
            >
                <Stack width="100%">
                    {calendarWeekCurrent.days.map(calendarDateCurrent => {
                        return (
                            <React.Fragment
                                key={keyCalendarDate(calendarDateCurrent)}
                            >
                                {renderCalendarDate(calendarDateCurrent)}
                            </React.Fragment>
                        )
                    })}
                </Stack>
            </Box>
        </React.Fragment>
    );
}

export const CourseCalendar: React.FunctionComponent = () => {
    const store = useAppStore();

    return (
        <React.Fragment>
            <Stack spacing={2}>
                {store.courseCalendar.calendarWeeks.map(calendarWeekCurrent => {
                    return (
                        <React.Fragment
                            key={keyCalendarWeek(calendarWeekCurrent)}
                        >
                            {renderCalendarWeek(calendarWeekCurrent)}
                        </React.Fragment>
                    )
                })}
            </Stack>
        </React.Fragment>
    );
}

export default CourseCalendar;
