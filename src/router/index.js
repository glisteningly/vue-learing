import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Watcher from '@/components/Watcher'
import Question from '@/components/Question'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/watcher',
      name: 'Watcher',
      component: Watcher
    },
    {
      path: '/question',
      name: 'Question',
      component: Question
    }
  ]
})
