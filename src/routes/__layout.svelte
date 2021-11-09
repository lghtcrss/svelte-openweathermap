<script>
	import '../app.css';
</script>

<header class="min-w-full h-12 bg-blue-500 fixed top-0 flex justify-center items-center shadow-md">
	<h1 class="text-white font-bold tracking-wide text-2xl">Open Weather Map with Svelte</h1>
</header>
<main class="mt-16 text-gray-800">
	<slot />
</main>
<hr class="mt-10 mb-3 border-blue-300" />
<footer class="mx-auto max-w-xl text-sm relative text-gray-800 mb-7">
	<p class="absolute right-0 float-right pr-8">v1.0.0</p>
	<p class="italic pl-8">Konstantin Eppinger</p>
</footer>
