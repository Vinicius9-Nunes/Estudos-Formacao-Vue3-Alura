<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulario para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja"
          v-model="descricaoTarefa"
        />
      </div>
      <div class="column">
        <Temporizador @aoTemporizadorFinalizado="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
import Temporizador from "./Temporizador.vue";

  export default defineComponent({
    name: "FormularioMeio",
    components: { Temporizador },
    data(){
      return{
        descricaoTarefa: ''
      }
    },
    methods: {
      finalizarTarefa(tempoDecorrido: number): void{
        console.log('tempo da tarefa', tempoDecorrido);
        console.log('desc da tarefa: ', this.descricaoTarefa);
        this.descricaoTarefa = ''        
      }
    }
});
</script>

<style>
</style>