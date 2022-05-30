import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import { useNavigate } from 'react-router-dom'
import { GlobalSvgSelector } from '../assets/GlobalSvgSelector'

export const Header = () => {
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
                            React Weather App by Artur
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
