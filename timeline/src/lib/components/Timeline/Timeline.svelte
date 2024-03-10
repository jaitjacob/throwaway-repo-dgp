<script>
	import { Label } from '$lib/components/ui/label';
	import * as Card from '$lib/components/ui/card';
</script>

<div id="timeline-container" class="mt-5 font-inter">
	<div class="flex justify-center">
		<div class="flex w-[1250px] items-center">
			<div
				class="relative flex h-[288px] w-[180px] items-center justify-end border-r-4 border-dotted border-[#778FB1]"
			>
				<Label class=" mr-[40px] text-xs text-[#7A9299]">Dec 2023</Label>
				<img
					src="/story-dot.svg"
					alt="small-tick"
					height={16}
					width={16}
					class="absolute right-[-10px]"
				/>
			</div>
			<div class="ml-[40px] flex w-[764px] justify-between">
				<Card.Root class=" h-[226px] w-[344px]">
					<Card.Header class="p-0">
						<img
							style="width:342px;height:136px;object-fit: cover;"
							src="./posts/01.jpg"
							alt="steve jobs"
						/>
					</Card.Header>
					<Card.Description class=" p-6"
						><p class="line-clamp-2">
							No amount of technology can convert a bad story into a good story.
						</p></Card.Description
					>
				</Card.Root>
			</div>
		</div>
	</div>
</div>
<!-- END timeline-container -->
