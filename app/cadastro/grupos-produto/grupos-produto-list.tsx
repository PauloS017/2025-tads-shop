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
import { Edit, Trash } from "lucide-react";

export function GruposProdutoList() {
  return (
    <section className="mt-8 rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Subgrupos</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Grupo 1</TableCell>
            <TableCell>Subgrupos</TableCell>
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
          <TableRow>
            <TableCell className="font-medium">2</TableCell>
            <TableCell>Grupo 2</TableCell>
            <TableCell>Subgrupos</TableCell>
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
        </TableBody>
      </Table>
    </section>
  );
}
