//?マークの作成
import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';// 1) 追加

const HintContainer = styled.div`
    position: relative;
    display: inline-flex;
    margin-left: 12px;
`

const HintInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #757575;
    width: 24px;
    height: 24px;
    cursor: pointer;
`
const PopupContainer = styled.div`
    position: absolute;
    left: 88%;
    bottom: 12px;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    border: 1px solid black;
    border-radius: 8px;
    padding: 8px;
    width: 210px;
    :focus { outline: none; }
`

export const Hint = () => {
    const [ showPopup, setShowPopup] = useState(false);// 2) 追加
    const ref = useRef(null);// 4) 追加
    useEffect(() => {// 5) 追加
        if (ref.current) ref.current.focus();
    })

    return (
        <HintContainer>
            <HintInner onClick={() => setShowPopup(true)}>?</HintInner>
            {/* 3) 追加*/
                showPopup && (
                    <PopupContainer ref={ref} onBlur={() => setShowPopup(false)} tabIndex={0}>
                        This is Language name
                    </PopupContainer>
                )
            }
        </HintContainer>
    )
}
