import React ,{useContext,useState,useRef, useEffect} from "react";
import noteContext from '../context/notes/noteContext'
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";
import { useNavigate, Navigate } from "react-router-dom";

function Notes(props ,{ navigation }) {

    const context = useContext(noteContext);
    const {notes,fetchNote,editNote} = context;
    const [note, setNote] = useState({etitle: "", edescription: "", etag: ""})
    let navigate = useNavigate();
    const refClose = useRef(null)
    const ref = useRef(null)

  useEffect(() => {
    
    
  
})

  const handleClick = (e)=>{
    editNote(note.id, note.etitle, note.edescription, note.etag)
    props.showAlert("Updated Note Successfully","success")
        e.preventDefault(); 
        refClose.current.click();

    
}
const updateNote = (currentNote) => {
  ref.current.click();
  setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
  
}

const onChange = (e)=>{
  setNote({...note, [e.target.name]: e.target.value})
}

  return (<>

<button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
      </button>


      <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog ">
          <div className={`modal-content bg-${props.mode} text-${props.mode==='light'?'dark':'white'}`}>
            <div className="modal-header ">
              <h5 className="modal-title text-center" id="exampleModalLabel">UPDATE NOTE</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                  <form className="my-3">
            <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onChange}/>
                  </div>
                  <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                  </div>
                  <div className="mb-3">
                  <label htmlFor="etag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                  </div>
                  
                   </form>

            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" disabled={(note.etitle.length<5 || note.edescription.length<=5)} className="btn btn-primary" onClick={handleClick} >Update Note</button>
            </div>
          </div>
        </div>
</div>

      <AddNote mode={props.mode} showAlert={props.showAlert}/>
      
      <div className={`container shadow p-3 mb-5 bg-${props.mode} rounded text-${props.mode==='light'?'dark':'white'}`}>
      <h2 className="mx-2 text-center">My Notes</h2>

      {notes.length===0 && <div className="font-italic mx-2">No Notes to Display. Create Some Note to Begin</div>}

    <div className="row my-3">
        
      {notes.map((note) => {
        return  <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert} mode={props.mode}/>
      })}
      
    </div>
    </div>
    </>
  );
}

export default Notes;
