import React, {useState } from 'react';
import Api from './api';
import CarrinhoDeCompras from './CarrinhoDeCompras';
import Modal from './modal';
import ModalFinalizar from './modalFinalizar';
import Sapato from './sapato';
import iconeMobile from './3barras_fundo_p.png';
import logo from './logo.png';
function LojaSapato3(){
   const [idObjeto,setidObjeto]=useState();
   const [nulo,setNulo]=useState(false);
   const [objetoSapato,setObjetoSapato]=useState([]);
   const [carrinho,setCarrinho]=useState([]);
   const [valorTotal,setValorTotal]=useState(0);
   const list=Api; 
   const getObjeto=(objeto)=>{
       setObjetoSapato(objeto);
   }
   const getCarrinho=(carrinhoList)=>{
      //atualiza o carrinho toda vez que for movimentado
      
      
      carrinho.push(carrinhoList);
      setValorTotal(valorTotal+parseInt(carrinhoList.preco)*parseInt(carrinhoList.quantidade));
      setidObjeto(carrinhoList.id);
      console.log(idObjeto)
      if (carrinho!==[]) {
         document.querySelector('.carrinho_container').style.display='flex';
      }
      else{
         document.querySelector('.carrinho_container').style.display='none';
      }
      console.log(carrinho)
   }
   const removerItem = (idItem)=>{
      
      var aux= carrinho.splice(idItem,1);
      setCarrinho(aux)
      setValorTotal(0)
      
   }
   const modalFinalizar=()=>{
      document.querySelector('.fundoModalFinalizar').style.display='flex';
      
   }
   const [listaFiltrada,setListaFiltrada]=useState(list);
   
   const filtrar=(e)=>{
      switch (e.target.id) {
         case 'g':
            setListaFiltrada(list)
            break;
         case '0':
            setListaFiltrada(
               list.filter((item)=>{
                  if (item.tipo==='sapato feminino') {
                     return true;
                  }
                  return '';
              })
            )
            break;
            case '1':
               setListaFiltrada(
                  list.filter((item)=>{
                     if (item.tipo==='social mascolino') {
                        return true;
                     }
                     return '';
                 })
               )
               break;
               case '2':
            setListaFiltrada(
               list.filter((item)=>{
                  if (item.tipo==='tenis mascolino') {
                     return true;
                  }
                  return '';
              })
            )
            break;
            case '3':
            setListaFiltrada(
               list.filter((item)=>{
                  if (item.tipo==='sandalia') {
                     return true;
                  }
                  return '';
              })
            )
            break;
            case '4':
               setListaFiltrada(
                  list.filter((item)=>{
                     if (item.tipo==='chinelo') {
                        return true;
                     }
                     return '';
                 })
               )
               break;
         default:
            return '';
            
      }
   }
   const mostrarHeader=()=>{
     if (nulo===true) {
      document.querySelector('.listatipos').style.top='-150px';
      setNulo(false);
     }
     else{
      document.querySelector('.listatipos').style.top='50px';
      setNulo(true);
     }
   }
   return<>
   <header>
      <img onClick={mostrarHeader} src={iconeMobile} alt=''/>
      <a href='https://fabio460.github.io/Portifolio/' target='_blank' rel='noreferrer'><img className='logo' src={logo} alt=''/></a>
      <div className='listatipos'>
         
         <div id='g' onClick={filtrar}>geral</div>
         <div id='0' onClick={filtrar}>sapato feminino</div>
         <div id='1' onClick={filtrar}>social mascolino</div>
         <div id='2' onClick={filtrar}>tenis</div>
         <div id='3' onClick={filtrar}>sandalia</div>
         <div id='4' onClick={filtrar}>chinelo</div>
      </div>
   </header>
      <CarrinhoDeCompras carrinho={carrinho} removerItem={removerItem} valorTotal={valorTotal} modalFinalizar={modalFinalizar}/>
      <ModalFinalizar valorTotal={valorTotal}/>
      <Modal objetoSapato={objetoSapato} getCarrinho={getCarrinho}/>
      <div className='container'>
         {listaFiltrada.map((item,key)=>{
             return <Sapato nome={item.nome} foto={item.foto} valor={item.preco} id={item.id} item={item} getObjeto={getObjeto}/>
         })}
      </div>
   </>
}
export default LojaSapato3;