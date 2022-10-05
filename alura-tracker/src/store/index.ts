import IProjeto from "@/Interfaces/IProjeto";
import { INotificao } from "@/Interfaces/Notificao";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, NOTIFICAR } from "./tipo-mutacoes";

interface Estado {
    projetos: IProjeto[],
    notificacoes: INotificao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [],
        notificacoes: [
            
        ]
    },
    mutations: {
        [ADICIONA_PROJETO](state, nomeProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeProjeto
            } as IProjeto
            state.projetos.push(projeto)
        },
        [ALTERA_PROJETO](state, projeto: IProjeto) {
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto
        },
        [EXCLUIR_PROJETO](state, id: string) {
            state.projetos = state.projetos.filter(proj => proj.id != id)
        },
        [NOTIFICAR](state, novaNotificacao: INotificao){
            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao)

            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
            }, 3000)
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}

// {
//     id: new Date().toISOString(),
//     nome: 'TypeScript'
// },
// {
//     id: new Date().toISOString(),
//     nome: 'Vue'
// },
// {
//     id: new Date().toISOString(),
//     nome: 'Vuex'
// }


// {
//     id: 1,
//     texto: 'Uma notificação de sucesso',
//     titulo: 'Sucesso',
//     tipo: TipoNotificao.SUCESSO
// },
// {
//     id: 2,
//     texto: 'Uma notificação de atenção',
//     titulo: 'Atenção',
//     tipo: TipoNotificao.ATENCAO
// },
// {
//     id: 3,
//     texto: 'Uma notificação de falha',
//     titulo: 'Falha',
//     tipo: TipoNotificao.FALHA
// }