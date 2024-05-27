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
	<div class="table-header invoice-table text-daisyBush " >
		<h3>Status</h3>	
		<h3>Due Date</h3>	
		<h3>ID</h3>	
		<h3>Client</h3>	
		<h3>Amount</h3>	
		<div />
		<div />
	</div>

	<!-- invoices -->
	<div class="invoice-table invoice-row items-center bg-white py-6 rounded-lg shadow-tableRow">
		<div class="status"><Tag label='draft' /></div>
		<div class="text-lg dueDate">8/2/2024</div>
		<div class="text-lg invoiceNumber">12345</div>
		<div class="text-xl font-bold clientName">Compressed.fm</div>
		<div class="text-lg font-mono font-bold amount">$504.00</div>
		<div class="text-lg center viewButton hidden lg:block lg:center"><a href="https://www.google.com/" class="text-pastelPurple hover:text-daisyBush"><View /></a></div>	
		<div class="text-lg center moreButton hidden lg:block lg:center"><button class="text-pastelPurple hover:text-daisyBush"><ThreeDots /></button></div>
	</div>
</div>

<CircledAmount label="Total" amount="$1,440.00"/>

<style lang="postcss">
	.table-header h3 {
		@apply text-xl font-black leading-snug
	}

	.invoice-row {
		grid-template-areas: 
			'invoiceNumber invoiceNumber'
			'clientName amount'
			'dueDate status'
	}

	@media (min-width: 1024px) {
		.invoice-row {
			grid-template-areas: 'status dueDate invoiceNumber clientName amount viewButton moreButton';
		}
	}

	.invoice-row .status {
		grid-area: status;
	}

	.invoice-row .dueDate {
		grid-area: dueDate;
	}

	.invoice-row .invoiceNumber {
		grid-area: invoiceNumber
	}

	.invoice-row .clientName {
		grid-area: clientName
	}
	
	.invoice-row .amount {
		grid-area: amount
	}

	.invoice-row .viewButton {
		grid-area: viewButton
	}

	.invoice-row .moreButton {
		grid-area: moreButton
	}


</style>