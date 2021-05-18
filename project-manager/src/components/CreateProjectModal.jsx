import React from 'react'
import { Modal } from 'react-bootstrap'
import CreateProjectForm from './CreateProjectForm'

const CreateProjectModal = ({ visible, toggle }) => {
    return (
        <Modal show={visible} onHide={toggle}>
            <Modal.Header closeButton>
                <Modal.Title>Create project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreateProjectForm/>
            </Modal.Body>
        </Modal>
    )
}

export default CreateProjectModal