import { UnidadesMedidaForm } from "../unidades-medida-form";

export default function PageNovaUnidadeMedida() {
  return (
    <section className="p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Nova Unidade de Medida
          </h1>
          <p className="text-muted-foreground">
            Cadastre uma nova Unidade de Medida
          </p>
        </div>
      </div>
      <UnidadesMedidaForm />
    </section>
  );
}
