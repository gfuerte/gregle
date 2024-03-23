import React from 'react'
import { AboutWidget } from './about/AboutWidget'
import { FeedPanel } from './feed/FeedPanel'
import { UpdatesWidget } from './updates/UpdatesWidget'

import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

export const HomePage = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            py={3}
            spacing={{ xs: 2, sm: 1, md: 2, lg: 3, xl: 3 }}
            columns={{ xs: 20, sm: 10, md: 12, lg: 14, xl: 14 }}
        >
            <Grid item sm={2.5} md={2.75} lg={2} xl={2} display={{ xs: 'none', sm: 'block', md: 'block', lg: 'block', xl: 'block' }}>
                <AboutWidget />
            </Grid>
            <Grid item xs={19} sm={5} md={6} lg={4} xl={4} display={{ xs: 'block', sm: 'block', md: 'block', lg: 'block', xl: 'block' }}>
                <FeedPanel />
            </Grid>
            <Grid item sm={2.5} md={2.75} lg={2} xl={2} display={{ xs: 'none', sm: 'block', md: 'block', lg: 'block', xl: 'block' }}>
                <UpdatesWidget />
            </Grid>
        </Grid>
    )
}
