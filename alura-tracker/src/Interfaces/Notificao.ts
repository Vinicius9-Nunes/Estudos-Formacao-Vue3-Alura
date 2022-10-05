export enum TipoNotificao{
    SUCESSO,
    FALHA,
    ATENCAO
}

export interface INotificao{
    titulo: string
    texto: string
    tipo: TipoNotificao
    id: number
}