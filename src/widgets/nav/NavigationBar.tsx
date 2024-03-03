import React from 'react'
import image from '../../assets/gregle.png'
import { NavigationBarTabs } from './tabs/NavigationBarTabs'
import { SearchBar } from './search-bar/SearchBar'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'

export const NavigationBar = () => {
    return (
        <Box height={50} display="flex">
            <Paper sx={{ width: '100vw' }}>
                <Container maxWidth="lg">
                    <Stack direction="row" spacing={25}>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Stack paddingTop={0.5}>
                                <img src={image} height="35" width="110" />
                            </Stack>
                            <SearchBar />
                        </Stack>
                        <Stack paddingTop={0.5}>
                            <NavigationBarTabs />
                        </Stack>
                    </Stack>
                </Container>
            </Paper>
        </Box>
    )
}
