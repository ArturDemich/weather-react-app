import { Grid } from '@mui/material'
import React from 'react'
import WeatherCard from './WeatherCard'

interface Props {}

export const Home = (props: Props) => {
    return (
        <Grid container spacing={2}>
            <WeatherCard />
        </Grid>
    )
}
