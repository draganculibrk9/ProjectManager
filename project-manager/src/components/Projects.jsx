import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '../reducers/projectReducer'
import ProjectPreview from './ProjectPreview'
import { Row, Col } from 'react-flexa'
import CreateProject from './CreateProject'

const Projects = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProjects())
    }, [])

    const projects = useSelector(state => state.projects.list)

    return (
        <Row justifyContent="center">
            {
                projects.map(p =>
                    <Col key={p.id} style={{ marginBottom: '1%' }}>
                        <ProjectPreview name={p.name} id={p.id} creation_date={p.creation_date}/>
                    </Col>
                )
            }
            <Col>
                <CreateProject/>
            </Col>
        </Row>
    )
}

export default Projects