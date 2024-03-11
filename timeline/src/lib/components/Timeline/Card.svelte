<script>
	import * as Card from '$lib/components/ui/card';
	export let imageSrc = '';
	export let text = '';
</script>

<Card.Root class=" h-[226px] w-[344px]">
	<Card.Header class="p-0">
		<img style="width:342px;height:136px;object-fit: cover;" src={imageSrc} alt="steve jobs" />
	</Card.Header>
	<Card.Description class=" p-6"
		><p class="line-clamp-2">
			{text}
		</p></Card.Description
	>
</Card.Root>
