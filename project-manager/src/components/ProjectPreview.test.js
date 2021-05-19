import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import { unixToLocalTimeString } from '../utils/timeUtils'
import ProjectPreview from './ProjectPreview'
import { MemoryRouter } from 'react-router-dom'

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}))

describe('<ProjectPreview/>', () => {
    const project = {
        'id': '7b0d7e75-3db0-4058-927e-70228088e765',
        'name': 'Project5',
        'creation_date': 1621277601
    }

    let component

    beforeEach(() => {
        component = render(
            <MemoryRouter>
                <ProjectPreview name={project.name} id={project.id} creation_date={project.creation_date}/>
            </MemoryRouter>
        )
    })

    test('renders content', () => {
        expect(component.container).toHaveTextContent(project.name)
        expect(component.container).toHaveTextContent(unixToLocalTimeString(project.creation_date))
        expect(component.container).toHaveTextContent('Details')
    })

    test('goes to project details', () => {
        const detailsButton = component.container.querySelector('.details-button')
        fireEvent.click(detailsButton)
        expect(mockHistoryPush).toHaveBeenCalledWith(`/projects/${project.id}`)
    })
})