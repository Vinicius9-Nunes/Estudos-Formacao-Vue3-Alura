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
<<<<<<< HEAD
        <button class="button" @click="criarTarefa">Criar Tarefa</button>
=======
        <Temporizador @aoTemporizadorFinalizado="finalizarTarefa"/>
>>>>>>> parent of 3c6daa2 (Ajuste para modo escuro)
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
<<<<<<< HEAD

  export default defineComponent({
    name: "FormularioMeio",
    emits: ["aoCriarTarefa"],
    data() {
      return {
        descricaoTarefa: "",
      };
    },
    methods: {
      criarTarefa(): void {
        this.$emit("aoCriarTarefa", this.descricaoTarefa);
        this.descricaoTarefa = "";
      },
    },
  });
=======
import Temporizador from "./Temporizador.vue";

  export default defineComponent({
    name: "FormularioMeio",
    components: { Temporizador },
    emits: ['aoSalvarTarefa'],
    data(){
      return{
        descricaoTarefa: ''
      }
    },
    methods: {
      finalizarTarefa(tempoDecorrido: number): void{
        this.$emit('aoSalvarTarefa', {
          duracaoEmSegundos: tempoDecorrido,
          descricao: this.descricaoTarefa
        })
        this.descricaoTarefa = ''        
      }
    }
});
>>>>>>> parent of 3c6daa2 (Ajuste para modo escuro)
</script>

<style>
</style>