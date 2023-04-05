import { Fragment } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Form from './components/form';
import Notes from './components/notes';
import EditModal from './components/edit-modal';


function App() {
  
  return (
    <Fragment>
      <EditModal />
      <Navbar />
      <Form />
      <Notes />
    </Fragment>
  );
}

export default App;
