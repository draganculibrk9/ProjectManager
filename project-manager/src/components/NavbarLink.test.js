import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import NavbarLink from './NavbarLink'
import { MemoryRouter } from 'react-router-dom'

test('renders content', () => {
    const text = 'Projects'
    const url = '/projects'

    const component = render(
        <MemoryRouter>
            <NavbarLink text={text} url={url}/>
        </MemoryRouter>
    )

    expect(component.container).toHaveTextContent(text)
    expect(component.container.querySelector(`a[href="${url}"]`)).toBeTruthy()
})