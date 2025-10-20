import { useState } from "react";

function Compteur() {
  // Déclaration de l'état "count" initialisé à 0
  const [count, setCount] = useState(0);

  // Fonctions pour incrémenter et décrémenter
  const incrementer = () => setCount(count + 1);
  const decrementer = () => setCount(count - 1);

  return (
    <div>
      <h2>Compteur : {count}</h2>
      <button onClick={incrementer}>Incrémenter</button>
      <button onClick={decrementer}>Décrémenter</button>
    </div>
  );
}

export default Compteur;
