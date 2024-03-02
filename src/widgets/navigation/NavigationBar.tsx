import React from 'react'
import image from '../../assets/gregle.png'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
export const NavigationBar = () => {
    return (
        <Box height={25} display="flex" alignItems="center" gap={4} py={2} px={45} sx={{ backgroundColor: 'white' }}>
            <Grid>
                <img src={image} height="70" width="185" />
            </Grid>
            Welcome to Gregle!
        </Box>
    )
}
