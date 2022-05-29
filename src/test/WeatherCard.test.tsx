import { render, screen } from '@testing-library/react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import WeatherCard from '../components/WeatherCard'
import ReactDOM from 'react-dom/client'

import { Weather } from '../storage/types'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const weatherMock: Weather = {
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
}

describe('WeatherCard component tests', () => {
    let container: HTMLDivElement
    const initialState = { output: 10 }
    const mockStore = configureStore()
    let store

    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
        // const root = createRoot(container)
        // root.render(<WeatherCard weather={weatherMock} />)
    })

    afterEach(() => {
        document.body.removeChild(container)
        container.remove()
    })

    it('', () => {
        store = mockStore(initialState)
        const { getByText } = render(
            <Provider store={store}>
                <WeatherCard weather={weatherMock} />
            </Provider>
        )

        expect(screen.getByRole('button')).toBe
    })
})
