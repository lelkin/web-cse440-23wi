import {
    DateTime,
    DateTimeFormatOptions,
} from "luxon";

const DATE_FORMAT_OPTIONS = {
    month: 'long',
    day: 'numeric',
    weekday: 'long'
} as DateTimeFormatOptions;

export function formatDate(date: DateTime): string {
    return date.toLocaleString(DATE_FORMAT_OPTIONS);
}
