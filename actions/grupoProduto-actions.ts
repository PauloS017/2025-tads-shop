'use server'

import { redirect } from "next/navigation"

export async function criarGrupoProduto(formData:FormData) {
   let response = await fetch('http://localhost:3002/grupo',{
        method:'POST',
        body: JSON.stringify({nome:formData.get('nome'),subgrupo: formData.get('subgrupo')})

    })
    redirect("/cadastro/grupos-produto/")
}

export async function deletarMarca(formData:FormData) {
       let response = fetch('http://localhost:3002/grupo',{
        method:'DELETE',
        body: JSON.stringify({nome:formData.get('id')})
       })
       
    redirect("/cadastro/grupos-produto/")
}