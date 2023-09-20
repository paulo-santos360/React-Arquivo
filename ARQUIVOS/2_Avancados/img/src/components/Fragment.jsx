import React from 'react'

function Fragment({ propFragment }) {
  return (
    <>
        <h2>Primeiro titulo</h2>
        <h3>Seegundo Titulo</h3>
        <h4>{propFragment}</h4>
    </>
  )
}

export default Fragment