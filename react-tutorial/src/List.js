export const List = ({ langs }) => { // 1) 変更
    return (
        <div>
            {
                langs.map((lang, index) => { // 2) 変更
                    return <div key={ index }>{ lang }</div>
                })
            }
        </div>
    )
}
