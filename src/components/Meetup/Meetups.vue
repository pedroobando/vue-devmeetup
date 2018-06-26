<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card color="blue-grey darken-2" class="white--text my-2" v-for="meetup in meetups" :key="meetup.id" >
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  :src="meetup.imageUrl"
                  height="130px">
                </v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div class="headline">{{ meetup.title }}</div>
                  <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum doloribus, delectus minima veritatis perspiciatis suscipit obcaecati consequuntur aspernatur quos, inventore ut deleniti repellat a quae reiciendis quo vero est sunt!</p>
                    <p class="text-xs-right">Fecha: {{ meetup.date }}</p>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn :to="'meetups/' + meetup.id">
                    <v-icon left light>arrow_forward</v-icon>
                    View Meetup
                  </v-btn>

                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }

}
</script>

<style>

</style>
