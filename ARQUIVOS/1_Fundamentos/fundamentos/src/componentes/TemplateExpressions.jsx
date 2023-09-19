import React from 'react'

const name = "John";
const data = {
    age: 36,
    job: "Programer",
}

function TemplateExpressions() {
  return (
    <div>
        <h1>Olá {name}, tudo bem?</h1>
        <p>Você atua como {data.job}</p>
        <p>Sua idade {data.age}</p>
    </div>
  )
}

export default TemplateExpressions