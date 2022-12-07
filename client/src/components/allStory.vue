<template>
  <v-app>
    <SideBar/>
    <v-card  class="rounded-lg" flat>
      

                  <v-container class=" bg-surface-variant" >
                    <VueHtml2pdf
                        :show-layout="false"
                        :float-layout="false"
                        :enable-download="true"
                        :preview-modal="false"
                        :paginate-elements-by-height="1400"
                        filename="myStory"
                        :pdf-quality="2"
                        :manual-pagination="false"
                        pdf-format="a4"
                        pdf-orientation="portrait"
                        pdf-content-width="800px"
                        ref="html2Pdf"
                    >
                        <section slot="pdf-content">
                          <v-row class="h2 mt-10"><center>My Story</center></v-row>
                    <v-row no-gutters v-for="post in post" :key="post._id">
                      
                        <v-row class="h4 fontsig ma-3">
                            {{formatDate(post.created)}}
                        </v-row>
                        <v-row class="h5 fw-normal ma-3">
                          {{post.grid1}}. {{post.grid2}}. {{post.grid3}}. {{post.grid4}}. {{post.grid5}}. {{post.grid6}}
                        </v-row>
                        
                      <!-- <v-col >
                        <v-sheet class="pa-1 ma-1">
                          <h5 class="pink--text font-weight-bold mb-4">How are you today?</h5>
                          {{post.grid1}} 
                          {{post.grid2}}
                          {{post.grid3}}
                          {{post.grid4}}
                          {{post.grid5}}
                          {{post.grid6}}
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
                            disabled
                            counter
                            full-width
                            single-line
                            v-model="post.grid1"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-1 ma-1">
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
                            disabled
                            counter
                            full-width
                            single-line
                            v-model="post.grid2"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-1 ma-1">
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
                            disabled
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
                            disabled
                            counter
                            full-width
                            single-line
                            v-model="post.grid4"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-1 ma-1">
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
                            disabled
                            counter
                            full-width
                            single-line
                            v-model="post.grid5"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-1 ma-1">
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
                            disabled
                            counter
                            full-width
                            single-line
                            v-model="post.grid6"
                          ></v-textarea>
                        </v-sheet>
                      </v-col> -->
                    </v-row>
                  </section>
                  </VueHtml2pdf>
                  <v-btn color="#C0325F" class="withoutupercase mt-3 ml-5" @click='generateReport()'>
                    <v-icon left>mdi-download</v-icon>
                    Export To PDF
                  </v-btn>
                  </v-container>
        
              </v-card>
  </v-app> 
</template>

<script>
import API from '@/api';
import SideBar from './SideBar.vue';
import VueHtml2pdf from 'vue-html2pdf';


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
      SideBar,
      VueHtml2pdf
    },
        methods: {
          formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
          },
          generateReport () {
            this.$refs.html2Pdf.generatePdf()
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