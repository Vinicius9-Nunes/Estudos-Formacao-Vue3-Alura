<template>
  <div>
    <div class="columns">
      <div class="column">{{resposta?.Titulo}}</div>
      <div class="column is-one-quarter">
        <button class="button is-info is-outlined" @click="CopiarResposta">
          <span>Copiar</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue";
  import IResposta from "@/Interfaces/IResposta";

  export default defineComponent({
    name: "RespostaComponent",
    emits: ['aoCopiarResposta'],
    props: {
        resposta: {
            type: Object as PropType<IResposta>,
            required: true
        }
    },
    data(){
        return{

        }
    },
    methods:{
        CopiarResposta(){            
            this.$emit('aoCopiarResposta', this.resposta?.Texto)
        }
    }
  });
</script>

<style scoped>
</style>