
import { Col, Row, Stack, Form } from 'react-bootstrap'
import CreatableSelect from 'react-select/creatable'

export const NoteForm = () => {
  return (
    <form action="">
        <Stack gap={4}>
            <Row>
                <Col>
                <Form.Group controlId= "title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control required />
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
                    <Form.Control as="textarea" rows={15} />
                </Form.Group>
                <Stack direction='horizontal' gap={2} className='justify-content-end'>
                    <button type="submit" className='btn btn-primary'>Save</button>
                    <button type="button" className='btn btn-secondary'>Cancel</button>
                </Stack>
            
        </Stack>
    </form>
  )
}
