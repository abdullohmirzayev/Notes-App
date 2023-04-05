import { Fragment } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Form from './components/form';
import Notes from './components/notes';


function App() {
  return (
    <Fragment>
      <Navbar />
      <Form />
      <Notes />
    </Fragment>
  );
}

export default App;
