import { Button, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useCustomDispatch, useCustomSelector } from '../hooks/store'
import { selectCurrentWeatherData } from '../storage/selectors'
import WeatherCard from '../components/WeatherCard'
import ModalAddCity from '../components/ModalAddCity'
import { Weather } from '../storage/types'
import { setWeathersFromLS } from '../storage/slices/currentWeatherSlice'

export const Home = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const dispatch = useCustomDispatch()

    const weatherFromLS: any = localStorage.getItem('weathers')

    useEffect(() => {
        dispatch(setWeathersFromLS({ weathers: JSON.parse(weatherFromLS) }))
    }, [weatherFromLS])

    const { weathers } = useCustomSelector(selectCurrentWeatherData)

    return (
        <Container>
            <ModalAddCity open={open} onClose={handleClose} />
            <Grid container spacing={2}>
                {weathers.map((el: Weather) => (
                    <WeatherCard weather={el} key={el.id} />
                ))}
                <Button
                    name="buttonAddCard"
                    variant="outlined"
                    onClick={handleOpen}
                    sx={{ fontSize: '35px', m: '1rem', height: '350px' }}
                >
                    +
                </Button>
            </Grid>
        </Container>
    )
}
