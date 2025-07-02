'use server'

import { stringifyFormData } from "@/lib/helpers"
import { redirect } from "next/navigation"
const API_URL = process.env.API_URL
const headers = {
    'Content-Type': 'application/json'
}
 export type MarcaFormstate={
    nome:String
}

export async function criarMarca(prevState:MarcaFormstate,formData:FormData){
        let response = await fetch(`${API_URL}/marca`,{
        headers,
        method:'POST',
        body:stringifyFormData(formData)
    })
     //console.log(await response.json())
    await new Promise((resolve)=>{setTimeout(resolve,3000)})
    return prevState
    redirect('/cadastro/marcas/')
}
export async function deletarMarca(id:number){
    let response = await fetch(`${API_URL}/marca/${id}`,{
        method:'DELETE',
    })
    redirect('/cadastro/marcas/')
}

