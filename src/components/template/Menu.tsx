import Link from "next/link";
import MenuItem from "./Menu-item";
import { IconForms, IconHome2, IconNumber1, IconNumbers } from "@tabler/icons-react";

export default function Menu() {
  return (
    <aside className="w-80 bg-zinc-800 p-6">
      <nav className="flex flex-col gap-2">
        <MenuItem text="Início" href="/" icone={<IconHome2 />} />
        <MenuItem
          text="Primeiro Componente"
          href="/primeiro"
          icone={<IconNumber1 />}
        />
        <MenuItem text="Componente com Estado" href="/contador" icone={<IconNumbers />}/>
        <MenuItem text="Exemplo de Formulário" href="/formulario" icone={<IconForms />}/>
      </nav>
    </aside>
  );
}
