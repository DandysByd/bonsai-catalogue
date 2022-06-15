import React from 'react'

const Button = (props) => {
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                window.location.href = props.onClick;
            }}
            className={'button ' + props.className}
        >
            {props.value}
        </button>
    )
}

export default Button