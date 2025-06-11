import { GruposProdutoForm } from "../grupos-produto-form";

export default function PageNovoGrupoProduto() {
  return (
    <section className="p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Novo Grupo de Produto
          </h1>
          <p className="text-muted-foreground">
            Cadastre um novo Grupo de Produto
          </p>
        </div>
      </div>
      <GruposProdutoForm />
    </section>
  );
}
