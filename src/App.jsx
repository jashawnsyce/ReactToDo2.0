import { useState } from 'react'
import Note from './components/Note'

function App() {
  const [notes, setNotes] = useState([])
  const [nextNote, setNextNote] = useState('')


  function handleOnSubmit (e) {
    e.preventDefault()
    if (nextNote !== '') {
      const note = {
        id: notes.length === 0 ? 1 : notes[notes.length - 1].id + 1, 
        noteName: nextNote,
        complete: false
      }
      setNotes([...notes, note])
      setNextNote(``)
    }
  }

  function deleteNote (noteID) {
    setNotes(notes.filter((note) => { return note.id !== noteID}))
    }

  function updateNote (noteID) {
    setNotes(notes?.map((note) => {return {...note, complete: (note.id === noteID ? !note.complete : note.complete)}}))
  }

  return (
    <>
      <div className='bg-green-300 rounded-md text-2xl mx-12 my-3 p-3 drop-shadow-xl'>
        <form onSubmit={handleOnSubmit} className=''>
          <input placeholder='type here' value={nextNote} onChange={e => setNextNote(e.target.value)} className='mr-2 p-1 hidden sm:inline'></input>
          <button className='rounded-lg items-center hover:bg-slate-300 p-3'>Add</button>
        </form>
      </div>
      <ul className='flex flex-col items-center'>
        {notes.map((note, key) => {
          return (
            <Note name={note.noteName} id={note.id} complete={note.complete} deleteNote={deleteNote} updateNote={updateNote}/>
          )
        })}
      </ul>
    </>
  )
}

export default App
