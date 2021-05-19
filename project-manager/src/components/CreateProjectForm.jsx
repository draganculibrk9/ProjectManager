import React, { useState } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Row as FlexRow, Col as FlexCol } from 'react-flexa'
import TaskList from './TaskList'
import { getUnixTimestamp } from '../utils/timeUtils'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import projectService from '../services/projectService'
import { getProjects } from '../reducers/projectReducer'
import { setNotification } from '../reducers/notificationReducer'

const taskSchema = yup.object().shape({
    name: yup
        .string()
        .required('Task name must be specified'),
    description: yup
        .string()
        .required('Task description must be specified'),
    estimate: yup
        .number()
        .positive('Task duration estimate must be a positive number')
        .required('Task duration estimate must be specified')
})

const projectSchema = yup.object().shape({
    name: yup
        .string()
        .required('Project name must be specified'),
    tasks: yup
        .array()
        .of(taskSchema)
})

const CreateProjectForm = ({ toggleModal }) => {
    const dispatch = useDispatch()
    const [tasks, setTasks] = useState([])
    const addTask = (values) => setTasks([...tasks, values])

    const submitAndResetTaskForm = (form, parent) => {
        const newTask = {
            ...form.values,
            creation_date: getUnixTimestamp(),
            id: uuidv4()
        }
        parent.values.tasks.push(newTask)
        form.setValues(newTask)
        form.submitForm().then(() => form.resetForm())
    }

    const createProject = async (values) => {
        const newProject = {
            ...values,
            id: uuidv4(),
            creation_date: getUnixTimestamp()
        }

        try {
            await projectService.createProject(newProject)
            dispatch(setNotification('Project created successfully', 'success', 3000))
        } catch (e) {
            dispatch(setNotification('Failed to create project', 'error', 3000))
        }
        dispatch(getProjects())
        toggleModal()
    }

    return (
        <FlexRow justifyContent='center'>
            <FlexCol xs={6}>
                <Formik
                    validationSchema={projectSchema}
                    onSubmit={createProject}
                    initialValues={{
                        name: '',
                        tasks: []
                    }}
                >
                    {(formik) => (
                        <Form noValidate onSubmit={formik.handleSubmit}>
                            <Form.Group as={Row} controlId="name">
                                <Form.Label column sm={4}>Name</Form.Label>
                                <Col sm={7}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Project name"
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        isInvalid={!!formik.errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.name}
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>
                            <Formik
                                validationSchema={taskSchema}
                                onSubmit={addTask}
                                initialValues={{
                                    name: '',
                                    description: '',
                                    estimate: 0
                                }}
                            >
                                {(subformik) => (
                                        <div>
                                            <Form.Group as={Row} controlId="name">
                                                <Form.Label column sm={4}>Task name</Form.Label>
                                                <Col sm={7}>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Task name"
                                                        name="name"
                                                        value={subformik.values.name}
                                                        onChange={subformik.handleChange}
                                                        isInvalid={!!subformik.errors.name}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {subformik.errors.name}
                                                    </Form.Control.Feedback>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="description">
                                                <Form.Label column sm={4}>Task description</Form.Label>
                                                <Col sm={7}>
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={3}
                                                        type="text"
                                                        placeholder="Task description"
                                                        name="description"
                                                        value={subformik.values.description}
                                                        onChange={subformik.handleChange}
                                                        isInvalid={!!subformik.errors.description}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {subformik.errors.description}
                                                    </Form.Control.Feedback>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="estimate">
                                                <Form.Label column sm={4}>Estimated time</Form.Label>
                                                <Col sm={7}>
                                                    <Form.Control
                                                        type="number"
                                                        placeholder="Estimated time"
                                                        name="estimate"
                                                        value={subformik.values.estimate}
                                                        onChange={subformik.handleChange}
                                                        isInvalid={!!subformik.errors.estimate}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {subformik.errors.estimate}
                                                    </Form.Control.Feedback>
                                                </Col>
                                            </Form.Group>
                                            <Button type="button" onClick={() => submitAndResetTaskForm(subformik, formik)} variant='secondary'>Add task</Button>
                                        </div>
                                    )}
                            </Formik>
                            <Button type="button" onClick={() => formik.submitForm()}>Create project</Button>
                        </Form>
                    )}
                </Formik>
            </FlexCol>
            <FlexCol xs={5}>
                <TaskList tasks={tasks}/>
            </FlexCol>
        </FlexRow>
    )
}

export default CreateProjectForm