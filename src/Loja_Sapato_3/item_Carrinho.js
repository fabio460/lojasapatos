import React from "react";
function ItemCarrinho({nome,foto,quantidade,numSapato,preco}){
    
    return<>
       <div className='itemCarrinho'>
           
           <img src={foto} alt=''/>
           <div>{nome}</div>
           <div>qtd ={' '+quantidade}</div>
           <div>numero ={' '+numSapato}</div>
           <div>valor ={' '+preco}</div>
           
       </div>
    </>
}

export default ItemCarrinho;