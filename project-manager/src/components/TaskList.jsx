import React from 'react'
import { Col, ListGroup, Row, Tab } from 'react-bootstrap'
import Task from './Task'

const TaskList = ({ tasks }) => (
    <Tab.Container>
        <Row>
            <Col sm={4}>
                <ListGroup>
                    {
                        tasks.map(task =>
                            <ListGroup.Item key={task.id} action href={`#${task.id}`}>
                                {task.name}
                            </ListGroup.Item>
                        )
                    }
                </ListGroup>
            </Col>
            <Col sm={8}>
                <Tab.Content>
                    {
                        tasks.map(task =>
                            <Tab.Pane key={task.id} eventKey={`#${task.id}`}>
                                <Task
                                    name={task.name}
                                    creation_date={task.creation_date}
                                    description={task.description}
                                    estimate={task.estimate}
                                />
                            </Tab.Pane>
                        )
                    }
                </Tab.Content>
            </Col>
        </Row>
    </Tab.Container>
)

export default TaskList