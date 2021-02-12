import { useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { Languages } from "./const/languages";

function App() {
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState(Languages);

  const addLang = (lang) => {
    console.log(lang);
    setLangs([...langs, lang])
    setTab('list');// 1) 追加
  }

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
        tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addLang}/> // 2) 変更
      }
    </div>
  );
}

export default App;
