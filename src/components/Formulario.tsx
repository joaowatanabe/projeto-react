'use client'
import { useState } from "react";


export default function Formulario() {
  const [nome, alterarNome] = useState('')
  const [email, alterarEmail] = useState('')
  const [senha, alterarSenha] = useState('')

  function salvar() {
    console.log('Nome:', nome)
    console.log('Email:', email)
    console.log('Senha:', senha)
  }

  return (
    <div className="flex flex-col gap-3">
      <input
        type="text"
        size={80}
        value={nome}
        onChange={(e) => alterarNome(e.target.value)}
        placeholder="Nome"
        className="bg-zinc-800 p-2 rounded-md outline-none"
      />
      <input
        type="email"
        size={80}
        value={email}
        onChange={(e) => alterarEmail(e.target.value)}
        placeholder="E-mail"
        className="bg-zinc-800 p-2 rounded-md outline-none"
      />
      <input
        type="password"
        size={80}
        value={senha}
        onChange={(e) => alterarSenha(e.target.value)}
        placeholder="Senha"
        className="bg-zinc-800 p-2 rounded-md outline-none"
      />

      <button onClick={salvar} className="bg-blue-400 rounded-sm p-1">
        Salvar
      </button>

      <div className="flex gap-5">
        <span>{nome}</span>
        <span>{email}</span>
        <span>{senha}</span>
      </div>
    </div>
    
  );
}
