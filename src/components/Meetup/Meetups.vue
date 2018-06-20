<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  src="http://static.t13.cl/images/sizes/1200x675/1508860662-chile.jpg"
                  height="130px">
                </v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div class="headline">Unlimited Music</div>
                  <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum doloribus, delectus minima veritatis perspiciatis suscipit obcaecati consequuntur aspernatur quos, inventore ut deleniti repellat a quae reiciendis quo vero est sunt!</div>
                </v-card-title>
                <v-card-actions>
                  <v-btn to="meetups/1">
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

}
</script>

<style>

</style>
