import { useState } from "react";

function Formulaire() {
  // État pour suivre le nom saisi
  const [nom, setNom] = useState("");

  // Fonction appelée au clic sur le bouton
  const handleClick = () => {
    alert(`Bonjour, ${nom} !`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Entrez votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)} // met à jour l'état à chaque frappe
      />
      <button onClick={handleClick}>Dire Bonjour</button>
    </div>
  );
}

export default Formulaire;
