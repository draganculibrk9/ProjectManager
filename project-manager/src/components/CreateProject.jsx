import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Row, Col } from 'react-flexa'

const CreateProject = () => {
    return (
        <Card style={{ width: 230, height: 150 }}>
            <Card.Body>
                <Col justifyContent="center">
                    <Row justifyContent="center">
                        <Button style={{ marginTop: '15%' }}>Create project</Button>
                    </Row>
                </Col>
            </Card.Body>
        </Card>
    )
}

export default CreateProject