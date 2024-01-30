import React from 'react'

function User({name, age}) {
  return (
    <div>
      <h1 className='whitetext'>{name}</h1>
      <h1>{`age: ${age}`}</h1>
    </div>
  )
}

export default User