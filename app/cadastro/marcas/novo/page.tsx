import { MarcasForm } from "../marcas-form";

export default function PageNovaMarca() {
  return (
    <section className="p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Nova Marca</h1>
          <p className="text-muted-foreground">Cadastre uma nova marca</p>
        </div>
      </div>
      <MarcasForm />
    </section>
  );
}
