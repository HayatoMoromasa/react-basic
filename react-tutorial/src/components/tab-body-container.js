// 追加
import styled from "styled-components";

const Container = styled.div`
    padding: 12px 64px;
`

export const TabBodyContainer = ({ children, title }) => {
    return (
        <Container>
            <h1>{ title }</h1>
            { children }
        </Container>
    )
}

//これらをまずform.js、list.jsに適応させる
