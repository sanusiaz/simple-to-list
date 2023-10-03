import AssignmentTags from './AssignmentTags.js'

export default {
	template: `
		<div v-if="assignment.length > 0" class="flex flex-col space-y-2 mb-2">
			<h1 class="font-semibold text-lg">{{ title }} ({{ filterTagsResults.length }})</h1>

			<!-- Load all tags -->
			<assignment-tags
				v-model:currentTag="activeTag"
				:initial-tags="this.assignment.map(a => a.tags)"></assignment-tags>

			<ul class="border border-gray-600 flex-col divide-y-2 divide-gray-600">
				<li v-for="item in filterTagsResults" :key="item.id" class="p-1 px-2">
					<label class="flex justify-between gap-5 hover:text-blue-600 hover:font-semibold cursor-pointer group align-center items-center gap-2">
						<span class="group-hover:underline-offset-2 transition-all duration-200 hover:duration-200 hover:underline  font-normal">{{ item.title }}</span>
						<input class="cursor-pointer" type="checkbox" v-model="item.isCompleted"> 
					</label>
				</li>

			</ul>
		</div>
	`,

	data() {
		return {
			activeTag: 'all'
		}
	},
	components: {
		AssignmentTags
	},
	props: {
		title: {
			type: String
		},

		assignment: {
			type: Object
		}
	},
	computed: {
		filterTagsResults() {
			return ( this.activeTag === 'all' ) 
				? this.assignment 
				: this.assignment.filter(a => a.tags === this.activeTag )
		}
	},
}