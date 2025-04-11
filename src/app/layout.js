export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mon Application</title>
        {/* Tu peux ajouter ici des balises meta, des liens ou des scripts supplémentaires */}
      </head>
      <body>
        <div className="app-container">
          {/* Ici, tu peux ajouter un header ou une barre de navigation */}
          <main>{children}</main>
          {/* Ici, tu peux ajouter un footer si besoin */}
        </div>
      </body>
    </html>
  );
}
