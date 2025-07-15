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
import { Marca } from "@/models/marca";
import { Edit, Trash } from "lucide-react";
import Link from "next/link";
import { DataTable } from "../../../components/ui/data-table";
import { columns } from "./columns";


export async function MarcasList() {
  //await new Promise((resolve)=>{setTimeout(resolve,3000)})

  const response = await fetch(`${process.env.API_URL}/marca`, {
    cache: 'no-store'
  })
  const marcas: Marca[] = await response.json();
  return (
    <section className="mt-8 rounded-md border">
      <DataTable columns={columns} data={marcas} />
    </section>
  );
}
