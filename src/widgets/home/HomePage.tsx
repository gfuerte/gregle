import React from 'react'
import { AboutWidget } from './about/AboutWidget'
import { FeedPanel } from './feed/FeedPanel'
import { UpdatesWidget } from './updates/UpdatesWidget'

import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

export const HomePage = () => {
    return (
        <Container maxWidth="lg">
            <Stack direction="row" py={3} spacing={3}>
                <AboutWidget />
                <FeedPanel />
                <UpdatesWidget />
            </Stack>
        </Container>
    )
}
