export default function Contador() {
  let numero:number = 0
  return (
    <div>
      <h1>Contador</h1>
      <span>{numero}</span>
      <div className="flex gap-2">
        <button className="bg-red-500 p-2 rounded-md">Decrementar</button>
        <button className="bg-green-400 p-2 rounded-md">Incrementar</button>
      </div>
    </div>
  )
}