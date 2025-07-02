import { Button } from "@/components/ui/button";

import { PlusCircle } from "lucide-react";
import { MarcasList } from "./marcas-list";
import Link from "next/link";
import { Suspense } from "react";
export default function PageMarcas() {
 
  return (
    <section className="p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Marcas</h1>
          <p className="text-muted-foreground">
            Gerencie seu cadastro de marcas
          </p>
        </div>
        <Link href="/cadastro/marcas/novo">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nova Marca
          </Button>
        </Link>
      </div>
      <Suspense fallback={<div className="text-green-400">Carregando</div>}>
        <MarcasList />
      </Suspense>
    </section>
  );
}
