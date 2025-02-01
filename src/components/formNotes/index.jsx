import { FormContent } from "./styles";
import { Api } from "../../services/api";
import { useRef } from "react";
export function CreateForm({ handleOpenNewNote }) {
  const inputNumberNote = useRef();
  const inputResponsible = useRef();
  const inputLocale = useRef();
  const inputDate = useRef();
  const inputTypeNote = useRef();
  const inputDescription = useRef();

  async function createNotes() {
    event.preventDefault();

    await Api.post("/notes", {
      numberNote: inputNumberNote.current.value,
      responsible: inputResponsible.current.value,
      locale: inputLocale.current.value,
      date: inputDate.current.value,
      typeNote: inputTypeNote.current.value,
      description: inputDescription.current.value,
    });
  }

  return (
    <FormContent>
      <div>
        <p>Nova nota de Manutenção</p>

        <label htmlFor="numberNote">Digite o Número da nota</label>
        <input
          ref={inputNumberNote}
          id="numberNote"
          type="number"
          required
          placeholder="1234-5678"
        />

        <label htmlFor="responsible">Responsável</label>
        <input
          ref={inputResponsible}
          id="responsible"
          type="text"
          required
          placeholder="José"
        />

        <label htmlFor="locale">Local</label>
        <input
          ref={inputLocale}
          id="locale"
          type="text"
          required
          placeholder="Secador 1"
        />

        <label htmlFor="date">Data</label>
        <input ref={inputDate} id="date" required type="date" />

        <label htmlFor="typeNote">Tipo de Nota</label>
        <select ref={inputTypeNote} required id="typeNote">
          <option value="Corretiva">M2 (Corretiva)</option>
          <option value="Melhoria">M5 (Melhoria)</option>
        </select>

        <label htmlFor="description">Descrição detalhada da manutenção</label>
        <textarea ref={inputDescription} id="description" />

        <span>
          <button
            onClick={() => handleOpenNewNote(false)}
            className="cancelNote"
          >
            Cancelar
          </button>
          <button onClick={createNotes} className="saveNote">
            Salvar
          </button>
        </span>
      </div>
    </FormContent>
  );
}
