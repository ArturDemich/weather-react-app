import { Button, Container, Grid } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import React, { useState } from 'react'
import { useCustomDispatch, useCustomSelector } from '../hooks/store'
import { selectCurrentWeatherData } from '../localStorage/selectors'
import WeatherCard from '../components/WeatherCard'
import ModalAddCity from '../components/modalAddCity'
import { Weather } from '../localStorage/types'

interface Props {}

export const Home = (props: Props) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const { weathers } = useCustomSelector(selectCurrentWeatherData)

    return (
        <Container>
            <ModalAddCity open={open} onClose={handleClose} />
            <Grid container spacing={2}>
                {weathers.map((el: Weather) => (
                    <WeatherCard weather={el} key={el.id} />
                ))}
                <Button
                    variant="outlined"
                    onClick={handleOpen}
                    sx={{ fontSize: '35px', m: '1rem', height: '250px' }}
                >
                    +
                </Button>
            </Grid>
        </Container>
    )
}
