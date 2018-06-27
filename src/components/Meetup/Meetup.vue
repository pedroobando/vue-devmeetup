<template>
  <v-container>
    <v-layout row wrap>
      <v-flex x12>
        <v-card>
          <v-card-title>
            <h2 class="primary--text">{{ meetup.title }}</h2>
          </v-card-title>
          <v-card-media
            :src="meetup.imageUrl"
            height="340px">
          </v-card-media>
          <v-card-text>
            <div class="">
              <p class="info--text">{{ meetup.date }} - Toma el curso.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quidem perferendis aliquam laborum distinctio doloremque quam soluta iste officiis dolore dolores, aut reiciendis cum labore aliquid dolor. Sunt, quaerat cum?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloremque perspiciatis quia vel! Doloribus quasi, velit modi ipsum, architecto dicta ipsam ab harum repellendus corporis numquam? Reprehenderit officiis voluptatum rerum?</p>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="info">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }

}
</script>

<style>

</style>
