import React from 'react'

function job({salary, position, company}) {
  return (
    <div>
        <h2>{position}</h2>
        <h4>{company}</h4>
        <h4>{salary}</h4>
    </div>
  )
}

export default job
