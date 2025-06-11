"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { SaveIcon } from "lucide-react";
import Link from "next/link";

export function UnidadesMedidaForm() {
  return (
    <section className="mt-8">
      <form className="max-w-2xl space-y-4">
        <div className="space-y-4">
          <Label htmlFor="nome">Nome</Label>
          <Input name="nome" id="nome" />
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="fracionado" name="fracionado" />
          <Label htmlFor="fracionado">Fracionado ?</Label>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <Link href="/cadastro/unidades-medida/">
            <Button variant="outline" type="button">
              Cancelar
            </Button>
          </Link>
          <Button type="button">
            <SaveIcon />
            Salvar
          </Button>
        </div>
      </form>
    </section>
  );
}
