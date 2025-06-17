"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Marca } from "@/models/marca";
import { Edit, Trash } from "lucide-react";

type MarcaListProps ={
  marcas:Marca[]
}
export function MarcasList({marcas}:MarcaListProps) {
  return (
    <section className="mt-8 rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {marcas.map((marca)=>(
          <TableRow key={marca.id}>
            <TableCell className="font-medium">{marca.id}</TableCell>
            <TableCell>{marca.nome}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button size="icon">
                  <Edit />
                </Button>
                <Button size="icon" variant="destructive">
                  <Trash />
                </Button>
              </div>
            </TableCell>
          </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </section>
  );
}
