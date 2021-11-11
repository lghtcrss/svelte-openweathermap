<script>
	import { Chart, registerables } from 'chart.js';
	import { onMount, afterUpdate } from 'svelte';
	import { chartData } from '../stores/weatherstore';

	let weatherChart;

	onMount(() => {
		Chart.register(...registerables);
		createChart();
	});

	afterUpdate(() => {
		weatherChart?.destroy();
		createChart();
	});

	const createChart = () => {
		let ctx = document.getElementById('weatherChart').getContext('2d');
		weatherChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: $chartData.labels,
				datasets: [
					{
						label: 'Temperature [°C]',
						data: $chartData.temperatures,
						backgroundColor: ['rgba(54, 162, 235, 0.2)'],
						borderColor: ['rgba(54, 162, 235, 1)'],
						borderWidth: 2,
						yAxisID: 'y'
					},
					{
						type: 'bar',
						label: 'Humidity [%]',
						data: $chartData.humidities,
						backgroundColor: ['rgba(255, 206, 86, 0.2)'],
						borderColor: ['rgba(255, 206, 86, 1)'],
						borderWidth: 1,
						yAxisID: 'y1'
					},
					{
						label: 'Pressure [hPa]',
						data: $chartData.pressures,
						backgroundColor: ['rgba(255, 99, 132, 0.2)'],
						borderColor: ['rgba(255, 99, 132, 1)'],
						borderWidth: 1,
						yAxisID: 'y2'
					}
				]
			},
			options: {
				interaction: {
					mode: 'index',
					intersect: false
				},
				stacked: false,
				scales: {
					y: {
						beginAtZero: true,
						position: 'left',
						ticks: {
							callback: function (value, index, values) {
								return `${value}°C`;
							}
						}
					},
					y1: {
						position: 'right',
						// grid line settings
						grid: {
							drawOnChartArea: false // only want the grid lines for one axis to show up
						},
						ticks: {
							callback: function (value, index, values) {
								return `${value}%`;
							}
						}
					},
					y2: {
						position: 'right',
						// grid line settings
						grid: {
							drawOnChartArea: false // only want the grid lines for one axis to show up
						},
						ticks: {
							callback: function (value, index, values) {
								return `${value}hPa`;
							}
						}
					}
				}
			}
		});
	};
</script>

<canvas id="weatherChart" width="4" height="3" />
