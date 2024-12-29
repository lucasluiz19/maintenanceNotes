import { FormContent } from "./styles";
export function CreateForm({handleOpenNewNote}) {
  return (
    <FormContent>
      <div>
        <p>Nova nota de Manutenção</p>

        <label htmlFor="numberNote">Digite o Número da nota</label>
        <input id="numberNote" type="number" placeholder="1234-5678"/>

        <label htmlFor="response">Responsável</label>
        <input id="response" type="text" placeholder="José"/>

        <label htmlFor="locale">Local</label>
        <input id="locale" type="text" placeholder="Secador 1" />

        <label htmlFor="date">Data</label>
        <input id="date" type="date" />

        <label htmlFor="typeNote">Tipo de Nota</label>
        <select name="" id="typeNote">
          <option value="m2">M2 (Manutenção)</option>
          <option value="m2">M5 (Melhoria)</option>
        </select>

        <label htmlFor="description">Descrição detalhada da manutenção</label>
        <textarea name="" id="description" ></textarea>

        <span>
          <button onClick={()=>handleOpenNewNote(false)} className="cancelNote">Cancelar</button>
          <button className="saveNote">Salvar</button>
        </span>
      </div>
    </FormContent>
  );
}
