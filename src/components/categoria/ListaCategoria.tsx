import { useEffect, useState } from 'react';

import Categoria from '../../models/Categoria';
import { buscar } from '../../service/Service';
import CardCategoria from './cardCategorias';

function ListaCategorias() {
  //local para armazenar os temas
  const [categoria, setCategoria] = useState<Categoria[]>([])

  //função pra ir no backend e pedir os temas
  async function buscarCategoria(){
    try {
      await buscar('/categorias', setCategoria, 
      );
    } catch (error) {
      alert('Deu ruim')
      console.log(error);
    }
  }

  useEffect(() => {
    buscarCategoria()
  }, [categoria.length])

  return (
    <>
    
        

      <div className="container mx-auto my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoria.map(categoria => (
              <CardCategoria key={categoria.id} categoria={categoria} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;