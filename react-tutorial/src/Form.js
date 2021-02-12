import { useState } from 'react';

export const Form = ({ onAddLang }) => { // 1) 変更
    const [ text, setText ] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        onAddLang(text);// 2) 変更
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
