import { useState } from "react";

function ListeCourses() {
  const [courses, setCourses] = useState([]); // État pour la liste
  const [nouveau, setNouveau] = useState(""); // État pour le nouvel article

  // Fonction pour ajouter un article
  const ajouterCourse = () => {
    if (nouveau.trim() !== "") {
      setCourses([...courses, nouveau]); // Ajoute le nouvel article à la liste
      setNouveau(""); // Vide le champ de saisie
    }
  };

  return (
    <div>
      <h2>Ma liste de courses</h2>
      <input
        type="text"
        placeholder="Ajouter un article"
        value={nouveau}
        onChange={(e) => setNouveau(e.target.value)}
      />
      <button onClick={ajouterCourse}>Ajouter</button>

      <ul>
        {courses.map((article, index) => (
          <li key={index}>{article}</li> // Affiche chaque article
        ))}
      </ul>
    </div>
  );
}

export default ListeCourses;
