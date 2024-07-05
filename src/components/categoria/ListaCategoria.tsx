import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { buscar } from '../../service/Service';
import Categoria from '../../models/Categoria';
import CardCategorias from './CardCategorias';


function ListaCategoria() {

const [categoria, setCategoria] = useState<Categoria[]>([]);



const navigate = useNavigate();


async function buscarCategoria() {
    try {
    await buscar('/categorias', setCategoria);


    } catch (error: any) {
    if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
    }
    }
}

useEffect(() => {
    buscarCategoria()
}, [categoria.length])
    return (
    <>
   
    
    <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mr-8 ml-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
            <>
                <CardCategorias key={categoria.id} categoria={categoria} />
            </>
            ))}
        </div>
        </div>
    </div>
    </>
);
}


export default ListaCategoria;

