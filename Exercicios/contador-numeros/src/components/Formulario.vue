<template>
  <div>
    <form action="" class="box fomulario">
      <div class="field">
        <label for="numeroLabel">Até quanto você quer contar?</label>
        <div class="control">
            <input type="number" name="numeroLabel" class="input" placeholder="Insira até quanto você quer contar."/>
        </div>
      </div>
    </form>
    <section class="is-size-1 is-flex is-justify-content-center has-text-weight-bold numero-contador">
      <strong>00</strong>
    </section>
    <div class="is-flex is-justify-content-center">
        <button class="button is-dark is-medium">
        <span class="icon">
            <i class="fa-solid fa-circle-play"></i>
        </span>
        <span>Contar</span>
    </button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FomularioCentral",
  });
</script>

<style scoped>
.fomulario {
    margin-top: 2rem;
}
label {
    font-weight: bold;
    font-size: larger;
}

.numero-contador {
    margin: 3rem;
}
</style>