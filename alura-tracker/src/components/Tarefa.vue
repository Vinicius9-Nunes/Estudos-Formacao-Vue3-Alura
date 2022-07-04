<template>

  <Box>
    <div class="columns">
      <div class="column is-7">
        {{ tarefa.descricao || "Tarefa sem descrição" }}
      </div>

      <div class="column">
<<<<<<< HEAD
        <CronometroTarefa :tempoEmSegundo="obterSegundosDecorridos" />
      </div>
      <div class="column">
        <Botao
          @aoClicar="iniciar"
          :botao-habilitado="temporizadorIniciado"
          icone="fas fa-play"
          textoBotao="Play"
        />
        <Botao
          @aoClicar="finalizar"
          :botao-habilitado="!temporizadorIniciado"
          icone="fas fa-stop"
          textoBotao="Stop"
        />
=======
        <Cronometro :tempoEmSegundo="tarefa.duracaoEmSegundos" />
>>>>>>> parent of 3c6daa2 (Ajuste para modo escuro)
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
  import ITarefa from "@/Interfaces/ITarefa";
  import { defineComponent, PropType } from "vue";
<<<<<<< HEAD
  import Box from "./Box.vue";
  import Botao from "./Botao.vue";
  import CronometroTarefa from "./CronometroTarefa.vue";

  export default defineComponent({
    name: "TarefaComponent",
    components: { Box, Botao, CronometroTarefa },
=======
  import Cronometro from "./Cronometro.vue";
import Box from "./Box.vue";

  export default defineComponent({
    name: "TarefaComponent",
    components: { Cronometro, Box },
>>>>>>> parent of 3c6daa2 (Ajuste para modo escuro)
    props: {
      tarefa: {
        type: Object as PropType<ITarefa>,
        required: true,
      },
    },
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
      },
      finalizar() {
        clearInterval(this.cronometro);
        this.temporizadorIniciado = false;
      },
    },
    computed: {
      obterSegundosDecorridos(): number {
        return this.tempoEmSegundo;
      },
    },
    mounted(){
      this.iniciar()
    }
  });
</script>

<style scoped>
</style>