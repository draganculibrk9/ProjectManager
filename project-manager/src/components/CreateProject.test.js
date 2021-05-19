import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import CreateProject from './CreateProject'

describe('<CreateProject/>', () => {
    let component

    const mockHandler = jest.fn()

    beforeEach(() => {
        component = render(
            <CreateProject toggleModal={mockHandler}/>
        )
    })

    test('renders content', () => {
        expect(component.container).toBeVisible()
        expect(component.container).toHaveTextContent('Create project')
    })

    test('toggles modal', () => {
        const button = component.getByText('Create project')
        fireEvent.click(button)
        expect(mockHandler.mock.calls).toHaveLength(1)
    })
})