import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Divider,
    Grid,
    Paper,
    Typography,
} from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { GlobalSvgSelector } from '../assets/GlobalSvgSelector'
import ChartBar from '../components/chartBar'

interface Props {
    coord: {
        lat: number
        lon: number
    }
    main: {
        feelsTemp: number
        temp: number
        tempMax: number
        tempMin: number
    }
    name: string
    weather: [
        {
            main: string
        }
    ]
}

export const InfoCityWeather = () => {
    const location = useLocation().state as Props

    // console.log(location.weather[0].main)

    return (
        <Container>
            <Card>
                <CardContent
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box>
                        <Typography variant="h3">{location.name}</Typography>
                        <Typography variant="h5">Сьогодні</Typography>
                        <Typography variant="body1">23:00</Typography>
                        <Typography variant="h4" component="h3">
                            {Math.floor(location.main.temp)}°
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            m: '1rem',
                        }}
                    >
                        <GlobalSvgSelector id={location.weather[0].main} />
                    </Box>
                </CardContent>
                <Divider />
                <ChartBar lat={0} lon={0} />
            </Card>
        </Container>
    )
}
