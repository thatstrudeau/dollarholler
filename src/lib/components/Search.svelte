<script lang="ts">

	import Search from "$lib/components/icon/Search.svelte";

</script>

<div class="relative flex w-full items-baseline">
	<div class="mr-2 mt-auto text-pastelPurple"><Search /></div>
	<input
		type="text"
		name="search"
		placeholder="Search by keyword"
		class="w-72 border-b-2 border-dashed border-b-pastelPurple bg-transparent font-sansSerif text-xl text-black outline-none focus:border-b-lavenderIndigo focus:border-solid"
	/>
	<button class="font-sansSarif text-xl font-black text-pastelPurple">Search </button>
</div>

