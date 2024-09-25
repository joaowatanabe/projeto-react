'use client'

import { useState } from "react"

export default function Contador() {
  const estado = useState(0)
  const numero = estado[0]
  const alterarNumero = estado[1]

  function decrementar() {
    alterarNumero(numero - 1)
   
  }
  
  function incrementar() {
    alterarNumero(numero + 1)
   
  }

  return (
    <div>
      <h1>Contador</h1>
      <span>{numero}</span>
      <div className="flex gap-2">
        <button onClick={decrementar} className="bg-red-500 p-2 rounded-md">Decrementar</button>
        <button onClick={incrementar} className="bg-green-400 p-2 rounded-md">Incrementar</button>
      </div>
    </div>
  )
}