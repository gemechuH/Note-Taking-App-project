
import { Container } from 'react-bootstrap'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NewNote from './NewNote'
import { Navigate } from 'react-router-dom'
import { useLocalStorage } from './UseLocalStorage'
import { v4 as uuidV4 } from "uuid"




export type Note ={
  id: string
} & NoteData

export type RawNote ={
  id: string
}

export type RawNoteData= {
  title: string
  markdown: string
  tagsId: string[]

}
export type NoteData= {
  title: string
  markdown: string
  tags: Tag[]

}
export type Tag={
  id: string
  label: string
}


function App() {
  const [notes, setNotes] = useLocalStorage<Note[]>('NOTES', []);
    function onCreateNote({ title, markdown, tags }: NoteData) {
    setNotes(prevNotes => [
      ...prevNotes,
      { id: uuidV4(), title, markdown, tags }
    ]);
  }


  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Note Taking App</h1>} />
        <Route path="/new" element={<NewNote onSubmit={onCreateNote}/>} />

        <Route path="/:id">
        <Route index element={<h1>show</h1>}/>
        <Route path="edit" element={<h1>edit</h1>}/>
        //if page not found i need to redirect to home page
        <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      
    </Container>
  )
    
  
}

export default App
