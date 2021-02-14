import styled from 'styled-components';
import { TabBodyContainer } from './components/tab-body-container'; //4) 追加

// const Container = styled.div`3) 追加
//     padding: 8px 16px;
// `
const ListItem = styled.div`
    padding: 8px 16px;
    &:nth-child(n+2) {
        border-top: 1px solid #D9DBDE;
    }
`

export const List = ({ langs }) => {
    return (
        <TabBodyContainer title="Favorite Languages">{/* 1) 追加 */}
        <div>{/* 2) 追加 */}
            {
                langs.map((lang, index) => {
                    return <ListItem key={ index }>{ lang }</ListItem>
                })
            }
        </div>
        </TabBodyContainer>
    )
}
