import type { CardProdutoProps } from '../../types/CardProdutoProps';
import './CardProduto.css';
import bolo_default from '../../assets/imgs/bolo-default.png'
import { formatoService } from '../../services/formatoService';


export default function CardProduto( {nome, descricao, preco, imagens, id, peso}: CardProdutoProps ) {

    return (
        <div key={id} className="card_produto">
            <img src={(imagens.length > 0) ? `http://localhost:3000/static/${imagens}`
            : bolo_default} alt="Uma fatia de bolo de chocolate belga" />
            <h2>{nome}</h2>
            <p>{(descricao.length > 0) ? descricao : "Descrição não informada"}</p>
            <div>
            <span>{ formatoService.PrecoBR(preco) }</span>
            <br />
            <span>{ (peso != null) ? formatoService.pesoEmKg(peso) : "Quantidade não informada" }</span>
            </div>
        </div>
    )
}
