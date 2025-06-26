"use client";

import { criarGrupoProduto } from "@/actions/grupoProduto-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { SaveIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function GruposProdutoForm() {

  const [subgrupo, setSubgrupo] = useState("");
  return (

    <section className="mt-8">
      <form action={criarGrupoProduto} className="max-w-2xl space-y-4">
        <div className="space-y-4">
          <Label htmlFor="nome">Nome</Label>
          <Input name="nome" id="nome" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <Select onValueChange={setSubgrupo}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Opção 1">Opção 1</SelectItem>
                <SelectItem value="Opção 2">Opção 2</SelectItem>
                <SelectItem value="Opção 3">Opção 3</SelectItem>
              </SelectContent>
            </Select>

            <input type="hidden" name="subgrupo" value={subgrupo} />
          </div>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <Link href="/cadastro/grupos-produto/">
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
