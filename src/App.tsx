
import { Container } from 'react-bootstrap'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NewNote from './NewNote'


function App() {
 

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Note Taking App</h1>} />
        <Route path="/new" element={<NewNote />} />

        <Route path="/:id">
        <Route index element={<h1>show</h1>}/>
        <Route path="edit" element={<h1>edit</h1>}/>
        </Route>
      </Routes>
      
    </Container>
  )
    
  
}

export default App
