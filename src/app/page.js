'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image'; // Importation du composant Image de Next.js

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Effectuer la requête API pour récupérer les utilisateurs
    axios.get('https://railway-test-production-1ed2.up.railway.app/api/users')
      .then((response) => {
        setUsers(response.data); // Stocke les données des utilisateurs
        setLoading(false); // Fin du chargement
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        setLoading(false); // Fin du chargement même en cas d'erreur
      });
  }, []);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>

      {/* Affichage de l'image locale */}
      <Image 
        src="/images/mon-image.jpg" // Le chemin de l'image dans le dossier public
        alt="Image locale" // Description de l'image
        width={500} // Largeur de l'image
        height={300} // Hauteur de l'image
      />

      {loading ? (
        <p>Chargement...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li> // Adapte en fonction des données renvoyées
          ))}
        </ul>
      )}
    </div>
  );
}
