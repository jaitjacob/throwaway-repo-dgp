<script>
	import { Label } from '$lib/components/ui/label';
	import * as Card from '$lib/components/ui/card';
	import VerticalLogo from '$lib/components/VerticalLogo.svelte';
	import TimelineStory from './TimelineStory.svelte';
	import data from '$lib/components/Timeline/TimelineData';
</script>

<div id="timeline-container " class="m-auto mt-5">
	<div class="flex-col">
		<!-- Timeline Story -->
		<div class="m-auto flex w-[1250px] items-center">
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
				<Card.Root class=" h-[226px] w-[344px]">
					<Card.Header class="p-0">
						<img
							style="width:342px;height:136px;object-fit: cover;"
							src="./posts/02.jpg"
							alt="steve jobs"
						/>
					</Card.Header>
					<Card.Description class=" p-6"
						><p class="line-clamp-2">
							Most people don't have original ideas. Here is how Sam Altman pushes himself to have
							unpopular ideas.
						</p></Card.Description
					>
				</Card.Root>
			</div>
		</div>
		<!-- END: Timeline Story -->

		<!-- Timeline Status -->
		<div class="m-auto mb-1 mt-3 flex w-[1250px] items-center">
			<div
				class="relative flex h-[157px] w-[180px] items-center justify-end border-r-4 border-dotted border-[#778FB1]"
			>
				<div class="flex-col px-5 text-right text-[#7A9299]">
					<VerticalLogo></VerticalLogo>
					<p class="text-xs">San Francisco Bay Area</p>
					<p class="text-xs">Joined</p>
					<p class="text-xs">Nov 2023</p>
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
				<p class=" font-bold text-[141618]">Co-founder and CEO</p>
				<p class="text-xs font-medium text-[#7A9299]">Full Time &#183; Remote</p>
			</div>
		</div>
		<!-- END: Timeline Status -->

		<!-- Timeline Story -->
		<div class="m-auto flex w-[1250px] items-center">
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
							src="./posts/03.jpg"
							alt="steve jobs"
						/>
					</Card.Header>
					<Card.Description class=" p-6"
						><p class="line-clamp-2">
							Startup Lesson I am reflecting. Don't build for the "average person".
						</p></Card.Description
					>
				</Card.Root>
				<Card.Root class=" h-[226px] w-[344px]">
					<Card.Header class="p-0">
						<img
							style="width:342px;height:136px;object-fit: cover;"
							src="./posts/04.png"
							alt="steve jobs"
						/>
					</Card.Header>
					<Card.Description class=" p-6"
						><p class="line-clamp-2">
							Startup Lesson I am reflecting. Don't build for the "average person".
						</p></Card.Description
					>
				</Card.Root>
			</div>
		</div>
		<!-- END: Timeline Story -->

		<!-- Timeline Status -->
		<div class="m-auto mb-1 mt-3 flex w-[1250px] items-center">
			<div
				class="relative flex h-[157px] w-[180px] items-center justify-end border-r-4 border-dotted border-[#778FB1]"
			>
				<div class="flex-col px-5 text-right text-[#7A9299]">
					<VerticalLogo></VerticalLogo>
					<p class="text-xs">San Francisco Bay Area</p>
					<p class="text-xs">Joined</p>
					<p class="text-xs">Nov 2023</p>
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
				<p class=" font-bold text-[141618]">VP Engineering</p>
				<p class="text-xs font-medium text-[#7A9299]">Full Time</p>
			</div>
		</div>
		<!-- END: Timeline Status -->
		<TimelineStory></TimelineStory>
	</div>
</div>
<!-- END timeline-container -->
