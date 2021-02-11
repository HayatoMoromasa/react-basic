export const List = ({ title }) => { //App.jsから<List title="Favorite Languages"/>のtitleが渡ってくる
    return (
        <div>
            <h1>{ title }</h1>
            <div>This is List</div>
        </div>
    )
}
