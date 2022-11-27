<template>
  <v-card color="white" class="rounded-lg mt-2" flat>
                <v-row>
                  <v-col cols="12" sm="4">
                    <v-card color="#2784FF" class="rounded-lg px-2" flat>
                      <v-row>
                        <v-col class="d-flex justify-center mt-5" cols="12" sm="12">
                          <h1 class="white--text">Hello, Diana!</h1>
                        </v-col>
                        <v-col cols="12" sm="12" class="mt-3">
                          <v-row>
                            <v-col cols="12" sm="12">
                              <h5 class="grey--text text--lighten-4 d-flex justify-center">What you have done today?</h5>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                  <v-col cols="12" sm="3">
                    <v-card
                      color="transparent"
                      class="rounded-lg mx-2 px-2"
                      flat
                    >
                      <span class="caption grey--text mt-n6">Entries</span>
                      <h4 class="black--text mb-5">{{post.length}}</h4>
                      <span class="caption grey--text">Questions</span>
                      <h4 class="black--text">6</h4>
                    </v-card>
                  </v-col>
                  <v-col cols="12" sm="5">
                    <v-card color="transparent" class="rounded-lg px-2" flat>
                      <span class="caption grey--text mt-n6">Grids</span>
                      <h4 class="black--text mb-5">{{post.length * 6}}</h4>
                      <span class="caption grey--text">Photos</span>
                      <h4 class="black--text">0</h4>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
</template>

<script>
import API from '@/api';

export default {
  data() {
        return {
            post : [],
        }
  },
    async created() {
        const response = await API.getAllPosts();
        this.post = response;
        console.log(this.post)       
    }
}
</script>

<style>

</style>