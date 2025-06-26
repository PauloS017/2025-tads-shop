'use server'

import { redirect } from "next/navigation"

export async function criarUnidadeMedida(formData:FormData) {
   let response = await fetch('http://localhost:3002/unidademedida',{
        method:'POST',
        body: JSON.stringify({nome:formData.get('nome'),fracionado:formData.get('fracionado')})

    })
    redirect("/cadastro/grupos-produto/")
}

export async function deletarUnidadeMedida(formData:FormData) {
       let response = fetch('http://localhost:3002/unidadeMedida',{
        method:'DELETE',
        body: JSON.stringify({nome:formData.get('id')})
       })
       
    redirect("/cadastro/grupos-produto/")
}