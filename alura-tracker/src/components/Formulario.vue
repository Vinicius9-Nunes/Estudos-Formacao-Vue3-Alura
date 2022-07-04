<template>
  <div class="box formulario">
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
        <button class="button" @click="criarTarefa">Criar Tarefa</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

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
</script>

<style>
  .formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
  }
</style>