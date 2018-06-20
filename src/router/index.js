import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/Home'
import Meetup from '@/components/Meetup/Meetups'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetup
    },
    {
      path: '/meetups/new',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/user/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/user/signup',
      name: 'Signup',
      component: Signup
    }
  ],
  mode: 'history'
})
