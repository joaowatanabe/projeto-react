import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex">
      <Link href="/primeiro" className="bg-purple-500 p-2 rounded-md">Primeiro Componente</Link>
    </div>
  );
}
