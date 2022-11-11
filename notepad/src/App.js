import { useEffect, useState } from "react";
import { nanoid } from "nanoid" // For the component id
import NoteList from "./components/NoteList"
import Search from "./components/Search";
import Header from "./components/Header";


function App() {
  const [notes,setNotes] = useState([]); // dummy notes
  const [searchText, setSearchText] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"))
    console.log(savedNotes)
    if(savedNotes){
      setNotes(savedNotes)
    }
  },[]) // Array empty, only runs on load

  useEffect(()=>{
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes))
  }, [notes]) // Use the local storage to save the data from the notes, so that when i close the tab, i dont lose the data.

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),

    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
    
  }

  const deleteNote = (id) => {
    const newNote = notes.filter((note)=> note.id !== id)
    setNotes(newNote)
  }


  return (
    <div className={`${darkMode && `dark-mode`}`}>
      {/* With this div i select or not the darkmode */}
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} darkMode={darkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NoteList notes = {notes.filter((note)=> note.text.toLocaleLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
        {/* The notes ar filtered previous to pass them to the note list, so i have all the notes in the original state */}
      </div>
    </div>
  );
}

export default App;
