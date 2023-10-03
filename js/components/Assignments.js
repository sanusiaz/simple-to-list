import AssignmentList from './AssigmentList.js'
import AssignmentCreate from './AssignmentCreate.js'


export default  {
	template : ` 

		<!-- Completed Lists and UnCompletedt Lists  -->
		<div class="grid grid-cols-1 gap-5">
			<assignment-list  
				title="Completed" 
				:assignment="completedAssignment"></assignment-list >

			<assignment-list 
				title="In Progress" 
				:assignment="inProgressAssignment"></assignment-list >


			<assignment-create
				@createAssignment="add"></assignment-create>

		</div>
	 `,

	components: {
		AssignmentList,
		AssignmentCreate,
	},

	data() {
		return {
			assignments: [
				{id: 1, title: 'sometitle', isCompleted: false, tags: 'tag1'},
				{id: 2, title: 'Another title', isCompleted: false, tags: 'tag1'},
				{id: 3, title: 'title 3', isCompleted: false, tags: 'sometags'},
				{id: 4, title: 'title 4', isCompleted: false, tags: 'goodtag'},
			],
		}
	},

	computed: {
		inProgressAssignment() {
			return this.assignments.filter( assignment => !assignment.isCompleted )
		},

		completedAssignment() {
			return this.assignments.filter( assignment => assignment.isCompleted )
		},
		
	},

	methods: {
		add(value) {
			this.assignments.push({
				title:  value,
				isCompleted: false,
				id: this.assignments.length + 1
			})
		}
	}
}