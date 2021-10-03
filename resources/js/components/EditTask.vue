<template>
    <div class="p-0">
        <!-- Modal -->
        <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editModalLabel">Edit Task</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="name">name</label>
                                <input v-model="taskToEdit.name" type="text" id="name" name="name" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="description">description</label>
                                <textarea v-model="taskToEdit.description" type="text" id="description" name="description" class="form-control">
                                </textarea> 
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @click="update" type="button" data-bs-dismiss="modal" class="btn btn-primary">Save modification</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : ['taskToEdit'],

    methods : {
        update(){
            axios.patch(`http://localhost:3000/task/${this.taskToEdit.id}`,{
                name : this.taskToEdit.name,
                description : this.taskToEdit.description
            })
            .then( response => this.$emit('edit-event',response)  )
            .catch( error => console.log(error) )
        }
    }
}
</script>

<style>

</style>