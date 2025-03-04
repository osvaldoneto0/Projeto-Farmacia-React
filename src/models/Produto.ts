import Categoria from "./Categoria";

export default interface Produtos {

id: number;
nome: string;
descricao: string;
quantidade: number;
laboratorio: string;
preco: number;
foto: string;
categoria: Categoria | null;
}