export default {
	template: `
		<div class="flex gap-2 items-center">
			<button
				class="border border-gray-200 px-2 py-px rounded-md text-sm" 
				v-for="tag in tags" 
				@click="this.$emit('update:currentTag', tag); alert(currentTag)"
				:class="{ 'text-blue-400 border-blue-500': currentTag === tag }">
				{{ tag }}
			</button>
		</div>
	`, 

	props: {
		initialTags: Array,
		currentTag: String
	},
	created() {
		console.log(this.initialTags);
	},
	computed: {
		tags() {
			return ['all',  ... new Set( this.initialTags )]
		}
	}
}