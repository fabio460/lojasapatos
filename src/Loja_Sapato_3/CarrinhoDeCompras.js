import React, { useState } from "react";
import ItemCarrinho from "./item_Carrinho";
import iconeCarrinhoDeCompra from './icone_carrinho_compra.png';
function CarrinhoDeCompras({carrinho,removerItem,valorTotal,modalFinalizar}){
    const [condicao,setCondicao]=useState(false);
    const mostrar_carrinho=()=>{
        if(condicao===false){
            document.querySelector('.body_carrinho').classList.add('body_carrinho_visivel');
            document.querySelector('.carrinho_container').classList.add('carrinho_container_visivel');
            setCondicao(true)
        }
        else{
            document.querySelector('.body_carrinho').classList.remove('body_carrinho_visivel');
            document.querySelector('.carrinho_container').classList.remove('carrinho_container_visivel');
            setCondicao(false)
        }
    }
    const fecharCarrinho=()=>{
        window.location.reload();
    }
    
    return<>
       <div className='carrinho_container'>
           <div onClick={mostrar_carrinho} className='icone_carrinho'><img src={iconeCarrinhoDeCompra} alt=''/></div>
           <div className='body_carrinho'>
           <div className='itemCarrinhoImg'>
               <button onClick={modalFinalizar}>  finalizar compra</button>
               <button onClick={fecharCarrinho}>cancelar</button>
               <div>valor a pagar <div className='valorTotal'>{valorTotal}</div></div>
           </div>
             {carrinho.map((item)=>{
                 return <ItemCarrinho id={item.id} nome={item.nome} foto={item.foto} preco={item.preco} numSapato={item.numSapato} quantidade={item.quantidade} removerItem={removerItem}/>
             })}
           </div>
       </div>
    </>
}
export default CarrinhoDeCompras;