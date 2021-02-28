import ReactDOM from 'react-dom';
import styled from 'styled-components'; // 1) 追加

const modalRoot = document.getElementById("modal-root");

// 2) 追加
const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0, .5);
`

export const Modal = (props) => {
    return ReactDOM.createPortal(
        <Container>
            { props.children }
        </Container>,
        modalRoot,
    )
}
