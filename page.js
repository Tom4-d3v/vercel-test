'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
