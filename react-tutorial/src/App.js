// ▼App.jsでstateを利用できるようにする
import React from 'react';
import { List } from "./List";

class App extends React.Component {
  constructor(props) {// 1) 追加
    super(props);
    this.state = { description: 'Before Click!' }
  }

  changeDescription() {// 2) 追加
    this.setState({
      description: 'After Click!!'
    })
  }

  render() {
    const { description } = this.state; // 3) 追加
    return(
      <div>
        { description } {/* 4) 追加 */}
        <List title="Favorite Languages"/>
        <button onClick={ this.changeDescription.bind(this) }>Button</button> {/* 5) 追加 */}
      </div>
    )
  }
}

export default App;
