<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
  import IProjeto from "@/Interfaces/IProjeto";
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ProjetosView",
    data() {
      return {
        nomeDoProjeto: "",
        projetos: [] as IProjeto[]
      };
    },
    methods: {
      salvar() {
        const projeto: IProjeto = {
            nome: this.nomeDoProjeto,
            id: new Date().toISOString()
        }
        this.projetos.push(projeto)
        this.nomeDoProjeto = ''
      },
    },
  });
</script>

<style>
</style>