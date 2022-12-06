<template> 
  <v-app>
    <SideBar/>
    <v-card  class="rounded-lg mt-10" flat >
                <!-- <v-sheet tile height="54" width="1000" class="d-flex">
                  <v-btn icon class="ma-20">
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-select
                    v-model="type"
                    :items="types"
                    dense
                    outlined
                    hide-details
                    class="ma-2"
                    label="Today's feeling"
                  ></v-select>
                  <v-select
                    v-model="mode"
                    :items="modes"
                    dense
                    outlined
                    hide-details
                    label="Today's Weather"
                    class="ma-2"
                  ></v-select>
                  <v-spacer></v-spacer>
                  <v-btn icon class="mr-20" >
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-sheet>  -->
                  <v-container class="bg-surface-variant">
                    <v-row no-gutters>
                      <v-col>
                        <v-sheet class="pa-1 mt-10 mr-5">
                          <h5 class="pink--text font-weight-bold mb-4">How are you today?</h5>
                          <v-textarea
                           label="Input text here"
                            background-color="#FEE3EC"
                            variant="outlined"
                            maxlength="200"
                            rows="5"
                            color="pink"
                            filled
                            outlined
                            auto-grow
                            clearable
                            counter
                            full-width
                            single-line
                            v-model="post.grid1"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-1 mt-10">
                          <h5 class="pink--text font-weight-bold mb-4">What can i do to make better future?</h5>
                          <v-textarea
                           label="Input text here"
                            background-color="#FEE3EC"
                            variant="outlined"
                            maxlength="200"
                            rows="5"
                            color="pink"
                            filled
                            outlined
                            auto-grow
                            clearable
                            counter
                            full-width
                            single-line
                            v-model="post.grid2"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-1 mt-10 ml-5">
                          <h5 class="pink--text font-weight-bold mb-4">What have i done with my family today?</h5>
                          <v-textarea
                           label="Input text here"
                            background-color="#FEE3EC"
                            variant="outlined"
                            maxlength="200"
                            rows="5"
                            color="pink"
                            filled
                            outlined
                            auto-grow
                            clearable
                            counter
                            full-width
                            single-line
                            v-model="post.grid3"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>

                      <v-responsive width="100%"></v-responsive>

                      <v-col>
                        <v-sheet class="pa-1 mt-5 mr-5">
                          <h5 class="pink--text font-weight-bold mb-4">Problem that i encounter today</h5>
                          <v-textarea
                           label="Input text here"
                            background-color="#FEE3EC"
                            variant="outlined"
                            maxlength="200"
                            rows="5"
                            color="pink"
                            filled
                            outlined
                            auto-grow
                            clearable
                            counter
                            full-width
                            single-line
                            v-model="post.grid4"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-1 mt-5">
                          <h5 class="pink--text font-weight-bold mb-4">Activities that i do to make me happy today</h5>
                          <v-textarea
                           label="Input text here"
                            background-color="#FEE3EC"
                            variant="outlined"
                            maxlength="200"
                            rows="5"
                            color="pink"
                            filled
                            outlined
                            auto-grow
                            clearable
                            counter
                            full-width
                            single-line
                            v-model="post.grid5"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-1 ml-5 mt-5">
                          <h5 class="pink--text font-weight-bold mb-4">Word to describe today</h5>
                          <v-textarea
                           label="Input text here"
                            background-color="#FEE3EC"
                            variant="outlined"
                            maxlength="200"
                            rows="5"
                            color="pink"
                            filled
                            outlined
                            auto-grow
                            clearable
                            counter
                            full-width
                            single-line
                            v-model="post.grid6"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                    </v-row>
                    <v-btn @click= "submitForm()" color="#C0325F" class="withoutupercase ml-1 mt-5" >
                      <v-icon left>mdi-plus</v-icon>
                      Add to Journal
                    </v-btn>
                  </v-container>

                <!-- </v-sheet> -->
              </v-card>
  </v-app>  
</template>

<script>
import API from '@/api';
import SideBar from "@/components/SideBar.vue";

    export default {
        data() {
            return {
                rules: [(value)=>!!value || "This field is required"],
                post: {
                    grid1: "",
                    grid2: "",
                    grid3: "",
                    grid4: "",
                    grid5: "",
                    grid6: "",
                }
            }
        },
        components: {
            SideBar,
        },
        methods: {
            // selectFile(file){
            //     this.image = file[0];
            // },
            async submitForm() {
                // const formData = new FormData();
                // formData.append('grid1', this.post.grid1);
                // formData.append('grid2', this.post.grid2);
                // formData.append('grid3', this.post.grid3);
                // formData.append('grid4', this.post.grid4);
                // formData.append('grid5', this.post.grid5);
                // formData.append('grid6', this.post.grid6);
                // console.log(formData);
                const formData = {
                  grid1 : this.post.grid1,
                  grid2 : this.post.grid2, 
                  grid3 : this.post.grid3,
                  grid4 : this.post.grid4,
                  grid5 : this.post.grid5,
                  grid6 : this.post.grid6
                }
                const response = await API.addPost(formData);
                console.log(response);
                console.log(localStorage.getItem("token"));
                this.$router.push({ name: 'Home', params: {message: response.message} });
                // if(this.$refs.form.validate()){
                //     const response = await API.addPost(formData);
                //     this.$router.push({ name: 'Home', params: {message: response.message} });
                // }
            }
        }
    }
</script>

<style>
.v-btn.withoutupercase {
  text-transform: none !important;
  color: white;
}
</style>