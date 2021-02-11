import React from 'react';

const Languages = [// 5) 追加
    'Javascript',
    'Typescript',
    'Ruby',
    'PHP',
    'Go'
];

export class List extends React.Component {
    // 6) 追加
    render() {
        return (
            <div>
                {
                    Languages.map((lang, index) => {
                        return <div key={ index }>{ lang }</div>
                    })
                }
            </div>
        )
    }
}
