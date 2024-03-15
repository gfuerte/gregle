import React from 'react'
import { FeedList } from './list/FeedList'
import { PostWidget } from './post/PostWidget'

import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'

export const FeedPanel = () => {
    return (
        <Stack direction="column" divider={<Divider orientation="horizontal" flexItem />} spacing={3}>
            <PostWidget />
            <FeedList />
        </Stack>
    )
}
