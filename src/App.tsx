
import { Container } from 'react-bootstrap'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NewNote from './NewNote'
import { Navigate } from 'react-router-dom'


export type Note ={
  id: string
} & NoteData
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


  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Note Taking App</h1>} />
        <Route path="/new" element={<NewNote />} />

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
