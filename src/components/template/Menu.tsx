import Link from "next/link"
import MenuItem from "./Menu-item"

export default function Menu() {
  return (
    <aside className="w-80 bg-zinc-800 p-6">
      <nav className="flex flex-col gap-2">
        <MenuItem text="Início" href="/" />
        <MenuItem text="Primeiro Componente" href="/primeiro" />
        <MenuItem text="Componente com Estado" href="/contador" />
        <MenuItem text="Exemplo de Formulário" href="/formulario" />

        {/* <Link className="bg-zinc-700 p-1 rounded-md" href='/'>Início</Link>
        <Link className="bg-zinc-700 p-1 rounded-md" href='/primeiro'>Primeiro Componente</Link>
        <Link className="bg-zinc-700 p-1 rounded-md" href='/contador'>Componente com Estado</Link>
        <Link className="bg-zinc-700 p-1 rounded-md" href='/formulario'>Exemplo de formulário</Link> */}
      </nav>
    </aside>
  )
}