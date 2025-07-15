"use server";

import { stringifyFormData } from "@/lib/helpers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const API_URL = process.env.API_URL;
const headers = {
  "Content-Type": "application/json",
};

export type MarcaFormState = {
  nome: string;
};
export async function criarMarca(
  prevState: MarcaFormState,
  formData: FormData
) {
  let response = await fetch(`${API_URL}/marca`, {
    headers,
    method: "POST",
    body: stringifyFormData(formData),
  });

  //await new Promise((resolve) => {setTimeout(resolve, 3000); });
  
  return prevState;
  redirect("/cadastro/marcas/");
}

export async function editarMarca(
  prevState: MarcaFormState,
  formData: FormData
) {

  const id = formData.get("id");
  let response = await fetch(`${API_URL}/marca/${id}`, {
    headers,
    method: "PUT",
    body: stringifyFormData(formData),
  });
  
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return prevState;
  redirect("/cadastro/marcas/");
}
export async function deletarMarca(id: string) {
  let response = await fetch(`${API_URL}/marca/${id}`, {
    method: "DELETE",
  });

  if (response.status !== 204 && response.status !== 200) {
    return {
      sucesso: false,
      mensagem: `Erro ao excluir a marca`,
    };
  }
  revalidatePath("/cadastro/marcas");
  return {
    sucesso: true,
    mensagem: `Marca excluída com sucesso`,
  };
}