<template>
  <div>
    <Cabecalho />
  </div>
  <div class="block"></div>
  <div>
    <div class="columns">
      <div class="column is-one-quarter">
        <Resposta
          v-for="(resposta, indice) in respostas"
          v-bind:key="indice"
          :resposta="resposta"
          @aoCopiarResposta="PegarTextoAoCopiar"
        />
      </div>
      <div class="column caixa-resposta">
        <div class="caixa-interna">
          <EdicaoResposta :textoAtual="textoAtual" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue";
  import Cabecalho from "./components/Cabecalho.vue";
  import Resposta from "./components/Resposta.vue";
  import EdicaoResposta from "./components/EdicaoResposta.vue";
  import jsonRespostas from "./database/data.json";
  import IResposta from "./Interfaces/IResposta";

  export default defineComponent({
    name: "App",
    components: {
      Cabecalho,
      Resposta,
      EdicaoResposta,
    },
    data() {
      return {
        respostas: [] as PropType<IResposta[]>,
        textoAtual: "",
      };
    },
    methods: {
      PegarTextoAoCopiar(texto: string) {
        this.textoAtual = texto;
        navigator.clipboard.writeText(texto);
      }
    },
    mounted() {
      let json = JSON.stringify(jsonRespostas);
      this.respostas = JSON.parse(json).sort((a: IResposta, b: IResposta) => {
        if (a.Titulo > b.Titulo) return 1;
        if (a.Titulo < b.Titulo) return -1;
        return 0;
      });
    },
  });
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    background-color: rgba(219, 219, 219, 0.288);
  }
  .caixa-resposta {
    display: flex;
    justify-content: center;
  }
  .caixa-interna {
    position: fixed;
  }
</style>
