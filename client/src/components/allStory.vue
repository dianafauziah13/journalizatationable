<template>
  <v-app>
    <SideBar/>
    <v-card  class="rounded-lg" flat>

                  <v-container class="bg-surface-variant" >

                    <v-row no-gutters v-for="post in post" :key="post._id">
                        <v-row>
                            <v-col
                            cols="12"
                            sm="6"
                            md="4"
                            >
                            <v-text-field
                            label="Date is"
                            placeholder="Date"
                            filled
                            rounded
                            dense
                            v-model="post.created"
                            prepend-icon="mdi-calendar"
                            ></v-text-field>
                            </v-col>
                        </v-row>
                        
                      <v-col >
                        <v-sheet class="pa-1 ma-1">
                          <v-textarea
                            class="greyy"
                            color="cyan"
                            auto-grow
                            variant="outlined"
                            rows="5"
                            clearable
                            label="How are you today"
                            v-model="post.grid1"
                            :rules="rules"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-1 ma-1">
                          <v-textarea
                            class="greyy"
                            color="cyan"
                            auto-grow
                            rows="5"
                            clearable
                            label="What can i do to make better future"
                            v-model="post.grid2"
                            :rules="rules"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-1 ma-1">
                          <v-textarea
                            class="greyy"
                            color="cyan"
                            auto-grow
                            rows="5"
                            clearable
                            label="What have i done with my family today"
                            v-model="post.grid3"
                            :rules="rules"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>

                        <v-responsive width="100%"></v-responsive>

                      <v-col>
                        <v-sheet class="pa-1 ma-1">
                          <v-textarea
                            class="greyy"
                            color="cyan"
                            auto-grow
                            rows="5"
                            clearable
                            label="Problem that i encounter today"
                            v-model="post.grid4"
                            :rules="rules"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-1 ma-1">
                          <v-textarea
                            class="greyy"
                            color="cyan"
                            auto-grow
                            rows="5"
                            clearable
                            label="Activities that i do to make me happy today"
                            v-model="post.grid5"
                            :rules="rules"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-1 ma-1">
                          <v-textarea
                            class="greyy"
                            color="cyan"
                            auto-grow
                            rows="5"
                            clearable
                            label="Word to describe today"
                            v-model="post.grid6"
                            :rules="rules"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                    </v-row>
                  </v-container>
                
              </v-card>
  </v-app> 
</template>

<script>
import API from '@/api';
import SideBar from './SideBar.vue';

export default { 
  data() {
        return {
            rules: [(value)=>!!value || "This field is required"],
            post : [],
      
      }
},

    async created() {
        const response = await API.getAllPosts();
        this.post = response;
        console.log(this.post)
        
    },
    components:{
      SideBar
    },
        methods: {

        }
}
</script>

<style>
.greyy{
background-color: #eee6e6;
border-radius: 5px;
}
.v-btn.withoutupercase {
text-transform: none !important;
color: white;
}
</style>