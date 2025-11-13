export interface CardProdutoProps {
    nome: string;
    descricao: string;
    preco: number;
    imagens: string;
    id?: string;
    peso: number | null;
}