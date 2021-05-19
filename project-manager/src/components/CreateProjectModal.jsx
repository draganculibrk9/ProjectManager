import React from 'react'
import { Modal } from 'react-bootstrap'
import CreateProjectForm from './CreateProjectForm'

const CreateProjectModal = ({ visible, toggle }) => {
    return (
        <Modal show={visible} onHide={toggle} size="xl">
            <Modal.Header closeButton>
                <Modal.Title>Create project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreateProjectForm toggleModal={toggle}/>
            </Modal.Body>
        </Modal>
    )
}

export default CreateProjectModal