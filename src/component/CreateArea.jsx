import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevValue => { // add to my notes
           return {
                ...prevValue, 
                [name]: value
            };
        });
    }

    function addNote(event) {
        props.onAdd(note);
        
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
    function expand() {
        setExpanded(true);
    }

  return (
    <div>
      <form className="create-note" onChange={handleChange}>
        {isExpanded ? 
        <input name="title" placeholder="Title" value={note.title} /> :
        null
        }
        <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content} onClick={expand}/>
        <Zoom in={isExpanded}>
        <Fab onClick={addNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
