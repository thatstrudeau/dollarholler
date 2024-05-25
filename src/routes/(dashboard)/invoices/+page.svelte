<script lang="ts">
	import ThreeDots from './../../../lib/components/icon/ThreeDots.svelte';

	import Search from "$lib/components/Search.svelte";
	import Tag from "$lib/components/Tag.svelte";
	import View from "$lib/components/icon/View.svelte";
	import CircledAmount from '$lib/components/CircledAmount.svelte';

</script>

<svelte:head>
	<title>Invoices | The Dollar Holler</title>
</svelte:head>

<div class="flex justify-between items-center mb-16">
	<!-- search field -->

	<div>
		<Search />
	</div>

	<!-- new invoice button -->

	<div>
		<button class="relative whitespace-nowrap rounded-lg bg-lavenderIndigo px-10 py-3 font-sansSerif text-xl font-black text-white shadow-colored hover:shadow-coloredHover translate-y-0 hover:-translate-y-2 transition-all">+ Invoice</button>
	</div>
</div>


<!-- list of invoices -->
<div>
	<!-- header -->

	<div class="table-header invoice-table text-daisyBush">
		<h3>Status</h3>	
		<h3>Due Date</h3>	
		<h3>ID</h3>	
		<h3>Client</h3>	
		<h3>Amount</h3>	
		<div />
		<div />
	</div>

	<!-- invoices -->

	<div class="invoice-table items-center bg-white py-6 rounded-lg shadow-tableRow">
		<div><Tag label='draft' /></div>
		<div class="text-lg">8/2/2024</div>
		<div class="text-lg">12345</div>
		<div class="text-xl font-bold">Compressed.fm</div>
		<div class="text-lg font-mono font-bold">$504.00</div>
		<div class="text-lg center"><a href="https://www.google.com/" class="text-pastelPurple hover:text-daisyBush"><View /></a></div>	
		<div class="text-lg center"><button class="text-pastelPurple hover:text-daisyBush"><ThreeDots /></button></div>
	</div>
</div>

<CircledAmount label="Total" amount="$1,440.00"/>

<style lang="postcss">
	.table-header h3 {
		@apply text-xl font-black leading-snug
	}
</style>