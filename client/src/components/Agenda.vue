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
                  <v-container v-if="post.length===0" class="bg-surface-variant ma-3">
                    <h2>You're not submitted a journal today!</h2>
                  </v-container>
                  <v-container v-else class="bg-surface-variant" v-for="post in post" :key="post.created">
                    <v-row no-gutters >
                      <v-col >
                        <v-sheet class="pa-1 ma-1">
                          <v-textarea  
                            class="pinky"
                            background-color="#FEE3EC"
                            auto-grow
                            variant="outlined"
                            rows="5"
                            clearable
                            label="How are you today?"
                          >{{posts.grid1}}</v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-1 ma-1">
                          <v-textarea
                            class="pinky"
                            background-color="#FEE3EC"
                            auto-grow
                            rows="5"
                            clearable
                            label="What can i do to make better future"
                          >{{posts.grid2}}</v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-1 ma-1">
                          <v-textarea
                            class="pinky"
                            background-color="#FEE3EC"
                            auto-grow
                            rows="5"
                            clearable
                            label="What have i done with my family today"
                          >{{posts.grid3}}</v-textarea>
                        </v-sheet>
                      </v-col>

                      <v-responsive width="100%"></v-responsive>

                      <v-col>
                        <v-sheet class="pa-1 ma-1">
                          <v-textarea
                            class="pinky"
                            background-color="#FEE3EC"
                            auto-grow
                            rows="5"
                            clearable
                            label="Problem that i encounter today"
                          >{{posts.grid4}}</v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-1 ma-1">
                          <v-textarea
                            class="pinky"
                            background-color="#FEE3EC"
                            auto-grow
                            rows="5"
                            clearable
                            label="Activities that i do to make me happy today"
                          >{{posts.grid5}}</v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-1 ma-1">
                          <v-textarea
                            class="pinky"
                            background-color="#FEE3EC"
                            auto-grow
                            rows="5"
                            clearable
                            label="Word to describe today"
                            margin="20px"
                          >{{posts.grid6}}</v-textarea>
                        </v-sheet>
                      </v-col>
                    </v-row>
                  </v-container>

                  <v-btn v-if="post.length===0" to ="/story" color="#C0325F" class="withoutupercase ml-3">
                      <v-icon left>mdi-pen</v-icon>
                      Add Journal
                  </v-btn>
                  <v-btn v-else @click= "updateForm()" color="#C0325F" class="withoutupercase ml-3">
                      <v-icon left>mdi-pen</v-icon>
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
  // async created() {
  //     const response = await API.getPostByDate(this.chooseDate);
  //     // const response = await API.getAllPosts()
  //     // const response = await API.getPostByID(this.$route.params.id);
  //     this.post = response;
  //     console.log(this.post)
  //     console.log(this.chooseDate)


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