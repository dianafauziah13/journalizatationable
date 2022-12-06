<template>
    <v-card  class="fontsig rounded-lg" flat>

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
            <br>
            <br>
                <v-sheet tile height="54" class="d-flex justify-start mb-10">
                  <v-btn icon class="mt-5 mr-1" @click="getDate(-1)">
                    <v-icon color="grey" large>mdi-chevron-left</v-icon>
                  </v-btn>
                  <!-- <input placeholder="my story at" v-model="date"> -->
                  <v-col
                    cols="12"
                    sm="4"
                    md="4"
                  >
                    <v-text-field
                      label="Today Is"
                      filled
                      dense
                      v-model="date"
                      prepend-icon="mdi-calendar"
                      min-width="auto"
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
                  <v-btn icon class="mt-5 ml-1" @click="getDate(1)">
                    <v-icon color="grey" large >mdi-chevron-right</v-icon>
                  </v-btn>
                </v-sheet>
                <v-sheet height="600">

                  <v-container v-if="post.length===0" class="bg-surface-variant ma-5">
                    <h2 class="fontsig grey--text font-weight-bold d-flex justify-center">You're not submitted a journal today!</h2>
                  </v-container>
                  <v-container v-else class="bg-surface-variant" v-for="post in post" :key="post.created">

                    <v-row no-gutters >
                      <v-col >
                        <v-sheet class="pa-1 ma-1">
                          <h7 class="pink--text font-weight-bold mb-4 text-truncate d-inline-block" style="max-width: 270px;">How are you today?</h7>
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
                        <v-sheet class="pa-1 ma-1">
                          <h7 class="pink--text font-weight-bold mb-4 text-truncate d-inline-block" style="max-width: 270px;">What can i do to make better future?</h7>
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
                        <v-sheet class="pa-1 ma-1">
                          <h7 class="pink--text font-weight-bold mb-4 text-truncate d-inline-block" style="max-width: 270px;">What have i done with my family today?</h7>
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
                        <v-sheet class="pa-1 ma-1">
                          <h7 class="pink--text font-weight-bold mb-4 text-truncate d-inline-block" style="max-width: 270px;">Problem that i encounter today</h7>
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
                        <v-sheet class="pa-1 ma-1">
                          <h7 class="pink--text font-weight-bold mb-4 text-truncate d-inline-block" style="max-width: 270px;">Activities that i do to make me happy today</h7>
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
                        <v-sheet class="pa-1 ma-1">
                          <h7 class="pink--text font-weight-bold mb-4 text-truncate d-inline-block" style="max-width: 270px;">Word to describe today</h7>
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
                  </v-container>


                  <!-- <v-btn v-if="post.length===0" to ="/story" color="#C0325F" class="withoutupercase ml-3">
                      <v-icon left>mdi-pen</v-icon>
                      Add Journal
                  </v-btn> -->
                  <v-btn v-if="post.length!==0" @click= "updateForm()" color="#C0325F" class="withoutupercase ml-3">
                      <v-icon left>mdi-pen</v-icon>
                      Edit Journal
                  </v-btn>
                  <v-btn v-if="post.length!==0" @click= "Delete()" color="#C0325F" class="withoutupercase ml-3">
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
        // console.log(this.post)
        // console.log(this.chooseDate)
        // console.log("ini date",this.date)
        
    },
        methods: {
            async getDate(day){
              const start = this.date;
              const newDate = moment(start);
              const mydate = newDate.add(day, "day").format("YYYY-MM-DD");
              this.date = mydate;
              this.post = await API.getPostByDate(this.date);

              // console.log(this.post)

            },
            async updateForm() {
              const post = this.post[0];
              // console.log(post); 
              const response = await API.updatePost(post._id, post);
              // console.log(response);
              this.$router.push({ name: 'Home', params: {message: response.message} });
              alert('Edit Data Success!!')       

            },
            async Delete() {
              const post = this.post[0];
              const response = await API.deletePost(post._id);
              // console.log(response);
              this.$router.push({ name: 'Home', params: {message: response.message} });
              alert('Delete Data Success!!')       
              window.location.reload();

            }
        }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@;500;600;700&display=swap');

.fontsig{
  font-family: 'Signika', sans-serif;
}
.greyy{
background-color: #eee6e6;
border-radius: 5px;
}
.v-btn.withoutupercase {
text-transform: none !important;
color: white;
}

</style>