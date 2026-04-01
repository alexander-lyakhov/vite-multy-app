<template>
	<main>
		<div class="container">
			<h1>Application list</h1>

			<ul class="app-list">
				<li><a href="#">Users</a></li>
				<li><a href="#">TM</a></li>
			</ul>
		</div>
	</main>
</template>

<script setup lang="ts">
	// @@@ @js@
	import { ref } from 'vue';

	const props = defineProps<{
	}>();

	// @@@ data definition
	//--------------------------------------------------------------------------

	//--------------------------------------------------------------------------
	// end of data definition

	/***
	**** @@@ Hooks
	***/

	/***
	**** @@@ Computed
	***/

	/***
	**** @@@ Methods
	***/
</script>

<style lang="scss" scoped>
/* @@@ @SCSS@ */
h1 {
	font-size: 2rem;
	// background: #f0f0f0;
	width: 100%;
}

main {
	padding: 32px 0;
}

.app-list {
	font-size: 1.5rem;
	margin-top: 1.5rem;

	li {
		&:not(:first-child) {
			border-top: 1px solid #c0c0c0;
		}
		a {
			color: #808080;
			outline: none;
			display: block;
			padding: 9px 0;

			&:hover {
				color: #333;	
			}
		}
	}
}
</style>
