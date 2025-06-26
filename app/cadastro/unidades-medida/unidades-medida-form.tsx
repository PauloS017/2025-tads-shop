"use client";

import { criarUnidadeMedida } from "@/actions/unidadeMedida-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { SaveIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function UnidadesMedidaForm() {
  const [fracionado, setFracionado] = useState<boolean>(false);
  return (
    <section className="mt-8">
      <form action={criarUnidadeMedida} className="max-w-2xl space-y-4">
        <div className="space-y-4">
          <Label htmlFor="nome">Nome</Label>
          <Input name="nome" id="nome" />
        </div>
        <div className="flex items-center space-x-2">

          <Switch id="fracionado" onCheckedChange={setFracionado} />
          <Label htmlFor="fracionado">Fracionado ?</Label>
        </div>
        <input type="hidden" name="fracionado" value={fracionado ? "Sim" : "Não"} />

        <div className="mt-4 flex justify-end gap-2">
          <Link href="/cadastro/unidades-medida/">
            <Button variant="outline" type="button">
              Cancelar
            </Button>
          </Link>
          <Button type="submit">
            <SaveIcon />
            Salvar
          </Button>
        </div>
      </form>
    </section>
  );
}
