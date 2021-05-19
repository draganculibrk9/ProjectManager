import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { getUnixTimestamp, unixToLocalTimeString } from '../utils/timeUtils'
import Task from './Task'

describe('<Task/>', () => {
    const task = {
        name: 'Task1',
        description: 'Description of Task1',
        creation_date: getUnixTimestamp(),
        estimate: 1
    }

    let component

    beforeEach(() => {
        component = render(
            <Task {...task}/>
        )
    })

    test('renders content', () => {
        expect(component.container).toHaveTextContent(task.name)
        expect(component.container).toHaveTextContent(task.description)
        expect(component.container).toHaveTextContent(task.estimate)
    })

    test('renders creation time', () => {
        expect(component.container).toHaveTextContent(unixToLocalTimeString(task.creation_date))
    })
})