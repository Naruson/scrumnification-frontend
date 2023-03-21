<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";
import Swal from "sweetalert2";

function cancel(){
    router.push('/cluster');
}

function save(){
    Swal.fire({
            title:
                '<strong style = "font-family:Kanit"> คุณต้องการบันทึก Task ที่ทำหรือไม่? </strong>',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            cancelButtonText: '<div style = "font-family:Kanit"> ยกเลิก </div>',
            confirmButtonText: '<div style = "font-family:Kanit"> ตกลง </div>',
            confirmButtonColor: '#005FBC',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                router.push('/cluster');
                console.log('add successfully')
            }
        });
}


</script>
<template>
        <div class="box-check-task">
            <div class="head1">Check Task</div>
            <br>
            <br>

            <label for="cluster" class="label">Cluster :</label>
            <br>
            <br>
            <select name="cluster" class="selector-dropdown p-2">
            <option value="volvo">cluster</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>

            <br>
            <br>
            <br>

            <label for="task" class="label">Date :</label>
            <br>
            <br>
            <input type="date" class="selector-dropdown p-2">

            <br>
            <br>
            <br>

            <label for="task" class="label">Task :</label>
            <br>
            <br>
            <select name="task" class="selector-dropdown p-2">
            <option value="volvo">task</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>

            <br>
            <br>
            <br>

            <label for="point" class="label">Point :</label>
            <br>
            <br>
            <select name="point" class="selector-dropdown p-2">
            <option value="volvo">point</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>
            <br>
            <br>
            <br>
            <div class="button-group d-flex justify-content-between">
                <div class="btn cancel font-btn-cancel" @click="cancel()">cancel</div>                
                <div class="btn save font-btn-save" @click="save()">Save</div>  
            </div>
               

        </div>
</template>


<style scoped>

.button-group{
    text-align: center;
    position: relative;
    width: 500px;
    height: auto;
    left: 25%;
}
.font-btn-save{
    /* Save */
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */


    /* background */

    color: #F1F6FE;
}
.font-btn-cancel{
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */
    /* Blue1 */
    color: #0052D4;
}
.save{
    /* add tasks */
    text-align: center;
    width: 200px;
    height: 48px;
    background: linear-gradient(264.65deg, #6ECEF3 4.28%, #0052D4 88.39%);
    border-radius: 20px;
}
.cancel{
    /* add tasks */
    text-align: center;
    box-sizing: border-box;
    width: 200px;
    height: 48px;
    /* background */

    background: #F1F6FE;
    border-radius: 20px;
}
.label{
    /* Text : */
    position: absolute;
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    left: 20%;
    /* identical to box height */
    color: #000000;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
}
.head1{
    /* Check Task */
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 72px;
    /* identical to box height */
    color: #000000;
}
.selector-dropdown{
    /* Rectangle 1 */
    box-sizing: border-box;
    /* position: absolute; */
    background: #FFFFFF;
    width: 60%;
    height: 50px;
    left: 20%;
    /* purple3 */

    border: 1px solid #5151F2;
    border-radius: 8px;
}
.box-check-task{
    /* Rectangle 8 */
    position: relative;
    text-align: center;
    padding: 48px 24px;
    width: 1100px;
    min-height: 1000px;

    /* white */

    background: #FFFFFF;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}
.invi-box{
    height: 60px;
}
/* .container{
    background-color: brown;
    z-index: 1000;
} */
</style>