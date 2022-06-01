<template>
  <div class="milesBox">
    <h1>Miles & More</h1>
    <h3>Account status</h3>
    <h4>User email:{{userEmail}}</h4>
    <p>Miles: {{user.id}}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    userEmail: String,
  },

  data(){
    return {
      user:{
        id: NaN
      }
    }
  },
  mounted () {
    // get miles
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        this.user = response.data;
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.milesBox{
    background: var(--main-color);
    color: var(--main-text-color);
    padding: 1rem;
    font-size: 1.5rem; 
}
</style>
