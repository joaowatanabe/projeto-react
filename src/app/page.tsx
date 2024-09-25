import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex gap-2">
      <Link href="/primeiro" className="bg-purple-600 p-2 rounded-md">Primeiro Componente</Link>
      <Link href="/contador" className="bg-blue-400 p-2 rounded-md">Contador</Link>
    </div>
  );
}
