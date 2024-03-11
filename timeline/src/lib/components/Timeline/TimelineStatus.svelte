<script>
	import VerticalLogo from '$lib/components/VerticalLogo.svelte';
	export let jobStatus;
</script>

<!-- Timeline Status -->
<div class="m-auto mb-1 mt-3 flex w-[1250px] items-center">
	<div
		class="relative flex h-[157px] w-[180px] items-center justify-end border-r-4 border-dotted border-[#778FB1]"
	>
		<div class="flex-col px-5 text-right text-[#7A9299]">
			<VerticalLogo companyName={jobStatus.companyName} logoSrc={jobStatus.companyLogo}
			></VerticalLogo>
			<p class="text-xs">{jobStatus.location}</p>
			<p class="text-xs">Joined</p>
			<p class="text-xs">{jobStatus.startDate}</p>
		</div>
		<img
			src="/timeline/up-arrow.svg"
			alt="up-arrow"
			width={16}
			class="absolute -top-2 right-[-10px]"
		/>
		<img
			src="/timeline/story-dot-lg.svg"
			alt="small-tick"
			height={27}
			width={28}
			class="absolute right-[-16px]"
		/>
	</div>
	<div class="ml-[40px] w-[764px] flex-col justify-between">
		<p class=" font-bold text-[141618]">{jobStatus.position}</p>
		<p class="text-xs font-medium text-[#7A9299]">{jobStatus.jobType}</p>
	</div>
</div>
<!-- END: Timeline Status -->
