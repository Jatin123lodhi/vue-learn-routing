<template>
  <h1>Jobs Page</h1>
  <br>
  <div v-for="(job,idx) in jobs" :key="idx" style="margin-bottom: 20px;">
    <router-link :to="{name:'JobDetails', params:{id:job.id}}">
        <h2>{{ job.title }} </h2>
    </router-link >
    <h4>JobId - {{ job.id }}</h4>
    <h5>
        Job Description-
        {{ job.desc }}
    </h5>
  </div>
  <div v-if="isLoading">Loading...</div>
</template>

<script>
export default {
    data(){
        return {
            jobs : [],
            isLoading: true
        }
    },
    mounted(){
        fetch("http://localhost:3000/jobs")
        .then(res=> res.json())
        .then(data=>this.jobs=data)
        .catch(err=>console.log(err.message))
        .finally(()=>this.isLoading=false)
    }
}
</script>
    
<style>

</style>