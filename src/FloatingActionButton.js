import React from 'react'
import {cx, css, keyframes} from 'emotion'

const animation = keyframes`
    0% {
        transform: scale3d(0,0,0);
    }
    100% {
        transform: scale3d(1,1,1);
    }
`

const FloatingActionButton = ({onClick, className, children}) => (
    <button
        type={'button'}
        onClick={onClick}
        className={cx(
            css`
                background-color: #3acc85;
                color: #fff;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                border: none;
                cursor: pointer;
                font-size: 18px;
                align-items: center;
                justify-content: center;
                transform: scale3d(0,0,0);
                display: flex;
                animation: ${animation} 0.3s ease 0.4s 1 normal forwards;
                &:focus {
                    outline: 0;
                }
            `,
            className
        )}
    >
        {children}
    </button>
)

export default FloatingActionButton