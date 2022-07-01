<template>
  <button class="button" @click="eventoClique" :disabled="botaoHabilitado">
    <span class="icon">
      <i :class="icone"></i>
    </span>
    <span>{{textoBotao}}</span>
  </button>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "BotaoComponent",
    emits: ['aoClicar'],
    props: {
        botaoHabilitado: {
            type: Boolean,
            default: false
        },
        icone: {
            type: String,
            default: ''
        },
        textoBotao: {
            type: String,
            default: ''
        }
    },
    methods: {
        eventoClique(){
            this.$emit('aoClicar')
        }
    },
  });
</script>

<style>
</style>