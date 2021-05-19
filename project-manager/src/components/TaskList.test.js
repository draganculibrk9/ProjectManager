import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import TaskList from './TaskList'

describe('<TaskList/>', () => {
    const tasks = [
        {
            'id': '49b87d4a-d1dc-4257-9d5c-3df27b2c874f',
            'name': 'Task1',
            'description': 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
            'creation_date': 1621277605,
            'estimate': 3
        },
        {
            'id': '16f9c944-08e5-4a01-be5b-eb4a31a9ec96',
            'name': 'Task2',
            'description': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            'creation_date': 1621277205,
            'estimate': 1
        },
        {
            'id': '1112e27c-d87b-4d2c-8677-1e1ac8d556e4',
            'name': 'Task3',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut ullamcorper enim. Sed tempus metus et nisl lobortis, vel placerat nulla hendrerit.',
            'creation_date': 1621277609,
            'estimate': 0.5
        }
    ]

    let component

    beforeEach(() => {
        component = render(
            <TaskList tasks={tasks}/>
        )
    })

    test('renders content', () => {
        tasks.map(t => expect(component.container).toHaveTextContent(t.name))
    })

    test('shows additional information', () => {
        const firstTaskTab = component.container.querySelector('.task-links').firstChild
        fireEvent.click(firstTaskTab)
        const firstTaskPane = component.container.querySelector('.task-pane')
        expect(firstTaskPane).toBeVisible()
    })
})