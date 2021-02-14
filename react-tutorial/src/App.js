import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from "./const/languages";
import { widthLoading } from './hoc/widthLoading';//5) 追加


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`
const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none'};
`




function App({ data }) { // 1) 変更
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState(data);// 3) 変更

  // useEffect(() => {　//2) 削除
  //   fetchLanguages();
  // },[]);

  // const fetchLanguages = async () => {
  //   const languages = await getLanguages();
  //   setLangs(languages);
  // }

  const addLang = (lang) => {
    setLangs([...langs, lang])
    setTab('list');
  }

  return (
    <div>
    <Header>
      <HeaderUl>
        <HeaderLi focused={ tab === 'list' } onClick={() => setTab('list')}>List</HeaderLi>
        <HeaderLi focused={ tab === 'form' } onClick={() => setTab('form')}>Form</HeaderLi>
      </HeaderUl>
    </Header>
      {
        tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addLang}/>
      }
    </div>
  );
}

export default widthLoading(App, getLanguages);// 4) 変更
