import React from 'react'
import { Badge } from 'react-bootstrap'
import { Calendar } from 'react-bootstrap-icons'
import { Row, Col } from 'react-flexa'

const DatePill = ({ date }) => (
    <Badge pill variant="secondary">
        <Row justifyContent="space-between">
            <Col>
                <Calendar/>
            </Col>
            <Col>{date}</Col>
        </Row>
    </Badge>
)

export default DatePill