<template>
  <div class="watcher">
    <router-link to="/">← Back</router-link>
    <div id="demo">{{ fullName }}</div>
  </div>
</template>

<script>
  export default {
    name: 'watcher',
    data () {
      return {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
      }
    },
    watch: {
      firstName: function (val) {
        this.fullName = val + ' ' + this.lastName
      },
      lastName: function (val) {
        this.fullName = this.firstName + ' ' + val
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
