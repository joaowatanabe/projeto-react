import Link from "next/link"

export default function Menu() {
  return (
    <aside className="w-80 bg-zinc-800 p-6">
      <nav className="flex flex-col gap-2">
        <Link className="bg-emerald-900 p-2 rounded-md" href='/'>Início</Link>
        <Link className="bg-emerald-900 p-2 rounded-md" href='/primeiro'>Primeiro Componente</Link>
        <Link className="bg-emerald-900 p-2 rounded-md" href='/contador'>Componente com Estado</Link>
      </nav>
    </aside>
  )
}