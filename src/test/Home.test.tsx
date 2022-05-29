import { render, screen } from '@testing-library/react'
import React from 'react'
import * as ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { Home } from '../pages/Home'

describe('Home page component tests', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
        const root = createRoot(container)
        root.render(<Home />)
    })

    afterEach(() => {
        document.body.removeChild(container)
        container.remove()
    })

    it('', () => {
        const button = document.querySelector('[name=buttonAddgggCard]')
        expect(button).toBeInTheDocument
    })
})
