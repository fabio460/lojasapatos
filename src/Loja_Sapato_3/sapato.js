import React from "react";

function Sapato({nome,foto,valor,getObjeto,item}){
    const abrirModal=()=>{
        document.querySelector('.tela_modal').style.display='flex';
        getObjeto(item);
    }

    return<>
     
      <div onClick={abrirModal} className='item'>
            <div className='foto'><img src={foto} alt=''/></div>
            <div className='nome'>{nome}</div>
            <div className='valor'>{valor}</div>
      </div>
    </>
}

export default Sapato;