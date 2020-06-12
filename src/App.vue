<template>
  <div id="app">
    <div class="nav">
      <router-link to="/form">Form</router-link> | 
      <router-link to="/respuestas">Respuestas</router-link>
    </div>
    <router-view/>
  </div> 
</template>

<script>

export default {
  name: 'App',
  components: {
  }
  
  


}
</script>

<style>
#app {

}
</style>
