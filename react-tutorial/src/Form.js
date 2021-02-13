import { useState } from 'react';
import { Button } from './components/button'; // 1) 追加
import styled from 'styled-components';// 2) 追加

/*　3) 追加*/
const Container = styled.div`
    padding: 12px 64px;
`
const Label = styled.label`
    display: flex;
    color: #757575;
    font-size: 14px;
    font-weight: bold;
`
const Input = styled.input`
   border-radius: 3px;
   padding; 4px 8px;
   border: 1px solid black;
`
const ButtonContainer = styled.div`
    margin-top: 24px;
`
const FormButton = styled(Button)`/* Buttonのスタイルを継承できる*/
    width: 120px;
`


export const Form = ({ onAddLang }) => {
    const [ text, setText ] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        onAddLang(text);
    }

    return (
        /* 4) それぞれタグ名変更*/
        <Container>
            <h1>Add new language</h1>
            <form onSubmit={submitForm}>
                <div>
                    <Label>Language</Label>
                    <Input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <ButtonContainer>
                    <FormButton>Add</FormButton>
                </ButtonContainer>
            </form>
        </Container>
    )
}
