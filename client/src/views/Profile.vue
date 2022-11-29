<template>
    <v-app>  
    <SideBar />
        <v-card  class="d-flex justify-left elevation-0" flat>
            <div class="profile">
                <h1>Profile</h1>
                <v-file-input 
                    @change="Preview_image"
                    v-model="image"
                    label="Select Picture"
                    width="150%"
                    >
                </v-file-input>
                <v-img
                    max-height="180"
                    max-width="200"
                    :src="url"
                ></v-img>
                <h5 class="pt-5"><pre>Name      : </pre></h5>
                <h5 class="pt-3"><pre>Email     : </pre></h5>
                <h5 class="py-3"><pre>Password  : </pre></h5>
                <v-btn  color="#C0325F" class="withoutupercase rounded-lg">
                      <v-icon left>mdi-pen</v-icon>
                      Edit Profile
                </v-btn>
                <br>
                <hr style="width:200%;text-align:left;">

                <a class="lgon pt-3" href="http://localhost:8080/login">Login/Register</a>
                
            </div>
        </v-card>
    
    
        
    </v-app>  
    </template>
     
<script>
    export default {
        data() {
            return {
                url: null,
                image: null,
            }
        },
        methods: {
            Preview_image() {
                this.url= URL.createObjectURL(this.image)
            }
        },
        components: {
            SideBar,
        },
    }
    import SideBar from "@/components/SideBar.vue";
</script>
    
<style>
.profile{
    margin: 70px;
}

.lgon{
    color: black;
}
.v-btn.withoutupercase {
    text-transform: none !important;
    color: white;
    }
</style>