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
import React from 'react'
import { GlobalSvgSelector } from '../assets/GlobalSvgSelector'

interface Props {}

const WeatherCard = (props: Props) => {
    return (
        <Grid item xs={12} md={4}>
            <Card
                sx={{
                    height: '100%',
                }}
            >
                <CardActionArea>
                    <Box
                        sx={{
                            ml: '1rem',
                        }}
                    >
                        <GlobalSvgSelector id="sun" />
                    </Box>
                    <CardContent>
                        <Typography variant="h5" component="h3">
                            14°
                        </Typography>
                        <Typography variant="body1">Сьогодні</Typography>
                        <Typography variant="body1">23:00</Typography>
                        <Typography variant="h6">Ужгород</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions
                    sx={{
                        justifyContent: 'space-between',
                    }}
                >
                    <Button variant="text">Видалити</Button>
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
