import React from 'react';
import './Home.css';
import homeLogo from '../../assets/img/farmacia.jpg'


function Home() {
    return (
        <>
        <div className="bg-green-500 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>A melhor Farmácia da sua Cidade!</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-green-800 py-2 px-4'>Ver Produtos</button>

              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
           
      
            </div>
          </div>
          </div>
        
      </>
    );
}

export default Home;