import { render, screen } from '@testing-library/react'
import React from 'react'
import * as ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { Home } from '../pages/Home'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { Weather } from '../storage/types'

/*describe('Home page component tests', () => {
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
})*/
type CurrentWeather = {
    weathers: Weather[]
}

const initialState: CurrentWeather = {
    weathers: [
        {
            id: 1,
            main: {
                temp: 0,
                feels_like: 0,
                temp_max: 1,
                temp_min: -1,
                humidity: 20,
            },
            dt: 2022,
            name: 'city',
            timezone: +2,
            weather: [
                {
                    description: 'sun',
                    main: 'sun_sun',
                },
            ],
        },
    ],
}
const mockStore = configureStore()
let store

test('', () => {
    store = mockStore(initialState)

    const { getAllByRole } = render(
        <Provider store={store}>
            <Home />
        </Provider>
    )
    const button = getAllByRole('button')
    expect(button).toBeInTheDocument()
})
