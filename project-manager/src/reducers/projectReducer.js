import projectService from '../services/projectService'

export const getProjects = () => {
    return async dispatch => {
        const projects = await projectService.getProjects()

        dispatch({
            type: 'GET_PROJECTS',
            projects
        })
    }
}

export const getProject = (id) => {
    return async dispatch => {
        const project = await projectService.getProject(id)

        dispatch({
            type: 'GET_PROJECT',
            project
        })
    }
}

const reducer = (state = { list: [], shown: null }, action) => {
    switch (action.type) {
        case 'GET_PROJECTS': {
            return {
                ...state,
                list: action.projects
            }
        }
        case 'GET_PROJECT': {
            return {
                ...state,
                shown: action.project
            }
        }
        default:
            return state
    }
}

export default reducer