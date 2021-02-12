import { useState } from 'react';// 1) 追加

export const Form = () => {
    const [ text, setText ] = useState(''); // 2) 追加

    const submitForm = (e) => { // 3) 追加
        e.preventDefault();
        console.log(`submitForm(${text})`);
    }

    return (
        <div>
            {/* 4) 変更 */}
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
