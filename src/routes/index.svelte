<script>
	// import { onMount } from 'svelte';
	import moment from 'moment';
	import { city, weather } from '../stores/weatherstore';
	import Chart from '../compontents/chart.svelte';

	let chartsReady = false;
	let mounted = false;

	// onMount(() => {
	// 	mounted = true;
	// 	if (chartsReady) loadChartElements();
	// });

	// const chartsLoaded = () => {
	// 	chartsReady = true;
	// 	if (mounted) loadChartElements();
	// };

	let interimCity = $city;
	let local_time = moment().format('MMM DD, HH:mma');
	$: location = `${$weather.name}, ${$weather.country}`;
	$: temp = Math.round($weather.current?.temp);
	$: humidity = $weather.current?.humidity;
	$: pressure = $weather.current?.pressure;
	$: feels_like = Math.round($weather.current?.feels_like);
	$: description = $weather.current?.weather[0]?.description;

	// const loadChartElements = () => {};

	const onKeyDown = (event) => {
		if (event.keyCode !== 13) return;
		$city = interimCity;
	};

	console.log($weather);
</script>

<svelte:head>
	<title>Start - Open Weather Map with Svelte</title>
	<!-- <script src="scripts/weatherchart.js" on:load={chartsLoaded}></script> -->
</svelte:head>

<section class="mx-auto max-w-xl px-8">
	<label class="block mb-2" for="targetNumber">Ort</label>
	<input class="rounded w-full" type="text" bind:value={interimCity} on:keydown={onKeyDown} />
</section>
<hr class="mt-10 mb-3 border-gray-300" />
<section class="mx-auto max-w-xl px-8">
	<p>{local_time}</p>
	<p>{location}</p>
	<p>Temperature: {temp}°C</p>
	<p>Feels like {feels_like}°C. {description}.</p>
	<p>Humidity: {humidity}%</p>
	<p>Pressure: {pressure}hPa</p>
</section>
<section class="mx-auto max-w-xl px-8">
	<Chart />
</section>
