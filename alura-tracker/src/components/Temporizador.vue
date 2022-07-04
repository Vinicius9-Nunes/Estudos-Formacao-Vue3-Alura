<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <CronometroTarefa :tempoEmSegundo="tempoEmSegundo" />
    <Botao @aoClicar="iniciar" 
            :botao-habilitado="temporizadorIniciado"
            icone="fas fa-play"
            textoBotao="Play" />
    <Botao @aoClicar="finalizar" 
            :botao-habilitado="!temporizadorIniciado"
            icone="fas fa-stop"
            textoBotao="Stop" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import CronometroTarefa from "./CronometroTarefa.vue";
  import Botao from "./Botao.vue";
  export default defineComponent({
    name: "TemporizadorComponent",
    components: { CronometroTarefa, Botao },
    emits: ["aoTemporizadorFinalizado"],
    data() {
      return {
        tempoEmSegundo: 0,
        cronometro: 0,
        temporizadorIniciado: false,
      };
    },
    methods: {
      iniciar() {
        this.temporizadorIniciado = true;
        this.cronometro = setInterval(() => {
          this.tempoEmSegundo += 1;
        }, 1000);
        console.log("iniciando");
      },
      finalizar() {
        clearInterval(this.cronometro);
        this.temporizadorIniciado = false;
        this.$emit("aoTemporizadorFinalizado", this.tempoEmSegundo);
        this.tempoEmSegundo = 0;
      },
    },
  });
</script>