import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import DeleteIcon from '@mui/icons-material/Delete'
import React, { useState } from 'react'
import { GlobalSvgSelector } from '../assets/GlobalSvgSelector'
import { Link } from 'react-router-dom'
import { Weather } from '../localStorage/types'
import { useCustomDispatch } from '../hooks/store'
import { removeCard } from '../localStorage/slices/currentWeatherSlice'
import { fetchCurrentWeather } from '../localStorage/thunks/fetchCurrentWeather'

interface Props {
    weather: Weather
}

const WeatherCard = ({ weather }: Props) => {
    const [date, setDate] = useState(Date())
    console.log(date)
    const dispatch = useCustomDispatch()

    function remove(id: number) {
        dispatch(removeCard({ id }))
    }

    function reLoad() {
        dispatch(fetchCurrentWeather(weather.name))
    }
    return (
        <Grid item xs={12} md={4}>
            <Card
                sx={{
                    height: '100%',
                }}
            >
                <CardActionArea>
                    <Link to="/info-city-weather">
                        <Box
                            sx={{
                                m: '1rem',
                            }}
                        >
                            <GlobalSvgSelector id="sun" />
                        </Box>
                        <CardContent>
                            <Typography variant="h5" component="h3">
                                {Math.floor(weather.main.temp)}°
                            </Typography>
                            <Typography variant="body1">Сьогодні</Typography>
                            <Typography variant="body1">{date}</Typography>
                            <Typography variant="h6">{weather.name}</Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
                <CardActions
                    sx={{
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        variant="text"
                        startIcon={<DeleteIcon />}
                        onClick={() => remove(weather.id)}
                    >
                        Видалити
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        endIcon={<RefreshIcon />}
                        onClick={() => reLoad()}
                    >
                        Оновити
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default WeatherCard
