import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { unixToLocalTimeString } from '../utils/timeUtils'
import DatePill from './DatePill'

const ProjectPreview = ({ id, name, creation_date }) => {
    const history = useHistory()

    return (
        <Card style={{ width: 230, height: 150 }} test-dataid='project-preview'>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Col>
                    <Row>
                        <DatePill date={unixToLocalTimeString(creation_date)}/>
                        <Row style={{ marginTop: '5%' }}>
                            <Col>
                                <Button className='details-button' onClick={() => history.push(`/projects/${id}`)}>Details</Button>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Card.Body>
        </Card>
    )
}

export default ProjectPreview