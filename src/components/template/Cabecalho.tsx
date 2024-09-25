import { IconBrandReact } from "@tabler/icons-react";

export default function Cabecalho() {
  return (
    <header className="flex justify-between items-center bg-zinc-700 px-6 py-3">
      <div>
        <IconBrandReact size={35}/>
      </div>
      <div className="bg-emerald-600 w-10 h-10 rounded-full flex justify-center items-center">
        US
      </div>
    </header>
  );
}
