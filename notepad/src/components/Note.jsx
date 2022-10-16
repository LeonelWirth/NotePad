import React from "react";

function Note ({id, text, date}) {
    return ( 
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small> {date} </small>
                <button className="button">x</button>
            </div>
        </div>
     );
}

export default Note;