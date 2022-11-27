<template>
  <v-card  class="rounded-lg" flat>
          <v-row justify="center" class="pt-2 rounded-lg mt-2">
            <v-date-picker
              v-model="picker"
              color="#2784FF"
              width="260"
            ></v-date-picker>
          </v-row>
              <v-sheet tile height="54" class="d-flex">
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
                <!-- <v-calendar
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
                <v-container class="bg-surface-variant" v-for="post in post" :key="post.created">
                  <v-row no-gutters >
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
                        ></v-textarea>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-container>
                <v-btn @click= "updateForm()" color="#2784FF" class="withoutupercase ml-5">
                    <v-icon left>fas fa-plus</v-icon>
                    Edit Journal
                </v-btn>
              </v-sheet>
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
         },
         picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
         chooseDate: new Date().toISOString().split('T')[0]
        //  chooseDate: picker
              
            
      }
},
  async created() {
      const response = await API.getPostByDate(this.chooseDate);
      // const response = await API.getAllPosts()
      // const response = await API.getPostByID(this.$route.params.id);
      this.post = response;
      console.log(this.post)
      console.log(this.chooseDate)

  },
      methods: {
          // selectFile(file){
          //     this.image = file[0];
          // },
          async updateForm() {

            const post = this.post[0];
            console.log(post);

            // const formData = {
            //     grid1 : post.grid1,
            //     grid2 : post.grid2, 
            //     grid3 : post.grid3,
            //     grid4 : post.grid4,
            //     grid5 : post.grid5,
            //     grid6 : post.grid6
            //   }
            //   console.log("ini formdata");
            //   console.log(formData);
              // const response = await API.updatePost(this.$route.params.id, formData);
              
              const response = await API.updatePost(post._id, post);
              console.log(response);
              this.$router.push({ name: 'Home', params: {message: response.message} });
              
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
</style>