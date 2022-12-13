<template>
    <v-app>  
    <SideBar />
        <v-card  class="fontsig d-flex justify-left elevation-0" flat>
            <div class="profile">
                <h1>Account Profile</h1>
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
                <h5 class="py-3"><pre>Bio       : </pre></h5>
                <v-btn  color="#C0325F" class="withoutupercase rounded-lg">
                      <v-icon left>mdi-pen</v-icon>
                      Edit Profile
                </v-btn>
                <br>
                <hr style="width:200%;text-align:left;">

                <div class="button-area">
                    <button class="btn btn-primary pull-right" @click="logout()" >Logout</button>
                </div>

            </div>
        </v-card>
    
    
        
    </v-app>  
    </template>
     
<script>
import axios from "axios";
    export default {
        data() {
            return {
                url: null,
                image: null,
                profile:{
                    name: localStorage.getItem("name"),
                    email:localStorage.getItem("email"),

                }
            }
        },
        methods: {
            Preview_image() {
                this.url= URL.createObjectURL(this.image)
            },

            logout() {
      //we should handle errors in a more scalabe way, but this works for now

//       this.$confirm("Are you sure?").then(() => {
//   //do something...
// });

      axios
        .get("http://localhost:5000/api/logout", 
            {}
          )
          .then(() => {
            localStorage.removeItem("token");
            alert("logout berhasil");
            // console.log(response, "Cikan aya eweuh")
            window.location.replace("/");
            //handle response and save JWT
          })
          .catch(err => {
            alert(err);
            // console.log ("Cikan ayah")
          });
      },
      register() {
        alert("Coming soon ...");
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