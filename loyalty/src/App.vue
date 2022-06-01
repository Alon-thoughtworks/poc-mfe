<template>
  <div v-if="isUserLogin"><HelloWorld v-bind:userEmail="userProfile.email"/></div>
  <h1 v-else>Please <a href="/signin">login</a> in first </h1>
</template>

<script>
import HelloWorld from './components/Miles.vue'
import { isEmpty } from 'lodash'

export default {
  name: 'App',
  props: {
    userProfile: Object
  },
  components: {
    HelloWorld
  },

  // mounted() {
  //   console.log(`the component is now mounted.`, this.userProfile)
  // },
  computed: {
   
    isUserLogin() {
      return !isEmpty(this.userProfile)
    }
  }
}
</script>

<style>

</style>
