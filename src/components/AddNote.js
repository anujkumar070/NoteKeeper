import React ,{useState, useContext,useEffect} from 'react';
import noteContext from "../context/notes/noteContext"

function AddNote(props) {
    const context = useContext(noteContext);
    const {addNote,fetchNote} = context;

    const [note, setNote] = useState({title:"", description:"", tag:""});
    
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title:"", description:"", tag:""})
        props.showAlert("Note Added Successfully","success")
    }
    useEffect(() => {
      fetchNote();
    
      
    }, []);
    

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
  return(
       <div className={`container my-3 shadow p-3 mb-5 bg-${props.mode} rounded text-${props.mode==='light'?'dark':'white'} border-${props.mode==='light'?'white':''}`} style={{maxHeight:"800px",maxWidth:"1200px"}} >
          
        

      <h2 className='text-center'>Add Your Note Here</h2>
      
          <form className="my-3">
      <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" name="title" onChange={onChange} value={note.title}/>
              <small id="title" className="form-text text-muted">Title must be of length of 5 or more</small>
            </div>
            <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} />
            <small id="description" className="form-text text-muted">Description must be of length of 5 or more</small>
          </div>
            <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} value={note.tag} />
            </div>
            
            <button type="submit" disabled={(note.title.length<5 || note.description.length<=5)}className="btn btn-primary" onClick={handleClick}>Add Note</button>
    </form>
  </div>);
}

export default AddNote;
