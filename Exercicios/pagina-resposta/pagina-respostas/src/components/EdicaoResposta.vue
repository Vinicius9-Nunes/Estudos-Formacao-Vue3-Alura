<template>
  <div class="box">
    <textarea name="respostaEdicao" cols="110" rows="20" placeholder="Ao clicar em Copiar sua resposta será colada aqui." v-model="textoAlterado"></textarea>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "EdicaoRespostaComponent",
    props: {
        textoAtual: {
            type: String,
            required: true
        }
    },
    computed:{
        textoAlterado(){
            return this.textoAtual
        }
    }
  });
</script>

<style scoped>
textarea{
    border-radius: 5px;
    padding: 1rem;
    border: none
}
</style>