// ▼クリックして画面表示が変わるようにする
import { useState } from 'react';
import { List } from "./List";

function App() {
  const [description, setDescription] = useState('Before Click!');

  const changeDescription = () => { // 1) 追加
    setDescription('After Click!!')
  }

  return (
    <div>
      { description }
      <List title="Favorite Languages"/>
      <button onClick={ changeDescription }>Button</button> {/* 2) 追加 */}
    </div>
  );
}

export default App;
