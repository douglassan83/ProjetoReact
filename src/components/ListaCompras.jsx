import listaCompras from "../data/listaCompras";

export default function ListaComprasCard() {
    return (
        <div className="c-card">
            <h2>Lista de Compras</h2>

            {listaCompras.map((item, quantidade) => (
                <h3 key={item}>
                    {item.item} — {item.quantidade}
                </h3>
            ))}

        </div>
    );
}
