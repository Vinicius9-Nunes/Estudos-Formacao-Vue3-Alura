<template>
  <Box>
    <div class="columns">
      <div class="column is-7">{{tarefa.descricao || 'Tarefa sem descrição'}}</div>
      <div class="column">
        <CronometroTarefa :tempoEmSegundo="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </Box>
</template>
<script lang="ts">
  import ITarefa from "@/Interfaces/ITarefa";
  import { defineComponent, PropType } from "vue";
  import CronometroTarefa from "./CronometroTarefa.vue";
import Box from "./Box.vue";
  export default defineComponent({
    name: "TarefaComponent",
    components: { CronometroTarefa, Box },
    props: {
      tarefa: {
        type: Object as PropType<ITarefa>,
        required: true
      },
    },
  });
</script>
<style scoped>
</style>