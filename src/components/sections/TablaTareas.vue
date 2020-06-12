

<template>
<div>
    <div  v-if="tareas.length > 0">
            <p>Tabla de usuarios</p>
            <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Fecha</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(tarea, i) in tareas" :key="i">
            <th scope="row">{{i}}</th>
            <td>{{tarea.description}}</td>
            <td>{{tarea.name}}</td>
            <td>{{tarea.email}}</td>
            <td>{{tarea.createdAt}}</td>
            </tr>
        </tbody>
        </table>
    </div>
    <div v-if="tareas.length === 0">
        No se encontraron tareas pendientes por el momento.
    </div>
</div>
</template>


<script>

export default {
  name: 'App',
  props: {
      tareas: Array
  }
  
  


}
</script>