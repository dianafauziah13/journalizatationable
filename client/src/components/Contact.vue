<template>
  <v-card color="#C0325F" class="rounded-lg" flat>
                <v-row>
                  <v-col cols="12" sm="4">
                    <v-card color="#C0325F" class="rounded-lg px-2 " flat>
                      <v-row>
                        <v-col class="fontsig fw-bold d-flex justify-center mt-3" cols="12" sm="12">
                          <h1 class="white--text">Welcome!</h1>
                          <br>
                        </v-col>
                        <h5 class="fontsig white--text text--lighten-4 d-flex justify-center">What you have done today?</h5>
                      </v-row>
                    </v-card>
                  </v-col>
                  <v-col cols="12" sm="3">
                    <v-card
                      color="transparent"
                      class="fontsig rounded-lg mx-2 px-2"
                      flat
                    >
                      <span class="caption white--text mt-n6">Entries</span>
                      <h4 class="white--text mb-5">{{post.length}}</h4>
                      <span class="caption white--text">Questions</span>
                      <h4 class="white--text">6</h4>
                    </v-card>
                  </v-col>
                  <v-col cols="12" sm="5">
                    <v-card color="transparent" class="fontsig rounded-lg px-2" flat>
                      <span class="caption white--text mt-n6">Grids</span>
                      <h4 class="white--text mb-5">{{post.length * 6}}</h4>
                      <span class="caption white--text">Photos</span>
                      <h4 class="white--text">0</h4>
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
        // console.log(this.post)       
    }
}
</script>

<style>

</style>