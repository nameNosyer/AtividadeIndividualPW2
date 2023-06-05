import React from 'react';
import Style from "./index.css";

import {Button} from "./components/Button";
import Car from "./assets/car.svg"
import Comment from "./components/Comment/"
import Image1 from "./assets/imageWoman.svg"
import Image2 from "./assets/imageMan.svg"
import Telephone from "./assets/telephone.svg"
import Shield from "./assets/shield.svg"

function App() {
  return (
    <div className="container">
      <div className="title">
      <h3>Encontre <a>Boris</a> no local de partida</h3>
        <h5>Chega em 3 minutos (800 metros)</h5>
      </div>

      <div className='InfoDiver'>
            <img src={Car} alt="" />
            <aside >
              <p className='InfoCar'>BCD0D19</p>
              <p className='InfoCar2'>Honda Civic Roxo</p>
            </aside>
          </div>

      <div className="mensagem">
        <input type='text' placeholder='Enviar mensagem para Boris...'></input >

        <div>
          <Button/>
        </div>
        
        <img src={Telephone} alt="Telefone" />
        <img src={Shield} alt="Escudo" />

      </div>

      <div>
          <Comment photo={Image1}
           message='Boris, estou a sua espera. Estou com uma camisa azul e uma calça jeans' />
           
           <Comment photo={Image2}
           message='Acabei de te ver. Vou estacionar o carro proximo' />

      </div>
    </div>
    
  );
}

export default App;