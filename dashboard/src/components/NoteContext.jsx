import React, { createContext, useState } from "react";

const NoteContext = createContext();

export const NoteState = (props) => {
  const [notes, setNotes] = useState([]);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
    {props.children}
  </NoteContext.Provider>
  )
};

export default NoteContext;
