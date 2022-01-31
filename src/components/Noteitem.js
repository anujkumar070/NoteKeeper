import React ,{useContext}from 'react';
import noteContext from "../context/notes/noteContext"

function Noteitem(props) {
  
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const {note , updateNote}= props;
  return <div className="col-md-4 my-3 ">

        <div className={`card shadow p-3 mb-5 bg-${props.mode} rounded text-${props.mode==='light'?'dark':'white'}`} style={{minWidth:"120px", minHeight:"180px"}}>
        <div className='d-flex  justify-content-center '>
            <h5 className="card-title mx-3">{note.title}</h5>
            <i className="far fa-trash-alt mx-1 mt-1" onClick={()=>{deleteNote(note._id);props.showAlert("Deleted Successfully","success")}}></i>
             <i className="far fa-edit mx-2 mt-1" onClick={()=>{updateNote(note) }}></i>
            </div>
            <hr></hr>
        <div className="card-body">
            
            <p className="card-text"><i>{note.description}</i></p>
        </div>
        </div>
  </div>;
}

export default Noteitem;
