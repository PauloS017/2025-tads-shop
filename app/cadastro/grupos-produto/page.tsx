import { Button } from "@/components/ui/button";

import { PlusCircle } from "lucide-react";
import { GruposProdutoList } from "./grupos-produto-list";
import Link from "next/link";
export default function PageGruposProduto() {
  return (
    <section className="p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Grupos de Produtos
          </h1>
          <p className="text-muted-foreground">
            Gerencie seu cadastro de Grupos de Produtos
          </p>
        </div>
        <Link href="/cadastro/grupos-produto/novo">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Novo Grupo de Produto
          </Button>
        </Link>
      </div>
      <GruposProdutoList />
    </section>
  );
}
