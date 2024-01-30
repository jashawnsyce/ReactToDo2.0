import React from 'react'

function Note(props) {
  return (
    <div className={`${props.complete === true ? 'bg-green-300' : 'bg-slate-300'} flex flex-col items-center justify-center w-1/2 m-1 rounded-lg border-solid border-2 border-slate-950`}>
        <h2 className='text-3xl'>{props.name}</h2>
        <button onClick={() => props.deleteNote(props.id)} className='hover:font-bold'>Delete</button>
        <button onClick={() => props.updateNote(props.id)} className='hover:font-bold'>complete</button>
    </div>
  )
}

export default Note
