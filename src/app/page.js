import Image from 'next/image';

export default async function Home() {
  let users = [];

  try {
    const res = await fetch('https://railway-test-production-1ed2.up.railway.app/api/users');
    users = await res.json();
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
  }

  return (
    <div>
      <h1>Liste des utilisateurs</h1>

      <Image 
        src="/images/mon-image.jpg"
        alt="Image locale"
        width={500}
        height={300}
      />

      {users.length === 0 ? (
        <p>Aucun utilisateur trouvé.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.id} : {user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
