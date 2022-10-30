import React from "react";

function Note ({id, text, date, handleDeleteNote}) {
    return ( 
        <div className="note" id={id}>
            <span>{text}</span>
            <div className="note-footer">
                <small> {date} </small>
                <button className="button" onClick={() => handleDeleteNote(id)}>X</button>
            </div>
        </div>
     );
}

export default Note;