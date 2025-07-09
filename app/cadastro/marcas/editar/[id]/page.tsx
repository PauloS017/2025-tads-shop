import { MarcasForm } from "../../marcas-form";

type PageEditarMarcaProps = {
    params: Promise<{ id: string }>;
}
async function buscarMarca(id: string) {
  const response = await fetch(`${process.env.API_URL}/marca/${id}`,{
    cache: "no-store",
  })
  return await response.json();
}
export default async function PageEditarMarca({params}:PageEditarMarcaProps) {
const { id } = await params;
const marca = await buscarMarca(id);

  return (
    <section className="p-8">
         <div className="flex items-center justify-between">
           <div>
             <h1 className="text-3xl font-bold tracking-tight">Editar Marca {id}</h1>
           </div>
         </div>
         <MarcasForm marca={marca}/>
       </section>
  );
}