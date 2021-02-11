import { useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";

function App() {
  const [tab, setTab] = useState('list')
  const tabComponent = tab === 'list' ? <List /> : <Form/>

  return (
    <div>
    <header>
      <ul>
        <li onClick={() => setTab('list')}>List</li>
        <li onClick={() => setTab('form')}>Form</li>
      </ul>
    </header>
    <hr />
      {
        tab === 'list' ? <List title="Favorite Languages"/> : <Form />
      }
    </div>
  );
}

export default App;
