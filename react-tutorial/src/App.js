// ▼ClassComponentsへif*loopを反映
import React from 'react';
import { List } from "./List";
import { Form } from "./Form";// 1) 追加

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: 'list' };// 2) 変更
  }

  // 3) changeDescription削除


  render() {
    const { tab } = this.state; // 3) 変更
    return(
      <div>
      {/* 4) 追加 */}
        <header>
          <ul>
            <li onClick={() => this.setState({ tab: 'list' })}>list</li>
            <li onClick={() => this.setState({ tab: 'form' })}>form</li>
          </ul>
        </header>
        <hr />
        {
          tab === 'list' ? <List/> : <Form/>
        }
      </div>
    )
  }
}

export default App;
