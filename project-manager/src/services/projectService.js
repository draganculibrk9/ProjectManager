import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL

const getProjects = async () => {
    const response = await axios.get(`${BASE_URL}/projects`)
    return response.data
}

const getProject = async (id) => {
    const response = await axios.get(`${BASE_URL}/projects/${id}`)
    return response.data
}

const createProject = async (project) => {
    const response = await axios.post(`${BASE_URL}/projects`, project)
    return response.data
}

const projectService = {
    getProjects,
    getProject,
    createProject
}

export default projectService