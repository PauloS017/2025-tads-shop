
"use client";

import { criarMarca, MarcaFormstate } from "@/actions/marca-actions";
import { SaveButton } from "@/components/save-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2Icon, SaveIcon } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";
import { toast } from "sonner";

export function MarcasForm() {
  const initialState: MarcaFormstate = {
    nome: "",
  }
  const [state, formAction, isPending] = useActionState(criarMarca, initialState)

  return (
    <section className="mt-8">
      <form action={formAction} className="max-w-2xl">
        <div className="space-y-4">
          <Label htmlFor="nome">Nome</Label>
          <Input name="nome" />
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
