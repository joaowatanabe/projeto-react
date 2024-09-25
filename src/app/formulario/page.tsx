import Pagina from "@/components/template/Pagina";
import Formulario from "@/components/Formulario";

export default function PrimeiraFormulario() {
  return (
    <Pagina>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Formulário</h1>
        <Formulario />
      </div>
    </Pagina>
  );
}
