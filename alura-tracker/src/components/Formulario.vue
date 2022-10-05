<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-5"
        role="form"
        aria-label="Formulario para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja"
          v-model="descricaoTarefa"
          
        />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o Projeto</option>
            <option
              :value="projeto.id"
              v-for="projeto in projetos"
              :key="projeto.id"
            >
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { INotificao, TipoNotificao } from "@/Interfaces/Notificao";
  import { key } from "@/store";
  import { NOTIFICAR } from "@/store/tipo-mutacoes";
  import { computed, defineComponent } from "vue";
  import { useStore } from "vuex";
  import Temporizador from "./Temporizador.vue";

  export default defineComponent({
    name: "FormularioMeio",
    components: { Temporizador },
    emits: ["aoSalvarTarefa"],
    data() {
      return {
        descricaoTarefa: "",
        idProjeto: "",
      };
    },
    methods: {
      finalizarTarefa(tempoDecorrido: number): void {
        const projeto = this.projetos.find((proj) => proj.id == this.idProjeto);
        if (!projeto) {
          this.store.commit(NOTIFICAR, {
            titulo: "Ops!!! Erro encontrado",
            texto:
              "Você não pode adicionar uma tarefa sem vincular ela a um projeto.",
            tipo: TipoNotificao.FALHA,
          } as INotificao);
          return;
        }

        this.$emit("aoSalvarTarefa", {
          duracaoEmSegundos: tempoDecorrido,
          descricao: this.descricaoTarefa,
          projeto: this.projetos.find((proj) => proj.id == this.idProjeto),
        });
        this.descricaoTarefa = "";
      },
    },
    setup() {
      const store = useStore(key);
      return {
        projetos: computed(() => store.state.projetos),
        store,
      };
    },
  });
</script>

<style>
  .formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
  }
</style>