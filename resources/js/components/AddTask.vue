<template>
    <div class="p-0">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add New Task
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Task</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="name">name</label>
                                <input v-model="name" type="text" id="name" name="name" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="description">description</label>
                                <textarea v-model="description" type="text" id="description" name="description" class="form-control">
                                </textarea> 
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @click="taskStore" type="button" data-bs-dismiss="modal" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name : '',
            description: ''
        }
    },

    methods:{
        taskStore(){
            axios.post('http://localhost:3000/tasksList',{
                name : this.name,
                description : this.description
            })
            .then( response => this.$emit('task-added',response ) )
            .catch( error => console.log(error) )
        }
    }
}
</script>

<style>

</style>