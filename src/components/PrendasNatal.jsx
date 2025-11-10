import { useState } from "react";
import prendasData from "../data/prendasData";

export default function PrendasNatal() {
  // Estado para guardar o responsável ativo, inicia vazio (nenhum selecionado)
  const [responsavelAtivo, setResponsavelAtivo] = useState("");

  return (
    <div>
      <h2>GESTÃO DE PRENDAS NATAL 2025</h2>
      {/* Botões para selecionar responsável e mudar estado */}
      <button onClick={() => setResponsavelAtivo("PaiNatal")}>PAI NATAL</button>
      <button onClick={() => setResponsavelAtivo("Grinch")}>GRINCH</button>

      {/* Renderização condicional da lista */}
      {responsavelAtivo && prendasData[responsavelAtivo].length > 0 ? (
        <ul>
          {prendasData[responsavelAtivo].map((item, index) => (
            <li key={index}>
              {item.pessoa} : {item.presente} - {item.preco}
            </li>
          ))}
        </ul>
      ) : responsavelAtivo ? (
        <p>Não há prendas para {responsavelAtivo}.</p>
      ) : (
        <p>Selecione um responsável para ver as prendas.</p>
      )}
    </div>
  );
}
