import Link from 'next/link'
import Botao from "@/components/Botao"

export default function PrimeiraPagina () {
  return (
    <div className="flex gap-2">
      <Botao label = "Salvar"/>
      <Botao label = "Cancelar"/>
      <Link href="/" className="bg-amber-400 p-2 rounded-md">Voltar</Link>
    </div>
  )
}