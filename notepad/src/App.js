import { useState } from "react";
import { nanoid } from "nanoid" // For the component id
import NoteList from "./components/NoteList"


function App() {
  const [notes,setNotes] = useState([{
    id: nanoid(),
    text: "Note text 1",
    date: "16/10/2022"
  },
  {
    id: nanoid(),
    text: "Note text 2",
    date: "17/10/2022"
  },
  {
    id: nanoid(),
    text: "Note text 3",
    date: "18/10/2022"
  },
  {
    id: nanoid(),
    text: "Note text 4",
    date: "19/10/2022"
  }]); // dummy notes

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid,
      text: text,
      date: date.toLocaleDateString(),

    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }
  return (
    <div className="container">
      <NoteList notes = {notes} handleAddNote={addNote}/>
    </div>
  );
}

export default App;
