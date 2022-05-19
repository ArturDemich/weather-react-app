import { AppBar, SvgIcon, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { GlobalSvgSelector } from '../assets/GlobalSvgSelector'

interface Props {}

export const Header = (props: Props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <SvgIcon sx={{ minHeight: 80, minWeight: 80 }}>
                    <GlobalSvgSelector id="header-logo" />
                </SvgIcon>
                <Typography variant="h6">Reacr Weather App by Artur</Typography>
            </Toolbar>
        </AppBar>
    )
}
