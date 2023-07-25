<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{name:'About'}">About</router-link> |
    <router-link :to="{name:'Jobs'}">Jobs</router-link>
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

  <router-view/>
</template>

<script>
export default {
  methods:{
    redirect(){
      this.$router.push({name:'Home'})
    },
    back(){
      this.$router.go(-1) // no. of steps
    },
    forward(){
      this.$router.go(1)
    }

  }
}
</script>

<style>
  #nav{
    margin-bottom: 20px;
    text-align: center;
    font-size: large;
  }
  #nav a {
    padding: 2px;
  }
  #nav a.router-link-active{
    background-color: rgb(243, 43, 43);
    color: white;
    padding:8px;
    border-radius: 8px;
  }
</style>