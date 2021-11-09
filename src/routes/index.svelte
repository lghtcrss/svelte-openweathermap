<script>
	import { city, weather } from '../stores/weatherstore';
	// $: temp = Math.round($weather.main.temp);
	// $: humidity = $weather.main.humidity;
	// $: pressure = $weather.main.pressure;

	const onKeyDown = (event) => {
		if (event.keyCode !== 13) return;
	};

	let promise = $weather;
	console.log(promise);
	// promise.then((data) => console.log(data.json()));
</script>

<svelte:head>
	<title>Start - Open Weather Map with Svelte</title>
</svelte:head>

<section class="mx-auto max-w-xl px-8">
	<label class="block mb-2" for="targetNumber">Ort</label>
	<input class="rounded w-full" type="text" bind:value={$city} on:keydown={onKeyDown} />
</section>
<hr class="mt-10 mb-3 border-gray-300" />
<section class="mx-auto max-w-xl px-8">
	{#await promise then weather}
		<p>{weather}</p>
	{/await}
	<!-- <p>Temperature: {temp}</p>
	<p>Humidity: {humidity}</p>
	<p>Pressure: {pressure}</p> -->
</section>
