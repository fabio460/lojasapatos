import React,{useState} from "react";

function Modal({objetoSapato,getCarrinho}){
    const [num,setNum]=useState(1);
    const [numSapato,setNumSapato]=useState(44);
    const fecharModal=()=>{
        
        setNum(1);
        document.querySelector('.tela_modal').style.display='none';
    }
    
    const click = (s)=>{
        document.querySelectorAll('.num').forEach(e=>{
            e.classList.remove('active')
        })
        s.target.classList.add('active')
        setNumSapato(s.target.id)
    }
    const mais =()=>{
        setNum(num+1);
    }
    const menos=()=>{
        if(num>1){
            setNum(num-1)
        }
    }
    const inserirCarrinho=()=>{
       getCarrinho({
           ...objetoSapato,
           quantidade:num,
           numSapato:numSapato
       })
       document.querySelector('.tela_modal').style.display='none';
    
       setNum(1);
       
      // document.querySelector('.carrinho_container').classList.remove('carrinho_container_visivel');
    }
    return<>
       <div className='tela_modal'>
           <div className='tela_modal_body'>
               <div className='foto_modal'>
                   <img src={objetoSapato.foto} alt=''/>
               </div>
               <div className='aside_modal'>
                    <div>
                        <div>{objetoSapato.nome}</div>
                        <div>{objetoSapato.preco}</div>
                    </div>
                    <div className='botoes'>
                                <button onClick={menos}>-</button>
                                    <div className='num'>{num}</div>
                                <button onClick={mais}>+</button>
                        </div>
                    <div className='btn_numeros'>
                                <button id='44' onClick={click} className='num active'>44</button>
                                <button id='42' onClick={click} className='num'>42</button>
                                <button id='40' onClick={click} className='num'>40</button>
                                <button id='38' onClick={click} className='num '>38</button>
                            </div>
                    <button onClick={inserirCarrinho}> inserir carrinho</button>     
                    <button onClick={fecharModal} className='fecharModal'>fechar</button>
               </div>
               
           </div>
       </div>
    </>
}
export default Modal;