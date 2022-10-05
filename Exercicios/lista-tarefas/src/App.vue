<template>
  <h1>Tarefas</h1>
  <div>
    <b-card>
      <CadastrarTarefa />
      <Tarefa />
    </b-card>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
import CadastrarTarefa from "./components/Tarefa/CadastrarTarefa.vue";
import Tarefa from "./components/Tarefa/Tarefa.vue";

  export default defineComponent({
    name: "App",
    components: { CadastrarTarefa, Tarefa }
});
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
