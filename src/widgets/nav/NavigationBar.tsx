import React from 'react'
import { LogoButton } from './logo/LogoButton'
import { NavigationBarTabs } from './tabs/NavigationBarTabs'
import { SearchBar } from './search-bar/SearchBar'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

export const NavigationBar = () => {
    return (
        <Box height={50} display="flex">
            <Paper sx={{ width: '100vw' }}>
                <Container maxWidth="lg">
                    <Grid container justifyContent="space-between" alignItems="flex-start" columns={{ md: 12, lg: 12, xl: 12 }} paddingTop={0.5}>
                        <Grid container direction="row" md={6} lg={6} xl={6}>
                            <Grid item md={3} lg={3} xl={3}>
                                <LogoButton />
                            </Grid>
                            <Grid item md={6} lg={6} xl={6}>
                                <SearchBar />
                            </Grid>
                        </Grid>
                        <Grid item md={6} lg={5} xl={5}>
                            <NavigationBarTabs />
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </Box>
    )
}
