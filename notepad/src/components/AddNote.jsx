import { useState } from "react";

function AddNote({handleAddNote}) {
    const [noteText, setNoteText] = useState("");
    const handleChage = (event) => {
        setNoteText(event.target.value)
    }
    const handleSaveClick = () =>{
        if(noteText.trim().length>0){// Verifico si son enters y espacios, para no crear notas vacias
            handleAddNote(noteText)
            setNoteText("")
        }
    }

    return ( 
        <div className="note new">
            <textarea 
                rows="8" 
                cols= "10"
                placeholder="Type to add a note..."
                value= {noteText}
                onChange={handleChage}
            ></textarea>
            <div className="note-footer">
                <small>character counter</small>
                <button className="button" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
     );
}

export default AddNote;