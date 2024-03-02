import React from 'react'
import image from '../../assets/gregle.png'
import { SearchBar } from './SearchBar'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Stack from '@mui/material/Stack'

export const NavigationBar = () => {
    return (
        <Box height={50} display="flex" sx={{ backgroundColor: 'white' }}>
            <Stack direction="row" spacing={2} px={45} py={0.75}>
                <img src={image} height="40" width="130" />
                <SearchBar />
            </Stack>
        </Box>
    )
}
