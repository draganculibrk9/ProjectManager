import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Row, Col } from 'react-flexa'

const AddProject = () => {
    return (
        <Card style={{ width: 230, height: 150 }}>
            <Card.Body>
                <Col justifyContent="center">
                    <Row justifyContent="center">
                        <Button>Add project</Button>
                    </Row>
                </Col>
            </Card.Body>
        </Card>
    )
}

export default AddProject