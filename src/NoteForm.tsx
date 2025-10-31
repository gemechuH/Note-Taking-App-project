
import { Col, Row, Stack, Form } from 'react-bootstrap'
import CreatableSelect from 'react-select/creatable'
import { Link } from 'react-router-dom'
import { useRef, useState, type FormEvent } from 'react' 
import type { NoteData } from './App'
import type { Tag } from './App';

type NoteFormProps={
    onSubmit: (data: NoteData)=> void
}

export function NoteForm({onSubmit}: NoteFormProps){
     const titleRef = useRef<HTMLInputElement>(null)
 const markdownRef = useRef<HTMLTextAreaElement>(null)
 const [selectedTags, setSelectedTags]=useState<Tag[]>([])

 function handleasubmit(e: FormEvent){
    e.preventDefault()
    onSubmit({
        title: titleRef.current!.value,
        markdown: markdownRef.current!.value,
        tags: []
    })
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
                    <CreatableSelect value={selectedTags.map(tag=>{
                        return {
                            label:tag.label,
                            value: tag.id
                        }
                    })} 
                    onChange={tags=>{
                        setSelectedTags(tags.map(tag=>{
                            return {
                                label: tag.label, id: tag.value
                            }
                        }))
                    }}
                    isMulti />
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
