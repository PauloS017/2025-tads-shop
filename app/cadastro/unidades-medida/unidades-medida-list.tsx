
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
import { UnidadeMedida } from "@/models/unidadeMedida";
import { Edit, Trash } from "lucide-react";

export async function UnidadesMedidaList() {
  await new Promise((resolve)=>{setTimeout(resolve, 3000)})
  const response = await fetch('http://localhost:3002/unidademedida',{
    cache:'no-store'
  })
   const unidadeMedidas:UnidadeMedida[] = await response.json();
  return (
    <section className="mt-8 rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Fracionado</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
           {unidadeMedidas.map((unidadeMedida)=>(
          <TableRow key={unidadeMedida.id}>
            <TableCell className="font-medium">{unidadeMedida.id}</TableCell>
            <TableCell>{unidadeMedida.nome}</TableCell>
            <TableCell>{unidadeMedida.fracionado}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button size="icon">
                  <Edit />
                </Button>
                <DeleteButton id={unidadeMedida.id}/>
              </div>
            </TableCell>
          </TableRow>
          ))}
        </TableBody>

      </Table>
    </section>
  );
}
