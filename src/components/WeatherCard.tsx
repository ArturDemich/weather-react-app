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
import { Weather } from '../localStorage/types'

interface Props {
    weather: Weather
}

const WeatherCard = ({ weather }: Props) => {
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
                            <Typography variant="body1">
                                {weather.timezone}
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
                    <Button variant="text" startIcon={<DeleteIcon />}>
                        Видалити
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        endIcon={<RefreshIcon />}
                    >
                        Відновити
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default WeatherCard
