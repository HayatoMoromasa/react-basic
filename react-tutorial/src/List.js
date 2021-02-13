import styled from 'styled-components';// 1) 追加

// 2) 追加
const Container = styled.div`
    padding: 8px 16px;
`
const ListItem = styled.div`
    padding: 8px 16px;
    &:nth-child(n+2) {
        border-top: 1px solid #D9DBDE;
    }
`

export const List = ({ langs }) => {
    return (
        <Container>{/* 3) 追加 */}
            {
                langs.map((lang, index) => {
                    return <ListItem key={ index }>{ lang }</ListItem>　/*　4) 追加*/
                })
            }
        </Container>
    )
}
