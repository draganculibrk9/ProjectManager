import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { getProject } from '../reducers/projectReducer'
import TaskList from './TaskList'
import DatePill from './DatePill'
import { unixToLocalTimeString } from '../utils/timeUtils'

const Project = () => {
    const dispatch = useDispatch()
    const project = useSelector(state => state.projects.shown)

    const idMatch = useRouteMatch('/projects/:id')

    useEffect(() => {
        if (!project || project.id !== idMatch) {
            idMatch && dispatch(getProject(idMatch.params.id))
        }
    }, [])

    if (!project) {
        return null
    }

    return (
        <div>
            <h1>{project.name}</h1>
            <DatePill date={unixToLocalTimeString(project.creation_date)}/>
            <div style={{ marginTop: '2%' }}>
            {
                project.tasks && <TaskList tasks={project.tasks}/>
            }
            {
                !project.tasks && <h5>No tasks to show!</h5>
            }
            </div>
        </div>
    )
}

export default Project