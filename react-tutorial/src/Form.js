import { useState } from 'react';

export const Form = ({ onAddLang }) => {
    console.warn('Form.js');// 1) 追加
    const [ text, setText ] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        onAddLang(text);
    }

    return (
        <div>
            <h1>Add new language</h1>
            <form onSubmit={submitForm}>
                <div>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        </div>
    )
}
