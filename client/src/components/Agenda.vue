<template>
    <v-card  class="rounded-lg" flat>
            <v-row justify="center" class="pt-2 rounded-lg mt-2">
              <v-date-picker
                v-model="date"
                color="#2784FF"
                width="260"
              ></v-date-picker>
            </v-row>
                <v-sheet tile height="54" class="d-flex">
                  <v-btn icon class="ma-2" @click="getDate(-1)">
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <input placeholder="my story at" v-model="date">
                  <v-select
                    v-model="date"
                    :items="types"
                    dense
                    outlined
                    hide-details
                    class="ma-2"
                    label="Today's is ?"
                  ></v-select>
                  <!-- <v-select
                    v-model="mode"
                    :items="modes"
                    dense
                    outlined
                    hide-details
                    label="Today's Weather"
                    class="ma-2"
                  ></v-select>
                  <v-spacer></v-spacer> -->
                  <v-btn icon class="ma-2" @click="getDate(1)">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-sheet>
                <v-sheet height="600">
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


                  <v-btn @click= "updateForm()" color="#2784FF" class="withoutupercase ml-5">
                      <v-icon left>fas fa-plus</v-icon>
                      Edit Journal
                  </v-btn>
                </v-sheet>
              </v-card>
    
</template>

<script>
import API from '@/api';
import moment from 'moment'

export default { 
  data() {
        return {
            rules: [(value)=>!!value || "This field is required"],
            post : [],
            data: '',
            types : new Date().toISOString().split('T')[0],
              
            picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
            .toISOString()
            .substr(0, 10),
            chooseDate: new Date().toISOString().split('T')[0]
            // chooseDate: "2022-11-25"
                
              
            
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
    async created() {
        const response = await API.getPostByDate(this.chooseDate);
        this.post = response;
        console.log(this.post)
        console.log(this.chooseDate)
        console.log("ini date",this.date)
        
    },
        methods: {
            async getDate(day){
              const start = this.date;
              const newDate = moment(start);
              const mydate = newDate.add(day, "day").format("YYYY-MM-DD");
              this.date = mydate;
              this.post = await API.getPostByDate(this.date);
            },
            async updateForm() {

              const post = this.post[0];
              console.log(post);
                
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