<template>
    <v-card  class="rounded-lg" flat>
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
                  ></v-calendar>
                  <v-container class="bg-surface-variant">
                    <v-row no-gutters>
                      <v-col>
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
                  <v-btn color="#C0325F" class="withoutupercase ml-5">
                      <v-icon left>fas fa-plus</v-icon>
                      Edit Journal
                  </v-btn>
                </v-sheet>
              </v-card>
    
</template>

<script>
import API from '@/api';

export default { 
data: () => ({
  posts : {
    grid1 : "",
    grid2 : "",
    grid3 : "",
    grid4 : "",
    grid5 : "",
    grid6 : ""
  } ,
  type: "Happy",
    types: ["Happy", "Sad", "Normal"],
    mode: "Sunny",
    modes: ["Sunny", "Rainy", "Cloudy", "Foggy", "Windy", "Lightning"],
    weekday: [0, 1, 2, 3, 4, 5, 6],
    weekdays: [
      { text: "Sun - Sat", value: [0, 1, 2, 3, 4, 5, 6] },
      { text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] },
      { text: "Mon - Fri", value: [1, 2, 3, 4, 5] },
      { text: "Mon, Wed, Fri", value: [1, 3, 5] },
    ],
    value: "",
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
      "grey lighten-2"
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party",
    ],
}),
async created() {
      this.posts = await API.getAllPosts();
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