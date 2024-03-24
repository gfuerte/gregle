import React from 'react'
import { LogoButton } from './logo/LogoButton'
import { MobileNavigationTabs } from './tabs/MobileNavigationTabs'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

export const MobileNavigationBar = () => {
    return (
        <Box height={35} display="flex">
            <Paper sx={{ width: '100vw' }}>
                <Container maxWidth="lg">
                    <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" columns={{ xs: 12, sm: 12 }}>
                        <Grid item xs={8} sm={7}>
                            <LogoButton />
                        </Grid>
                        <Grid item xs={3} sm={1.5}>
                            <MobileNavigationTabs />
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </Box>
    )
}
