<script setup lang="ts">
</script>   
<template>
        <div class="box center">
            <font-awesome-icon icon="fa-solid fa-list-check" />
            <router-link to="/cluster/check-task"><button class="btn"> <font-awesome-icon icon="fa-solid fa-list-check" /> <div class="btn-check-task">check task</div></button></router-link>
            <h1>Task</h1>
            <br>
<!-- 
                <label for="input SE-Dollar" class="col-sm-2 col-form-label">SE Dollar</label>
                    <input type="number" class="form-control" id="SE-Dollar" disable> -->
            <!-- <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table> -->
        </div>
</template>



<style>
.form-control{
    width: auto;
    /* height: auto; */
}
h1{
    /* Task */
    /* position: absolute; */
    width: 144px;
    height: 77px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 77px;

    color: #5151F2;
}
.btn-check-task{
    /* Check Task */
width: 80px;
height: 24px;


font-family: 'Kanit';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height */


/* background */

color: #F1F6FE;

}
.btn{
    /* ButtonDetailCluster */
    position: absolute;
    width: 145px;
    height: 48px;
    left: 935px;
    top: 20px;

    background: linear-gradient(264.65deg, #6ECEF3 4.28%, #0052D4 88.39%);
    border-radius: 20px;
}
.center{
    text-align: center;
}
.box{
    /* Rectangle 8 */
    position: relative;
    width: 1100px;
    height: 900px;
    /* display: flex; */
    padding: 48px 24px;
    text-align: center;
    /* left: 392px;
    top: 418px; */
    /* white */

    background: #FFFFFF;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}
</style>