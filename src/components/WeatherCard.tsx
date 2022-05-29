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
import React from 'react'
import { GlobalSvgSelector } from '../assets/GlobalSvgSelector'
import { Link } from 'react-router-dom'
import { Weather } from '../storage/types'
import { useCustomDispatch } from '../hooks/store'
import { removeWeatherCard } from '../storage/slices/currentWeatherSlice'
import { fetchCurrentWeather } from '../storage/thunks/fetchWeathers'
import Moment from 'react-moment'

interface Props {
    weather: Weather
}

const WeatherCard = ({ weather }: Props) => {
    const dispatch = useCustomDispatch()

    function removeCard(id: number) {
        dispatch(removeWeatherCard({ id }))
    }

    function updateCard() {
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
                    <Link to="/info-city-weather" state={weather}>
                        <Box
                            sx={{
                                m: '1rem',
                            }}
                        >
                            <GlobalSvgSelector id={weather.weather[0].main} />
                        </Box>
                        <CardContent>
                            <Typography variant="h5" component="h3">
                                {Math.floor(weather.main.temp)}°
                            </Typography>
                            <Typography variant="body1">Сьогодні</Typography>
                            <Typography variant="body1">
                                <Moment format="DD/MM/YYYY hh:mm:ss" unix>
                                    {weather.dt}
                                </Moment>
                            </Typography>

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
                        onClick={() => removeCard(weather.id)}
                    >
                        Видалити
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        endIcon={<RefreshIcon />}
                        onClick={() => updateCard()}
                    >
                        Оновити
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default WeatherCard
