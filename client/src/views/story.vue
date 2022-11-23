<template>
    <v-card  class="rounded-lg" flat >
                <!-- <v-sheet tile height="54" class="d-flex">
                  <v-btn icon class="ma-2">
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
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
                  <v-btn icon class="ma-2" >
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-sheet>
                <v-sheet height="600">
                  <v-calendar
                    ref="calendar"
                    v-model="value"
                    :weekdays="weekday"
                    :type="type"
                    :events="events"
                    :event-overlap-mode="mode"
                    :event-overlap-threshold="30"
                    :event-color="getEventColor"
                    @change="getEvents"
                  ></v-calendar> -->
                  <v-container class="bg-surface-variant">
                    <v-row no-gutters>
                      <v-col>
                        <v-sheet class="pa-1 ma-10">
                          <v-textarea
                            class="pinky"
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
                        <v-sheet class="pa-1 ma-10">
                          <v-textarea
                            class="pinky"
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
                        <v-sheet class="pa-1 ma-10">
                          <v-textarea
                            class="pinky"
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
                        <v-sheet class="pa-1 ma-10">
                          <v-textarea
                            class="pinky"
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
                        <v-sheet class="pa-1 ma-10">
                          <v-textarea
                            class="pinky"
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
                        <v-sheet class="pa-1 ma-10">
                          <v-textarea
                            class="pinky"
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
                    <v-btn @click= "submitForm()" color="#C0325F" class="withoutupercase ml-5" >
                      <v-icon left>fas fa-plus</v-icon>
                      Add to Journal
                    </v-btn>
                  </v-container>

                <!-- </v-sheet> -->
              </v-card>
    
</template>

<script>
import API from '@/api';

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
.greyy{
  background-color: #eee6e6;
  border-radius: 5px;
}
.v-btn.withoutupercase {
  text-transform: none !important;
  color: white;
}
.pinky{
  background-color: #FEE3EC;
  border-radius: 5px;
}
</style>