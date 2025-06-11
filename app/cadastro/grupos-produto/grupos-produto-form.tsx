"use client";

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

export function GruposProdutoForm() {
  return (
    <section className="mt-8">
      <form className="max-w-2xl space-y-4">
        <div className="space-y-4">
          <Label htmlFor="nome">Nome</Label>
          <Input name="nome" id="nome" />
        </div>
        <div className="flex items-center space-x-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma opção" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="opcao1">Opção 1</SelectItem>
              <SelectItem value="opcao2">Opção 2</SelectItem>
              <SelectItem value="opcao3">Opção 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <Link href="/cadastro/grupos-produto/">
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
