import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/Home')
const Profile = () => import('@/components/User/Profile')
const Signup = () => import('@/components/User/Signup')
const Signin = () => import('@/components/User/Signin')
import ChatRoom from '@/components/chat/chatRoom.vue'
import Boards from '@/components/boards/boards.vue'
import BoardDetails from '@/components/boards/boardDetails.vue'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/chatroom',
      name: 'ChatRoom',
      component: ChatRoom
    },
    {
      path: '/boards',
      name: 'Boards',
      component: Boards
    },
    {
      path: '/board/:id',
      name: 'BoardDetails',
      component: BoardDetails
    }
  ],
  mode: 'history'
})
