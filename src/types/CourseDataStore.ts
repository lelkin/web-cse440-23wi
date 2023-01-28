import {DateTime} from "luxon";

export type Link = string | null;
export type DueDate = string | null; // e.g. 'Uploaded 3:00pm ' + formatDateString(ASSIGNMENT_DUE_DATES["assignment0"]) + '.'
export type TimeAndLocation = string; // e.g. '10:30 - 11:20 | MGH 058'

export type CalendarDate = {
    date: DateTime
}

export type CalendarWeek = {
    days: CalendarDate[]
}

/**
 * One or more dates associated with a calendar item.
 */
export type BaseCalendarItemDates = {
    date: DateTime
} | {
    dates: DateTime[]
}

/**
 * One or more locations associated with a calendar item.
 */
export type BaseCalendarItemTimeAndLocations = {
    timeAndLocation: TimeAndLocation
} | {
    timeAndLocations: TimeAndLocation[]
}

/**
 * Calendar item types.
 */

export type AssignmentCalendarItem = {
    type: 'assignment',
    title: string,
} & BaseCalendarItemDates;

export type AwayCalendarItem = {
    type: 'away',
    title: string,
} & BaseCalendarItemDates;

export type EventCalendarItem = {
    type: 'event',
    title: string,
} & BaseCalendarItemDates & BaseCalendarItemTimeAndLocations;

export type HolidayCalendarItem = {
    type: 'holiday',
    title: string,
} & BaseCalendarItemDates;

export type LectureCalendarItem = {
    type: 'lecture',
    title: string,
    slides?: Link,
    // video?: Link, // TODO: Consider linking individual videos when easy to maintain/publish
} & BaseCalendarItemDates & BaseCalendarItemTimeAndLocations;

export type OfficeHourCalendarItem = {
    type: 'officehour',
    title: string,
} & BaseCalendarItemDates & BaseCalendarItemTimeAndLocations;

export type StudioCalendarItem = {
    type: 'studio',
    title: string,
    slides?: Link,
    // video?: Link, // TODO: Consider linking individual videos when easy to maintain/publish
} & BaseCalendarItemDates & BaseCalendarItemTimeAndLocations;

export type CalendarItem =
    AssignmentCalendarItem |
    AwayCalendarItem |
    EventCalendarItem |
    HolidayCalendarItem |
    LectureCalendarItem |
    OfficeHourCalendarItem |
    StudioCalendarItem;
