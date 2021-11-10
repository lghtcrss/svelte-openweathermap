import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const weather = writable({});
const fetchWeather = async (geocode) => {
	if (Object.keys(geocode).length === 0) return;
	const apiKey = `420cf3bc48a83bc3beed2e87e4735ec6`;
	const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${geocode.lat}&lon=${geocode.lon}&units=metric&exclude=hourly,minutely,alerts&appid=${apiKey}`;
	const res = await fetch(url);
	const data = await res.json();
	const interimObject = { name: geocode.name, country: geocode.country };
	const loadedWeather = { ...data, ...interimObject };
	weather.set(loadedWeather);
};

export const geocode = writable({});
const fetchGeocode = async (cityName) => {
	if (!cityName) return;
	const apiKey = `420cf3bc48a83bc3beed2e87e4735ec6`;
	const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedGeocode = data.map((data) => {
		return {
			name: data.name,
			country: data.country,
			lat: data.lat,
			lon: data.lon
		};
	});
	geocode.set(loadedGeocode[0]);
};
geocode.subscribe((val) => {
	if (Object.keys(val).length === 0) return;
	fetchWeather(val);
});

export const city = writable(browser && (sessionStorage.getItem('city') || 'Paderborn'));
city.subscribe((val) => {
	browser && sessionStorage.setItem('city', val);
	fetchGeocode(val);
});
