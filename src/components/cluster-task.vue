<script setup lang="ts">
</script>   
<template>
        <div class="box center">
            <font-awesome-icon icon="fa-solid fa-list-check" />
            <router-link to="/cluster/check-task"><button class="btn"> <font-awesome-icon icon="fa-solid fa-list-check" /> <div class="btn-check-task">check task</div></button></router-link>
            <div class="head1">Task</div>
            <br>
                <div class="d-flex justify-content-end se">
                    <label for="input SE-Dollar" class="col-sm-2 col-form-label pl">SE Dollar:</label>
                    <input type="number" class="form-control" id="SE-Dollar" disabled value="1000">
                </div>
                <br>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">SE Dollar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td scope="row">1</td>
                    <td>Scrum</td>
                    <td>11/01/2023</td>
                    <td>1000</td>
                    </tr>
                    <tr>
                    <td scope="row">2</td>
                    <td>Retro</td>
                    <td>11/01/2023</td>
                    <td>5000</td>
                    </tr>
                    <tr>
                    <td scope="row">3</td>
                    <td>Test</td>
                    <td>11/01/2023</td>
                    <td>200</td>
                    </tr>
                </tbody>
            </table>
        </div>
</template>



<style scoped>
@import '@/components/cluster-task.css';
</style>