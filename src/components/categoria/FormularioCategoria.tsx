import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../service/Service';

function FormularioCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  
    const navigate = useNavigate();
  
    const { id } = useParams<{ id: string }>();
  
    async function buscarPorId(id: string) {
      await buscar(`/categoria/${id}`, setCategoria);
    }
  
    useEffect(() => {
      if (id !== undefined) {
        buscarPorId(id);
      }
    }, [id]);
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setCategoria({
        ...categoria,
        [e.target.name]: e.target.value,
      });
    }
  
    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault();
  
      if (id !== undefined) {
        try {
          await atualizar('/categoria', categoria, setCategoria);
          alert('Categoria atualizada');
          retornar();
        } catch (error: any) {
          if (error.toString().includes('403')) {
            alert('Erro ao atualizar a Categoria');
          }
        }
      } else {
        try {
          await cadastrar('/categoria', categoria, setCategoria);
          alert('Categoria cadastrada');
          retornar();
        } catch (error: any) {
          if (error.toString().includes('403')) {
            alert('Erro ao cadastrar a Categoria');
          }
        }
      }
    }
  
    function retornar() {
      navigate('/categoria');
    }
  
    return (
      <>
        <div className="container mx-auto">
          <h1 className="text-center my-8 text-4xl">
            {id === undefined ? 'Cadastrar novo tema' : 'Atualizar tema'}
          </h1>
  
          <form onSubmit={gerarNovaCategoria} className="mx-auto w-1/2">
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="descricao">Descrição da Categoria</label>
              <input
                type="text"
                className="border-2 border-slate-700 rounded-lg p-2"
                id="descricao"
                name="descricao"
                value={categoria.descricao}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <button
              className="bg-indigo-400 hover:bg-indigo-800 rounded-lg w-1/2 mx-auto block py-2 text-white"
              type="submit"
            >
              {id === undefined ? 'Cadastrar' : 'Atualizar'}
            </button>
          </form>
        </div>
      </>
    );
  }
  
  export default FormularioCategoria;
  