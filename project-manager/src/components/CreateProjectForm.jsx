import React from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import { Button, Col, Form } from 'react-bootstrap'

const projectSchema = yup.object().shape({
    name: yup
        .string()
        .required('Project name must be specified'),
    tasks: yup
        .array()
        .of(
            yup.object().shape({
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
        )
})

const CreateProjectForm = () => {
    return (
        <Formik
            validationSchema={projectSchema}
            onSubmit={console.log}
            initialValues={{
                name: '',
                tasks: []
            }}
        >
            {({
                  handleSubmit,
                  handleChange,
                  values,
                  errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Project name"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Button type="submit">Create</Button>
                </Form>
            )}
        </Formik>
    )
}

export default CreateProjectForm