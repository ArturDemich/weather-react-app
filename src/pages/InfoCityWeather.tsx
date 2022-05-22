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
import { GlobalSvgSelector } from '../assets/GlobalSvgSelector'

interface Props {}

export const InfoCityWeather = (props: Props) => {
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
                        <Typography variant="h4">Сьогодні</Typography>
                        <Typography variant="body1">23:00</Typography>
                        <Typography variant="h4" component="h3">
                            14°
                        </Typography>

                        <Typography variant="h5">місто Ужгород</Typography>
                    </Box>
                    <Box
                        sx={{
                            m: '1rem',
                        }}
                    >
                        <GlobalSvgSelector id="sun" />
                    </Box>
                </CardContent>
                <Divider />

                <CardActions
                    sx={{
                        m: '1rem',
                        height: '10px',
                    }}
                >
                    <Button variant="outlined"> Сьогодні </Button>
                    <Button variant="outlined"> Завтра </Button>
                    <Button variant="outlined"> На 10 днів </Button>
                </CardActions>
            </Card>
            <Grid
                container
                spacing={1}
                sx={{
                    mt: '1rem',
                }}
            >
                <Grid item xs={3} md={2}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h3">
                                14°
                            </Typography>
                            <Typography variant="body1">Сьогодні</Typography>
                            <Typography variant="body1">23:00</Typography>
                            <Typography variant="h6">Ужгород</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h3">
                                14°
                            </Typography>
                            <Typography variant="body1">Сьогодні</Typography>
                            <Typography variant="body1">23:00</Typography>
                            <Typography variant="h6">Ужгород</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h3">
                                14°
                            </Typography>
                            <Typography variant="body1">Сьогодні</Typography>
                            <Typography variant="body1">23:00</Typography>
                            <Typography variant="h6">Ужгород</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h3">
                                14°
                            </Typography>
                            <Typography variant="body1">Сьогодні</Typography>
                            <Typography variant="body1">23:00</Typography>
                            <Typography variant="h6">Ужгород</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h3">
                                14°
                            </Typography>
                            <Typography variant="body1">Сьогодні</Typography>
                            <Typography variant="body1">23:00</Typography>
                            <Typography variant="h6">Ужгород</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h3">
                                14°
                            </Typography>
                            <Typography variant="body1">Сьогодні</Typography>
                            <Typography variant="body1">23:00</Typography>
                            <Typography variant="h6">Ужгород</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h3">
                                14°
                            </Typography>
                            <Typography variant="body1">Сьогодні</Typography>
                            <Typography variant="body1">23:00</Typography>
                            <Typography variant="h6">Ужгород</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} md={2}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h3">
                                14°
                            </Typography>
                            <Typography variant="body1">Сьогодні</Typography>
                            <Typography variant="body1">23:00</Typography>
                            <Typography variant="h6">Ужгород</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}
