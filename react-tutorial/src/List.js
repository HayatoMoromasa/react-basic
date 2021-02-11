// ▼List.jsのClassComponents化
import React from 'react';

export class List extends React.Component {
    render() {
        const { title } = this.props;

        return (
            <div>
                <h1>{ title }</h1>
                <div>This is List</div>
            </div>
        )
    }
}
