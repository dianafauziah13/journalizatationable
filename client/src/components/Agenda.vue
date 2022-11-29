<template>
    <v-card  class="rounded-lg" flat>

            <v-row align="center" class="rounded-lg my-2 ml-1">
              <v-date-picker
                v-model="date"
                color="#C0325F"
                full-width
                :landscape="$vuetify.breakpoint.smAndUp"
                @change="getDate()"
                show-adjacent-months

              ></v-date-picker>
            </v-row>
                <v-sheet tile height="54" class="d-flex">
                  <v-btn icon class="ma-2" @click="getDate(-1)">
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <!-- <input placeholder="my story at" v-model="date"> -->
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      label="Today Is"
                      placeholder="Dense & Rounded"
                      filled
                      rounded
                      dense
                      v-model="date"
                      prepend-icon="mdi-calendar"
                    ></v-text-field>
                  </v-col>
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

                  <v-container v-if="post.length===0" class="bg-surface-variant ma-3">
                    <h2>You're not submitted a journal today!</h2>
                  </v-container>
                  <v-container v-else class="bg-surface-variant" v-for="post in post" :key="post.created">

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


                  <!-- <v-btn v-if="post.length===0" to ="/story" color="#C0325F" class="withoutupercase ml-3">
                      <v-icon left>mdi-pen</v-icon>
                      Add Journal
                  </v-btn> -->
                  <v-btn v-if="post.length!==0" @click= "updateForm()" color="#C0325F" class="withoutupercase ml-3">
                      <v-icon left>mdi-pen</v-icon>
                      Edit Journal
                  </v-btn>
                  <v-btn v-if="post.length!==0" @click= "Delete()" color="#EA85B6" class="withoutupercase ml-3">
                      <v-icon left>mdi-delete</v-icon>
                      Delete
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

              console.log(this.post)

            },
            async updateForm() {
              const post = this.post[0];
              console.log(post); 
              const response = await API.updatePost(post._id, post);
              console.log(response);
              this.$router.push({ name: 'Home', params: {message: response.message} });
              alert('Edit Data Success!!')       

            },
            async Delete() {
              const post = this.post[0];
              const response = await API.deletePost(post._id);
              console.log(response);
              this.$router.push({ name: 'Home', params: {message: response.message} });
              alert('Delete Data Success!!')       
              window.location.reload();

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