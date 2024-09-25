import { IconBrandReact } from "@tabler/icons-react";

export default function Cabecalho() {
  return (
    <header className="flex justify-between items-center bg-zinc-700 px-6 py-3">
      <div className="flex items-center gap-1">
        <IconBrandReact size={35} stroke={1} className="text-blue-400"/>
        <span className="font-black">React Essencial</span>
      </div>
      <div className="bg-blue-400 w-10 h-10 rounded-full flex justify-center items-center">
        US
      </div>
    </header>
  );
}
