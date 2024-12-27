import { PlusCircle } from "@phosphor-icons/react";
import { CreateForm } from "./components/formNotes";
import { Header } from "./styles";

export function App() {
  return (
    <div>
      <Header>
        <h1>Salve sua nota</h1>

        <button>
          <PlusCircle size={25} />
          Nova nota
        </button>
      </Header>
      <CreateForm />
    </div>
  );
}
