import AssignmentList from './AssigmentList.js'
import AssignmentCreate from './AssignmentCreate.js'
// import axios from 'axios'
// const axios = require('axios/dist/node/axios.cjs'); // node


export default  {
	template : ` 

		<!-- Completed Lists and UnCompletedt Lists  -->
		<div class="grid grid-cols-1 gap-5">
			<div class="flex gap-8">
				<assignment-list  
					title="Completed" 
					:assignment="completedAssignment">
						<template v-slot:createNewAssignment>
							<assignment-create @createAssignment="add"></assignment-create>
						</template>
					</assignment-list >

				<assignment-list 
					title="In Progress" 
					:assignment="inProgressAssignment">
					<template v-slot:createNewAssignment>
						<assignment-create @createAssignment="add"></assignment-create>
					</template>

				</assignment-list >
				
			</div>



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
		// let __res = axios.get("http://localhost:7008/assignments")

		// console.log(__res)
			// .then(response => resonse.json())
			// .then( data => {
			// 	console.log(data)
			// } )
		fetch("http://localhost:7008/assignments")
			.then(response => response.json())
			.then(data => {
				this.assignments = data
			})
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