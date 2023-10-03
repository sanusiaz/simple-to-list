export default {
	template: `
		<!-- Create New Assigments -->
		<form class="w-full" 
			@submit.prevent="this.$emit('createAssignment', this.newAssignment); this.newAssignment = ''">
			<div class="border flex w-full border-gray-600 text-black">
				<input 
					v-model="newAssignment" 
					placeholder="Create a new Assignment..." 
					class="text-black p-2">
				<button type="submit" class="bg-white p-2 border-l border-gray-700">Add</button>
			</div>

		</form>
	`,

	data() {
		return  {
			newAssignment: '',
		}
	}
}