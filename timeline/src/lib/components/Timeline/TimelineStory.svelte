<script>
	import { Label } from '$lib/components/ui/label';
	import * as Card from '$lib/components/ui/card';
	export let date;
	export let posts;
</script>

<!-- Timeline Story -->
<div class="m-auto flex w-[1250px] items-center">
	<div
		class="relative flex h-[288px] w-[180px] items-center justify-end border-r-4 border-dotted border-[#778FB1]"
	>
		<Label class=" mr-[40px] text-xs text-[#7A9299]">{date}</Label>
		<img
			src="/story-dot.svg"
			alt="small-tick"
			height={16}
			width={16}
			class="absolute right-[-10px]"
		/>
	</div>
	<div class="ml-[40px] flex w-[764px] justify-between">
		{#each posts as post}
			<Card.Root class=" h-[226px] w-[344px]">
				<Card.Header class="p-0">
					<img
						style="width:342px;height:136px;object-fit: cover;"
						src={post.img}
						alt={post.imgAlt}
					/>
				</Card.Header>
				<Card.Description class=" p-6"
					><p class="line-clamp-2">
						{post.text}
					</p></Card.Description
				>
			</Card.Root>
		{/each}
	</div>
</div>
<!-- END: Timeline Story -->
