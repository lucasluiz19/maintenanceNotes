import { Card,  ContainerCard, Cards } from "./styles";
import { Trash } from "@phosphor-icons/react";
import { Api } from "../../services/api";
import { useState, useEffect } from "react";
export function CardsNotes() {
  const [notes, setNotes] = useState([]);

  async function getNotes() {
    const notesFromApi = await Api.get("/notes");

    setNotes(notesFromApi.data);

  
  }

  async function HandleDeleteNotes(id){
      await Api.delete(`/notes/${id}`)
  }

  useEffect(()=> {
    getNotes()
  },[notes])
  return (
    <ContainerCard>
      <Cards>
        {notes.map((data) => (
          <Card key={data.id}>
            <p>
              Número da nota: <span>{data.numberNote}</span>
            </p>
            <p>
              Responsável: <span>{data.responsible}</span>
            </p>
            <p>
              Local: <span>{data.locale}</span>
            </p>
            <p>
              Data: <span>{data.date}</span>
            </p>
            <p>
              Tipo da Nota: <span>{data.typeNote}</span>
            </p>
            <p>
              Descrição: <span>{data.description}</span>
            </p>

            <div>
              <button onClick={()=> HandleDeleteNotes(data.id)}  className="delete">
                <Trash size={25} />
                Deletar
              </button>
            </div>
          </Card>
        ))}
      </Cards>
    </ContainerCard>
  );
}
