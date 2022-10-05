<template>
  <div class="corpo">
    <b-card border-variant="dark"
    class="card center mb-4">
    <form class="row g-3">
      <div class="col-auto">
        <input
          type="text"
          class="form-control"
          placeholder="Insira sua Tarefa aqui."
        />
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">
          Salvar
        </button>
      </div>
    </form>
  </b-card>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "@vue/runtime-core";

  export default defineComponent({
    name: "CadastrarTarefaComponent",
  });
</script>

<style scoped>
  .card {
    max-width: 60vw;
  }
  .corpo{
    display: flex;
    justify-content: center;
  }
</style>