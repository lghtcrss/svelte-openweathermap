import { writable } from 'svelte/store';
import { browser } from '$app/env';

const fetchGeocode = async (cityName) => {
	if (!cityName) return;
	const apiKey = `420cf3bc48a83bc3beed2e87e4735ec6`;
	const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedGeocode = data.map((data) => {
		return {
			lat: data.lat,
			lon: data.lon
		};
	});
	return loadedGeocode[0];
};

export const weather = writable({});
const fetchWeather = async (cityName) => {
	if (!cityName) return;
	fetchGeocode(cityName)
		.then((response) => response)
		.then((data) => {
			const apiKey = `420cf3bc48a83bc3beed2e87e4735ec6`;
			const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.lat}&lon=${data.lon}&units=metric&lang=de&appid=${apiKey}`;
			const res = fetch(url);
			weather.set(res);
		});
};

export const city = writable(browser && (sessionStorage.getItem('city') || 'Paderborn'));
city.subscribe((val) => {
	browser && sessionStorage.setItem('city', val);
	fetchWeather(val);
});
