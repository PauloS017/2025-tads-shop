import { Button } from "@/components/ui/button";

import { PlusCircle } from "lucide-react";
import { UnidadesMedidaList } from "./unidades-medida-list";
import Link from "next/link";
export default function PageUnidadesMedida() {
  return (
    <section className="p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Unidades de Medida
          </h1>
          <p className="text-muted-foreground">
            Gerencie seu cadastro de Unidades de Medida
          </p>
        </div>
        <Link href="/cadastro/unidades-medida/novo">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nova Unidade de Medida
          </Button>
        </Link>
      </div>
      <UnidadesMedidaList />
    </section>
  );
}
