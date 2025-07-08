'use server'

import { stringifyFormData } from "@/lib/helpers"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
const API_URL = process.env.API_URL
const headers = {
    'Content-Type': 'application/json'
}
export type MarcaFormstate = {
    nome: String
}

export async function criarMarca(prevState: MarcaFormstate, formData: FormData) {
    let response = await fetch(`${API_URL}/marca`, {
        headers,
        method: 'POST',
        body: stringifyFormData(formData)
    })
    //console.log(await response.json())
    await new Promise((resolve) => { setTimeout(resolve, 3000) })
    return prevState
    redirect('/cadastro/marcas/')
}
export async function deletarMarca(id: number) {
    let response = await fetch(`${API_URL}/marca/${id}`, {
        method: 'DELETE',
    })
    if (response.status != 204) {
        return {
            sucesso: false,
            mensagem: 'Erro ao excluir Marca'

        }
    }
    revalidatePath('/cadastro/marcas/')
    return {
        sucesso: true,
        mensagem: 'Marca excluida com Sucesso'
    }
}

