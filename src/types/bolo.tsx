export interface Bolo {
    nome: string;
    id: string | undefined;
    categorias: string[];
    descricao: string;
    imagens: string[];
    preco: number;
    peso: number | null;
}