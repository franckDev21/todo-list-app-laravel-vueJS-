<template>
    <div class="container">
        <div class="form-row mb-2">
            <div class="col-row">
                <input @keyup="searchTask" v-model="q" type="text" placeholder="search.." class="form-control">
            </div>
        </div>
        <!-- add task component -->
        <add-task @task-added="refresh" ></add-task>
        <!-- task list -->
        <ul class="list-group mt-2 mb-4">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="task in tasks.data" :key="task.id" >
                <a class="nav-link" href="#">{{ task.name }}</a>
                <div class="">
                    <button @click="getTask(task.id)" data-bs-toggle="modal" data-bs-target="#editModal" class="btn btn-secondary">Edit</button>
                    <button @click="deleteTask(task.id)" class="btn btn-danger">delete</button>
                </div>
            </li>
            <!-- edit task component -->
            <edit-task @edit-event="refresh" :taskToEdit="taskToEdit"></edit-task>
        </ul>
        <!-- end task list -->

        <!-- pagination component -->
        <pagination :data="tasks" @pagination-change-page="getResults"></pagination>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tasks : {},
            taskToEdit : '',
            q : ''
        }
    },

    mounted(){
        axios.get('http://localhost:3000/tasksList')
            .then( response => this.tasks = response.data )
            .catch( error => console.log(error) )
    },

    methods : {
		getResults(page = 1) {
			axios.get('http://localhost:3000/tasksList?page=' + page)
				.then(response => {
					this.tasks = response.data;
				});
		},

        refresh(tasks){
            this.tasks = tasks.data
        },

        getTask(id){
            axios.get(`http://localhost:3000/task/${id}`)
            .then( response => this.taskToEdit = response.data)
            .catch( error => console.log(error) )
        },

        deleteTask(id){
            axios.delete(`http://localhost:3000/task/${id}`)
            .then( response => this.tasks = response.data )
            .catch( error => console.log(error) )
        },

        searchTask(){
            if(this.q.length >= 1){
                axios.get(`http://localhost:3000/tasksList/${this.q}`)
                    .then( response => this.tasks = response.data )
                    .catch( error => console.log(error) )
            }else{
                axios.get('http://localhost:3000/tasksList')
                .then( response => this.tasks = response.data )
                .catch( error => console.log(error) )
            }
        }
    }
}
</script>

<style>

</style>