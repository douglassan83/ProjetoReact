
import { useState } from "react"; 

export default function Discount() { // Componente principal
  const [price, setPrice] = useState(100); // Estado inicial do preço
  
  function applyDiscount() { // Função para mudar preço
       setPrice(75);
  }
  
  return ( // JSX com valor dinâmico e evento de clique
    <div>
      <p data-testid="price">{price}€</p>
      <button onClick={applyDiscount}>Apply Discount</button>
    </div>
  );
}
