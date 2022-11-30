<template>
<v-app>  
<SideBar />
    <v-card  class="d-flex justify-center content-center elevation-0" flat>
        <div class="pt-5">
            <center>
                <v-img
                class="logo rounded-circle"
                lazy-src="@/assets/logojournal.png"
                max-height="300"
                max-width="320"
                src="@/assets/logojournal.png"
            ></v-img></center>
            <p class="versi pt-5">Version : 1.0.1</p>
            <p class="versi pt-5">Made by :</p>

            <v-row class="rowgambar">
                <v-col class="ma-3">
                    <v-img
                        class="rounded-circle"
                        lazy-src="@/assets/didi.jpg"
                        max-height="160"
                        max-width="160"
                        src="@/assets/didi.jpg"
                    ></v-img>
                    <p class="text-center pt-3">
                        Diana Fauziah
                    </p>
                    <p class="text-center">
                        201524003
                    </p>
                </v-col>
                <v-col class="ma-3">
                    <v-img
                        class="rounded-circle"
                        lazy-src="@/assets/anca.jpg"
                        max-height="160"
                        max-width="160"
                        src="@/assets/anca.jpg"
                    ></v-img>
                    <p class="text-center pt-3">
                        Khansa Rafifah T
                    </p>
                    <p class="text-center">
                        201524012
                    </p>
                </v-col>
                <v-col class="ma-3">
                    <v-img
                        class="rounded-circle"
                        lazy-src="@/assets/gefi.jpeg"
                        max-height="160"
                        max-width="160"
                        src="@/assets/gefi.jpeg"
                    ></v-img>
                    <p class="text-center pt-3">
                        Gefi Aulia Sanjaya
                    </p>
                    <p class="text-center">
                        201524008
                    </p>
                </v-col>
                <v-col class="ma-3">
                    <v-img
                        class="rounded-circle"
                        lazy-src="@/assets/away.jpg"
                        max-height="160"
                        max-width="160"
                        src="@/assets/away.jpg"
                    ></v-img>
                    <p class="text-center pt-3">
                        M. Nabil H. Away
                    </p>
                    <p class="text-center">
                        201524018
                    </p>
                </v-col>
            </v-row>
        </div>
    </v-card>


    
</v-app>  
</template>
 
<script>
    export default {
        data() {
            return {}
        },
        components: {
            SideBar,
        },
    }
import SideBar from "@/components/SideBar.vue";
</script>

<style>
.logo{
    position: relative;
    background-color: #FFD8E5;
}

.versi{
    text-align: center;
    font-size: 20px;
    color: #9C8484;
}
.rowgambar{
    left: 50px;
}
.cp{
    font-size: 15px;
    color: #9C8484;
}
.box{
    color: #9C8484 ;
}
</style>