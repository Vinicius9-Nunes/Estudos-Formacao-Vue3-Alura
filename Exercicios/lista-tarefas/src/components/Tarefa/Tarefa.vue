<template>
  <form class="row g-3">
    <div class="form-check form-check-inline">
      <!-- <input class="form-check-input" type="checkbox" /> -->
      <label class="form-check-label" for="inlineCheckbox1">{{
        nomeTarefa
      }}</label>
      <span>
        <i class="bi bi-check"></i>
      </span>
      <!-- <button type="submit" class="btn btn-primary mb-1">Salvar</button> -->
    </div>
  </form>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "TarefaComponent",
    data() {
      return {
        nomeTarefa: "Teste",
      };
    },
  });
</script>

<style scoped>
</style>