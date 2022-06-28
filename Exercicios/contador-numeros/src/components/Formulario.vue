<template>
  <div>
    <form action="" class="box fomulario">
      <div class="field">
        <label for="numeroLabel">Até quanto você quer contar?</label>
        <div class="control">
          <input
            :disabled="desabilitarInput"
            v-model="contadorInput"
            type="number"
            name="numeroLabel"
            class="input"
            placeholder="Insira até quanto você quer contar."
          />
        </div>
      </div>
    </form>
    <section
      class="
        is-size-1 is-flex is-justify-content-center
        has-text-weight-bold
        numero-contador
      "
    >
      <strong>{{ contador }}</strong>
    </section>
    <div class="is-flex is-justify-content-center">
      <button class="button is-dark is-medium" @click="contar">
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
    data() {
      return {
        contadorInput: "",
        contador: 0,
        intervalo: 0,
        desabilitarInput: false,
      };
    },
    methods: {
      contar() {       
        if(isNaN(parseInt(this.contadorInput))){
          alert('É necessario informar um valor.')
          return
        }
                
        this.desabilitarInput = true;
        this.contador = 0;
        this.intervalo = setInterval(() => {
          if (this.verificarContagemTerminada()) {
            this.finalizar();
          } else {
            this.contador += 1;
            console.log(this.contador);
          }
        }, 500);
      },
      verificarContagemTerminada() {
        let valor = parseInt(this.contadorInput);
        return this.contador == valor;
      },
      finalizar() {
        clearInterval(this.intervalo);
        this.contadorInput = "";
        this.intervalo = 0;
        this.desabilitarInput = !this.desabilitarInput;
      },
    },
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