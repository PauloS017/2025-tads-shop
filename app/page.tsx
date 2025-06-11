export default async function HomePage() {
let response = await fetch("http://localhost:3002/marcas");
let marcas = await response.json();

  return (
    <div className="p-4">
      <h1>Página Inicial</h1>
    <ul>
          {marcas.map((marca) => (
            <li key={marca.id}>{marca.nome}</li>
          ))}
        </ul>
    </div>
  );
}