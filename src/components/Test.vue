<template>
  <div class="test">
    <router-link to="/index">← Back</router-link>
    <h1>{{ msg | capitalize }}</h1>
    <span :title="time">hover here!</span>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data () {
      return {
        msg: 'This is a test!',
        time: new Date()
      }
    },
    created: function () {
      // `this` 指向 vm 实例
      console.log('app is created')
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.toUpperCase()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: #42b983;
    text-decoration: none;
  }
</style>
