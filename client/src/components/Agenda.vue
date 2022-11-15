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
                        <v-sheet class="pa-2 ma-2">
                          <v-textarea
                            bg-color= "black"
                            color="cyan"
                            label="How are you today"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-2 ma-2">
                          <v-textarea
                            bg-color="grey-lighten-2"
                            color="cyan"
                            label="What can i do to make better future"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-2 ma-2">
                          <v-textarea
                            bg-color="grey-lighten-2"
                            color="cyan"
                            label="What have i done with my family today"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>

                      <v-responsive width="100%"></v-responsive>

                      <v-col>
                        <v-sheet class="pa-2 ma-2">
                          <v-textarea
                            bg-color="grey-lighten-2"
                            color="cyan"
                            label="Problem that i encounter today"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-2 ma-2">
                          <v-textarea
                            bg-color="grey-lighten-2"
                            color="cyan"
                            label="Activities that i do to make me happy today"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                      <v-col>
                        <v-sheet class="pa-2 ma-2">
                          <v-textarea
                            bg-color="grey-lighten-2"
                            color="cyan"
                            label="Word to describe today"
                          ></v-textarea>
                        </v-sheet>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-sheet>
              </v-card>
    
</template>

<script>
export default {
data: () => ({
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
})
}
</script>

<style>

</style>