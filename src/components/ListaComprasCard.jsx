import listaCompras from "../data/listaCompras"

export default function ListaComprasCard ({item, quantidade}){

    return(

        <div className="c-card">
        
            <h2>{item}</h2>
            <h2>{quantidade}</h2>
        </div>
    )
}
