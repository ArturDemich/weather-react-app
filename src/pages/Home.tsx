import { Button, Container, Grid } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import React, { useEffect, useState } from 'react'
import { useCustomDispatch, useCustomSelector } from '../hooks/store'
import { selectCurrentWeatherData } from '../localStorage/selectors'
import { fetchCurrentWeather } from '../localStorage/thunks/fetchCurrentWeather'
import WeatherCard from '../components/WeatherCard'
import ModalAddCity from '../components/modalAddCity'

interface Props {}

export const Home = (props: Props) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const dispatch = useCustomDispatch()
    const { weather } = useCustomSelector(selectCurrentWeatherData)

    useEffect(() => {
        dispatch(fetchCurrentWeather('uzhgorod'))
    }, [])
    return (
        <Container>
            <ModalAddCity open={open} onClose={handleClose} />
            <Grid container spacing={2}>
                <WeatherCard weather={weather} />
                <Button
                    variant="outlined"
                    onClick={handleOpen}
                    sx={{ fontSize: '35px', m: '1rem' }}
                >
                    +
                </Button>
            </Grid>
        </Container>
    )
}
