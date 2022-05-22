import {
    AppBar,
    Box,
    Button,
    SvgIcon,
    Toolbar,
    Typography,
} from '@mui/material'
import React from 'react'
import { GlobalSvgSelector } from '../assets/GlobalSvgSelector'

interface Props {}

export const Header = (props: Props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box
                    sx={{
                        mr: '1rem',
                    }}
                >
                    <GlobalSvgSelector id="header-logo" />
                </Box>
                <Typography variant="h5">Reacr Weather App by Artur</Typography>
                <Button disabled={true} variant="outlined" size="small">
                    Back
                </Button>
            </Toolbar>
        </AppBar>
    )
}
