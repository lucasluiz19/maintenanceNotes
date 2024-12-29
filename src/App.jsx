import { PlusCircle } from "@phosphor-icons/react";
import { CreateForm } from "./components/formNotes";
import { Header } from "./styles";
import { useState } from "react";

export function App() {
  const [newNote, setNetNote] = useState(false);

  function handleOpenNewNote(props) {
    event.preventDefault();

    setNetNote(props);
    console.log("deu certo");
  }
  return (
    <div>
      <Header>
        <h1>Salve sua nota</h1>
        {!newNote && (
          <button onClick={() => handleOpenNewNote(true)}>
            <PlusCircle size={25} />
            Nova nota
          </button>
        )}
      </Header>

      {newNote && <CreateForm handleOpenNewNote={handleOpenNewNote} />}
    </div>
  );
}
