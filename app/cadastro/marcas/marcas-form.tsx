"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SaveIcon } from "lucide-react";
import Link from "next/link";

export function MarcasForm() {
  return (
    <section className="mt-8">
      <form className="max-w-2xl">
        <div className="space-y-4">
          <Label htmlFor="nome">Nome</Label>
          <Input name="nome" />
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <Link href="/cadastro/marcas">
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
