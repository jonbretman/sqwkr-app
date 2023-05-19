<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h3>Profile</h3>

{#if data.profile}
	<p>Welcome {data.profile.username}</p>
{:else}
	<p>Choose a username to get started.</p>
	<form method="POST">
		<label>
			Username
			<input name="username" type="text" />
		</label>
		<button>Create Profile</button>
	</form>
{/if}
