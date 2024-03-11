<script>
	import { data } from '../Timeline/TimelineData';
	import TimelineStatus from '../Timeline/TimelineStatus.svelte';
	import TimelineStory from '../Timeline/TimelineStory.svelte';
	console.log(data.timeline);
</script>

<div class="mt-5">
	{#each data.timeline as item}
		{#if item.type === 'story'}
			<TimelineStory date={item.date} posts={item.posts}></TimelineStory>
		{/if}

		{#if item.type === 'status'}
			<TimelineStatus jobStatus={item.jobStatus}></TimelineStatus>
		{/if}
	{/each}
</div>
