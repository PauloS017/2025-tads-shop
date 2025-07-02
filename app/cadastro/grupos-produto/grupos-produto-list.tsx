import { DeleteButton } from "@/components/delete-button";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GrupoProduto } from "@/models/grupoProduto";
import { Edit, Trash } from "lucide-react";

export async function GruposProdutoList() {
  await new Promise((resolve) => { setTimeout(resolve, 3000) })
  const response = await fetch('http://localhost:3002/grupo', {
    cache: 'no-store'
  })
  const grupo:GrupoProduto[] = await response.json();
  return (
    <section className="mt-8 rounded-md border">
      <Table>
        <TableHeader>
          <TableRow >
            <TableHead className="w-10">ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Subgrupos</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {grupo.map((grupo)=>(
          <TableRow key={grupo.id}>
            <TableCell className="font-medium">{grupo.id}</TableCell>
            <TableCell>{grupo.nome}</TableCell>
            <TableCell>{grupo.subgrupo}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button size="icon">
                  <Edit />
                </Button>
                <DeleteButton id={grupo.id}/>
              </div>
            </TableCell>
          </TableRow>
           ))}
        </TableBody>
      </Table>
    </section>
  );
}
