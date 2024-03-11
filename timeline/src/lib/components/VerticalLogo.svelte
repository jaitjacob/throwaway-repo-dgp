<script>
	export let logoSrc = './timeline/duggup.svg';
	export let companyName;
</script>

<div>
	<div class="flex flex-col">
		<div>
			<img class="float-right size-9" src={logoSrc} alt="logo" />
		</div>
		<div>
			<p class="block text-right text-base font-bold text-slate-950">{companyName}</p>
		</div>
	</div>
</div>
