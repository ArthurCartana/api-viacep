export async function endereco(cep) {
    
    const response = await fetch(
        `https://viacep.com.br/ws/${cep}/json/`
    )

const result = await response.json()

if (!response.ok) {
    throw new Error(result.message || "Erro ao carregar endereco.")
}

return result
  
}