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
			assignments: [],
		}
	},

	created() {
		fetch("http://127.0.0.1:3003/assignments",  
			{ method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json'}})
			.then(response => resonse.json())
			.then( data => {
				console.log(data)
			} )
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