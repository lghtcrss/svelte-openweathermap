<script>
	// import moment from 'moment';
	import { city, weather } from '../stores/weatherstore';
	import Chart from '../compontents/chart.svelte';

	let interimCity = $city;
	let local_time = new Date().toLocaleString();
	$: current_location = `${$weather.name}, ${$weather.country}`;
	$: current_temp = Math.round($weather.current?.temp);
	$: current_humidity = $weather.current?.humidity;
	$: current_pressure = $weather.current?.pressure;
	$: current_feels_like = Math.round($weather.current?.feels_like);
	$: current_description = $weather.current?.weather[0]?.description;
	$: iconUrl = $weather.iconUrl;

	const onKeyDown = (event) => {
		if (event.keyCode !== 13) return;
		$city = interimCity;
	};

	// console.log($weather);
</script>

<svelte:head>
	<title>Start - Open Weather Map with Svelte</title>
</svelte:head>

<section class="flex items-baseline gap-4 mx-auto max-w-xl px-8">
	<label class="mb-2 text-xl" for="targetNumber">Location</label>
	<input class="rounded flex-1" type="text" bind:value={interimCity} on:keydown={onKeyDown} />
</section>
<hr class="mt-6 mb-3 border-gray-300" />

<div class="flex justify-between mx-auto max-w-xl px-8">
	<div class="min-w-60">
		<p class="text-sm text-blue-600">{local_time}</p>
		<p class="text-2xl text-gray-700 font-semibold tracking-wider">{current_location}</p>
		<p class="text-2xl">{current_temp}°C</p>
		<div class="mt-2 pl-4 border-l-2 border-blue-600">
			<p>
				Feels like {current_feels_like}°C. <span class="capitalize">{current_description}.</span>
			</p>
			<p>Humidity: {current_humidity}%</p>
			<p>Pressure: {current_pressure}hPa</p>
		</div>
	</div>
	<div class="flex justify-center items-center">
		<img src={iconUrl} alt="weather icon" class="w-52 h-52" />
	</div>
</div>

<section class="flex items-baseline gap-4 mx-auto max-w-xl px-8">
	<div class="min-w-full border-l-2 border-blue-600">
		<h2 class="text-center text-2xl mb-4">Weather forecast for 7 days</h2>
		<Chart />
	</div>
</section>
