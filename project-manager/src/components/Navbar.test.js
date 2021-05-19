import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Navbar from './Navbar'
import { MemoryRouter } from 'react-router-dom'

test('renders content', () => {
    const text = 'Projects'
    const url = '/projects'

    const component = render(
        <MemoryRouter>
            <Navbar/>
        </MemoryRouter>
    )

    expect(component.container).toHaveTextContent(text)
    expect(component.container.querySelector(`a[href="${url}"]`)).toBeTruthy()
})