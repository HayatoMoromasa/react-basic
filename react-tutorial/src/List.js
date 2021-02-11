const Languages = [
    'Javascript',
    'Typescript',
    'Ruby',
    'PHP',
    'Go'
];


export const List = () => {// titleを削除
    return (
        <div>
            {/* h1 titleを削除 */}
            {
                Languages.map((lang, index) => {
                    return <div key={ index }>{ lang }</div>
                })
            }
        </div>
    )
}
