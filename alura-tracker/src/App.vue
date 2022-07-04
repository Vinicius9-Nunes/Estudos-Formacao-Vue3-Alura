<template>
  <main  class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral/>
    </div>
<<<<<<< HEAD
    <div class="column is-three-quarter conteudo">
      <Formulario @aoCriarTarefa="criarTarefa"/>
=======
    <div class="column is-three-quarter">
      <Formulario @aoSalvarTarefa="salvarTarefa"/>
>>>>>>> parent of 3c6daa2 (Ajuste para modo escuro)
      <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
        <Box v-if="listaEstaVazia">
          Você não esta muito produtivo hoje :(
        </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, transformVNodeArgs } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Formulario from './components/Formulario.vue';
import Tarefa from './components/Tarefa.vue';
import ITarefa from './Interfaces/ITarefa'
import Box from './components/Box.vue';

export default defineComponent({
    name: "App",
    components: { BarraLateral, Formulario, Tarefa, Box },
    data(){
      return {
        tarefas: [] as ITarefa[]
      }
    },
    methods:{
<<<<<<< HEAD
      criarTarefa(descricaoTarefa: string){
        const VALOR_INICIAL_TAREFA = 0
        this.tarefas.push({descricao: descricaoTarefa, duracaoEmSegundos: VALOR_INICIAL_TAREFA})
      },
      trocarTema(modoEscuroAtivo: boolean){
        this.modoEscuroAtivo = modoEscuroAtivo
=======
      salvarTarefa(tarefa: ITarefa){
        this.tarefas.push(tarefa)
>>>>>>> parent of 3c6daa2 (Ajuste para modo escuro)
      }
    },
    computed:{
      listaEstaVazia(): boolean{
        return this.tarefas.length === 0
      }
    }
});
</script>

<style>
.lista{
  padding: 1.25rem;
}
</style>
