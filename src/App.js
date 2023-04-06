import { Fragment, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Form from './components/form';
import Notes from './components/notes';
import EditModal from './components/edit-modal';


function App() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [notes, setNotes] = useState(getNotesFromLs)
  const [editId, setEditId] = useState('')
  
  localStorage.setItem('notes', JSON.stringify(notes))
  return (
    <Fragment>
      <EditModal />
      <Navbar />
      <Form title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes} />
      {notes.length === 0 ? <div className='placeholder col-6 p-5'>
        <div className="card text-center">
          <div className="card-header">
            Defult Card
          </div>
          <div className="card-body">
            <h5 className="card-title">Massage:</h5>
            <p className="card-text">No notes are avaialable for reading.</p>
          </div>
          <div className="card-footer text-muted" >
            a days ago
          </div>
        </div>
      </div> : notes.map((element) => {
        return (
          <Notes element={element} key={element.id} notes={notes} setNotes={setNotes} />
        )
      })
      }
    </Fragment>
  )

  function getNotesFromLs() {
    const note = JSON.parse(localStorage.getItem('notes'));
    if(note) {
      return note
    } else {
      return [];
    }
  }

}

export default App;
