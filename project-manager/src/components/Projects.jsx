import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '../reducers/projectReducer'
import ProjectPreview from './ProjectPreview'
import { Row, Col } from 'react-flexa'
import CreateProject from './CreateProject'
import CreateProjectModal from './CreateProjectModal'

const Projects = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProjects())
    }, [])

    const projects = useSelector(state => state.projects.list)

    const [modalVisible, setModalVisible] = useState(false)
    const toggleModal = () => setModalVisible(!modalVisible)

    return (
        <>
            <CreateProjectModal visible={modalVisible} toggle={toggleModal}/>
            <Row justifyContent="center">
                {
                    projects.map(p =>
                        <Col key={p.id} style={{ marginBottom: '1%' }}>
                            <ProjectPreview name={p.name} id={p.id} creation_date={p.creation_date}/>
                        </Col>
                    )
                }
                <Col>
                    <CreateProject toggleModal={toggleModal}/>
                </Col>
            </Row>
        </>
    )
}

export default Projects