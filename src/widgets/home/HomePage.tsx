import React from 'react'
import { AboutWidget } from './about/AboutWidget'
import { PostWidget } from './post/PostWidget'
import { UpdatesWidget } from './updates/UpdatesWidget'

import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

export const HomePage = () => {
    return (
        <Container maxWidth="lg">
            <Stack direction="row" justifyContent="space-between" py={3} spacing={3}>
                <AboutWidget />
                <PostWidget />
                <UpdatesWidget />
            </Stack>
        </Container>
    )
}
