import {
    AppBar,
    Box,
    Button,
    SvgIcon,
    Toolbar,
    Typography,
} from '@mui/material'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalSvgSelector } from '../assets/GlobalSvgSelector'

interface Props {}

export const Header = (props: Props) => {
    const navigate = useNavigate()

    const goBack = () => navigate(-1)
    return (
        <AppBar position="static">
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'inline-flex',
                    }}
                >
                    <GlobalSvgSelector id="header-logo" />
                    <Box component="span" sx={{ mr: '1rem' }}>
                        <Typography variant="h5">
                            Reacr Weather App by Artur
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Button
                        startIcon={<ArrowBackOutlinedIcon />}
                        variant="outlined"
                        size="small"
                        color="inherit"
                        onClick={goBack}
                    >
                        Go Back
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
