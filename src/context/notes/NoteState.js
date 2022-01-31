import { useState, useContext } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  //const host = " http://localhost:5000"
  const host = "https://notekeeperapplication.herokuapp.com"
  const initialNote = [];

  const [notes, setNotes] = useState(initialNote);

  //FETCH ALL NOTES
  const fetchNote = async (title, description, tag) => {


    // TODO: API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify()
    });
    const json = await response.json();
    //console.log(json);
    setNotes(json)

  }

  //ADD A NOTE
  const addNote = async (title, description, tag) => {
    //  API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const note = await response.json(); 
    
    setNotes(notes.concat(note))

  }
  // Delete a Note
  const deleteNote = async (id) => {
    //Delete from API also
    //console.log("Node deleted" + id)
    const newNote = notes.filter((note) => { return note._id !== id })
    setNotes(newNote)
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({})
    });
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {

    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });

    const json = await response.json();
    //console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }



return (
  <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, fetchNote }}>
    {props.children}

  </NoteContext.Provider>
)
}

export default NoteState;



