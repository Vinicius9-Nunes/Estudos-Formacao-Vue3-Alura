<template>
  <div class="cabecalho box">
    <img src="../assets/logo-senac.png" alt="logo" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "CabecalhoComponent",
  });
</script>

<style scoped>
.cabecalho {
    padding-bottom: 1.1rem;
    padding-top: 1.1rem;
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
    background-color: rgb(247, 161, 3);
}
</style>