<template>
  
  <div id="app" class="container">

    <h1>Ingreso de tareas</h1>

    <vue-form :state="state" @submit.prevent="onSubmit">
      
    <validate tag="label">
      <div class="form-group row">
        <label for="description" >Descripción:</label>
        <input type="textarea" class="form-control"  v-model="model.description" required name="description" :maxlength="maxLength" :minlength="minLength"/> 
        
      </div>
    </validate>
    
    <field-messages name="description" show="$dirty">
      <div slot="required" class="text-danger"> El campo descripcion es requerido. </div>
      <div v-if="model.description.length === maxLength" class="text-danger">No se pueden ingresar mas de {{maxLength}} caracteres.</div>
      <div slot="minlength" class="text-danger">No se pueden ingresar menos de {{minLength}} caracteres.</div>
    </field-messages>

  
    <validate tag="label">
      <div class="form-group row">
          <label for="name">Nombre:</label>
          <input type="text" class="form-control" v-model="model.name" required name="name"/>
      </div>
    </validate>

    <field-messages name="name" show="$dirty">
      <div slot="required" class="text-danger"> El campo nombre es un campo requerido. </div>
    </field-messages>


    <validate tag="label">
    <div class="form-group row">
        <label for="email">e-mail:</label>
        <input type="email" class="form-control" v-model="model.email" required name="email"/>
    </div>
    </validate>

    <field-messages name="email" show="$dirty">
      <div slot="required" class="text-danger"> El campo email es un campo requerido. </div>
      <div slot="email" class="text-danger"> El mail ingresado no es valido. </div>

    </field-messages>

    <button type="submit">Enviar</button>
     <div v-if="formError" class="text-danger"> {{formError}} </div>
    
  </vue-form>
  <TablaTareas :tareas="tareas" />
  </div>

</template>


<script>
import TablaTareas from './TablaTareas';

export default {
  name: 'app',
  components: {
    TablaTareas
  },
  data() {
    return {
      state :{},
      formError : null,
      model: {
        description: '',
        name: '',
        email: ''
      },
      minLength: 10,
      maxLength: 50,
      tareas: []
    }
  },
  mounted: function(){
    this.getTareas();
  },
  methods: {
    onSubmit: function () {
      console.log(this.state);
      if(this.state.$invalid) {
        this.formError = "Verifique el formulario ya que hubo un error."
        return 
      }
      this.formError = null;
      this.axios.post('https://5ee2b2ab8b27f30016094da1.mockapi.io/tareas', this.model)
        .then(() => {
          this.model = {
            description: '',
            name: '',
            email: ''
          };
        })
        .catch((error) => {
          this.formError = error.message;
        })
    },
    getTareas: function(){
        this.axios.get('https://5ee2b2ab8b27f30016094da1.mockapi.io/tareas')
        .then((res) => {
          this.tareas = res.data;
        })
        .catch((error) => {
          this.formError = error.message;
        })
    }
  }
}
</script>


<style scoped>



</style>
