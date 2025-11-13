import './Produtos.css';

import choc_belga from "../../assets/imgs/choc-belga.png";
import choc_ninho from "../../assets/imgs/choc-ninho.png";
import senolra_choc from "../../assets/imgs/cenoura-choc.png";
import choc_ninho_morango from "../../assets/imgs/choc-ninho-morango.png";
import choc_pistache from "../../assets/imgs/choc-pistache.png";
import choc_oreo from "../../assets/imgs/choc-oreo.png";
import whatszap from "../../assets/whatsapp.png";
import { useEffect, useState } from 'react';
import type { Bolo } from '../../types/bolo';
import { getBolos } from '../../services/bolosService';
import CardProduto from '../../components/CardProduto/CardProduto';
import Carrossel from '../../components/Carrossel/Carrossel';


// funções assincromas
// Não são ativadas istantaneamente
export default function Produtos() {

    const [bolos, setBolos] = useState<Bolo[]>([]);

    const fatchBolos = async () => {
        try {
            const dados = await getBolos();
            console.log('Dados retornados de API: ', dados);
            setBolos(dados);
        } catch (error) {
            console.error("Erro ao executar getBolos", error)
        }
    }

    useEffect(() => {
        fatchBolos();
    }, [])


    return (
        <main>
            <Carrossel />

            <section className="conteiner_produto">
                <h1 className="acessivel">produtos de chocolate</h1>
                <div className="titulo">
                    <span>Chocolate</span>
                    <hr />
                </div>

                <section className="cards">
                    {
                        bolos.map((b: Bolo) => (
                            <CardProduto nome={b.nome}
                                descricao={b.descricao}
                                preco={b.preco}
                                imagens={b.imagens[0] ?? ""}
                                peso={b.peso}
                            />
                        ))
                    }

                </section>
            </section>

            <a className="whatsapp" href={whatszap}
                target="_blank">
                <img src={whatszap} alt="icone do whatsapp" />
            </a>
        </main>
    )
}
