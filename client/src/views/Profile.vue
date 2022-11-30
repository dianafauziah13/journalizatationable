<template>
    <v-app>  
    <SideBar />
        <v-card  class="fontsig d-flex justify-left elevation-0" flat>
            <div class="profile">
                <h1 class="pb-3">Profile</h1>
                <v-container v-if="image===null"><v-file-input 
                    @change="Preview_image"
                    v-model="image"
                    placeholder="Select Picture"
                    prepend-icon="mdi-camera"
                    dense
                    >
                </v-file-input></v-container>
                <v-img
                    max-height="180"
                    max-width="200"
                    :src="url"
                ></v-img>
                <h5 class="pt-5"><pre>Name      : {{profile.name}}</pre></h5>
                <h5 class="pt-3"><pre>Email     : {{profile.email}}</pre></h5>
                <h5 class="py-3"><pre>Password  : </pre></h5>
                <v-btn  color="#C0325F" class="withoutupercase rounded-lg">
                      <v-icon left>mdi-pen</v-icon>
                      Edit Profile
                </v-btn>
                <br>
                <hr style="width:200%;text-align:left;">

                <v-container v-if="(profile.name===null)">
                    <a class="lgon pt-3" href="http://localhost:8080/login">Login/Register</a>
                </v-container>

                <v-container v-if="(profile.name!==null)">
                    <a class="lgon pt-3" href="http://localhost:8080/login">Logout</a>
                </v-container>
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
                profile:{
                    name: null,
                    email:"",

                }
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