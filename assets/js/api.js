'use strict';

const api_key = "4cfa5fbcf193a4b5216303aa1cf0b010";

// fetch data from the server and export it
export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`) //uses the fetch API to make a GET request to the specified URL with the API key appended as a query.
        .then(res => res.json()) //chains a promise handler to the fetch request and converts it to json format returning another promise
        .then(data => callback(data)); //chanis a promise handler to the previous one and takes the json data returned and passes it to the callback
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },

    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },

    airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },

    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
    /*
    * @param {string} query - city name eg,: London or Nairobi
    */
    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&`
    }
}