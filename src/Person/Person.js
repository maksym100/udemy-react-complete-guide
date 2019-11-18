import React from 'react'

const person = (props) => {
    return <p>${Math.random()}. I'm a {props.name}!: {props.age} / {props.children}</p>;
}

export default person;