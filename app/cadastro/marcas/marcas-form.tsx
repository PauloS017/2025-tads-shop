
"use client";

import { criarMarca, editarMarca, MarcaFormState } from "@/actions/marca-actions";
import { SaveButton } from "@/components/save-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Marca } from "@/models/marca";
import Link from "next/link";
import { useActionState } from "react";

type MarcasFormProps = {
  marca?:Marca
}
export function MarcasForm({marca}: MarcasFormProps) {
  const initialState: MarcaFormState = {
    nome: "",
  };
  const action = marca ? editarMarca : criarMarca;
  const [state, formAction, isPending] = useActionState( action, initialState
  );
 
  return (
    <section className="mt-8">
      <form action={formAction} className="max-w-2xl">
       {marca ? <Input type="hidden" name="id" defaultValue={marca?.id} /> : null}
        <div className="space-y-4">
          <Label htmlFor="nome">Nome</Label>
          <Input name="nome" defaultValue={marca?.nome} />
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="outline" type="button" asChild>
            <Link href="/cadastro/marcas">Cancelar</Link>
          </Button>

          <SaveButton isPending={isPending} />
        </div>
      </form>
    </section>
  );
}
