<template>
  <v-container>
    <v-layout row wrap class="mb-2">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large to="/meetups" class="info">Explorer Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large to="/meetups/new" class="info">Organize Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="meetup in imgMeetups" :src="meetup.imageUrl" :key="meetup.id">
            <span class="title">
              {{ meetup.title }}
            </span>
          </v-carousel-item>
        </v-carousel>        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    imgMeetups () {
      return this.$store.getters.featuredMeetups
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0,0,0,0.5);
  color:gray;
  font-size: 1em;
  padding: 20px;
  text-align: center;
}

</style>
