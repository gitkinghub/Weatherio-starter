'use strict';

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/*
* @param {number} dateunix  Unix date in seconds
* @param {number} timezone Timezone shift from UTC in seconds
* @returns {string} Date String. format: "Sunday 10, Jan"
*/
export const getDate = function (dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

/*
* @param {number} timeUnix Unix date in seconds
* @param {number} timezone Timezone shift from UTC in seconds
* @returns {string} Time string.
*/
export const getTime = function (timeUnix, timezone) {
    const date = new Date((timeUnix, timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes} ${period}`;
}

/*
* @param {number} timeUnix Unix date in seconds
* @param {number} timezone Timezone shift from UTC in seconds
* @returns {string} Time string.
*/
export const getHours = function (timeUnix, timezone) {
    const date = new Date((timeUnix, timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
}
