import {
    Box,
    Card,
    CardContent,
    Container,
    Divider,
    Typography,
} from '@mui/material'
import Moment from 'react-moment'
import { useLocation } from 'react-router-dom'
import { GlobalSvgSelector } from '../assets/GlobalSvgSelector'
import ChartBar from '../components/ChartBar'

interface Props {
    coord: {
        lat: number
        lon: number
    }
    main: {
        feels_like: number
        temp: number
        temp_max: number
        temp_min: number
    }
    dt: number
    timezona: number
    name: string
    weather: [
        {
            main: string
        }
    ]
}

export const InfoCityWeather = () => {
    const location = useLocation().state as Props

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
                        <Typography variant="h4" component="h3">
                            {Math.floor(location.main.temp)}°
                        </Typography>
                        <Typography variant="body1">
                            Відчувається як:{' '}
                            {Math.floor(location.main.feels_like)}°
                        </Typography>
                        <Divider />
                        <Typography variant="h5">Сьогодні</Typography>
                        <Typography variant="body1">
                            <Moment format="DD/MM/YYYY hh:mm:ss" unix>
                                {location.dt}
                            </Moment>
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
                <ChartBar lat={location.coord.lat} lon={location.coord.lon} />
            </Card>
        </Container>
    )
}
