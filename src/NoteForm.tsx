
import { Col, Row, Stack, Form } from 'react-bootstrap'
import CreatableSelect from 'react-select/creatable'
import { Link } from 'react-router-dom'
import { useRef, type FormEvent } from 'react' 

export const NoteForm = () => {
     const titleRef = useRef<HTMLInputElement>(null)
 const markdownRef = useRef<HTMLTextAreaElement>(null)

 function handleasubmit(e: FormEvent){
    e.preventDefault()
 }
  return (


    <form action="" onSubmit={handleasubmit}>
        <Stack gap={4}>
            <Row>
                <Col>
                <Form.Group controlId= "title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control required ref= {titleRef} />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId= "tags">
                    <Form.Label>Tags</Form.Label>
                    <CreatableSelect isMulti />
                </Form.Group>
                </Col>
            </Row>
             <Form.Group controlId= "markdown">
                    <Form.Label>Body</Form.Label>
                    <Form.Control as="textarea" required ref ={markdownRef} rows={15} />
                </Form.Group>
                <Stack direction='horizontal' gap={2} className='justify-content-end'>
                    
                    <button type="submit" className='btn btn-primary'>Save</button>
                    <Link to= "..">
                    <button type="button" className='btn btn-secondary'>Cancel</button>
                    </Link>
                </Stack>
            
        </Stack>
    </form>
  )
}
