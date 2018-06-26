import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {imageUrl: 'https://pbs.twimg.com/media/DfqbQKmVAAE4uri.jpg', id: 'code01', title: 'Porque nodejs', date: '2018-06-15'},
      {imageUrl: 'https://pbs.twimg.com/media/Dfr_Is5X4AAw_pd.jpg', id: 'code02', title: 'Conociendo a Vue.js', date: '2018-06-12'},
      {imageUrl: 'https://pbs.twimg.com/media/DfsaLkkWkAEDAWF.jpg', id: 'code03', title: 'Introduccion a los thread de NodeJs', date: '2018-06-05'},
      {imageUrl: 'https://pbs.twimg.com/media/DXzFTx0XcAArf-x.jpg', id: 'code04', title: 'Vuetif.js con Vue.js', date: '2018-06-10'},
      {imageUrl: 'https://pbs.twimg.com/media/DVi54vmWAAAF_WH.jpg', id: 'code05', title: 'Aplicaciones apirest', date: '2018-06-09'},
      {imageUrl: 'https://pbs.twimg.com/media/C_lHAjGXgAIrL-f.jpg', id: 'code06', title: 'Squelize con TypeScript', date: '2018-06-13'}
    ],
    user: {
      id: 'user01',
      registeredMeetups: ['code02']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
