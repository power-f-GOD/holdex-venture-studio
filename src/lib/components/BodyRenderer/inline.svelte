<script lang="ts">
	import { escape } from '$components/BodyParser/escaper';
	import { Switch, Case } from '$components/Switch';
	import Embed from './Blocks/embed.svelte';
	import TextWrapper from './Blocks/textWrapper.svelte';
	import Image from './Blocks/image.svelte';
	import Link from './Blocks/link.svelte';
	import Hashtag from './Blocks/hashtag.svelte';
	import { setContext } from 'svelte';

	type Item = {
		type: string;
		text: string;
		href?: string;
		title?: string;
	};

	export let item: Item;
	
	export let parentWrapper: string;
	setContext('wrapper',parentWrapper)

</script>

<template lang="pug" src="./inline.pug">
</template>


<style lang="sass">
	:global(b),
	:global(em),
	:global(strong)
		@apply text-t1
</style>
