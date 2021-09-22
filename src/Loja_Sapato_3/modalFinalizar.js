import React from "react";
function ModalFinalizar({valorTotal}){
    return<>
       <div className='fundoModalFinalizar'>
           <div className='bodyModalFinalizar'>
              <div className='textoFinal'>
                  <h1>Compra finalizada com sucesso</h1>
                  <h5>valor totao de {valorTotal} reais</h5>
              </div>
              <div className='btnFinalizar'>
                   <button className='btnFecharModalFinalizar' onClick={()=>{ window.location.reload()}}>fechar</button>
              </div>
           </div>
       </div>
    </>
}
export default ModalFinalizar;