import { Container } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { InfoCityWeather } from './pages/InfoCityWeather'

function App() {
    return (
        <>
            <Header />
            <Container sx={{ mt: '1rem' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/info-city-weather"
                        element={<InfoCityWeather />}
                    />
                </Routes>
            </Container>
        </>
    )
}

export default App
