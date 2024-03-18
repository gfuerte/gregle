import React, { createContext, useState } from 'react'
import { Post } from '../../../schema/Post'
import { FeedList } from './list/FeedList'
import { PostWidget } from './post/PostWidget'

import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'

interface FeedPanelContextProps {
    feed: Post[]
    addToFeed: (post: Post) => void
}

export const FeedPanelContext = createContext<FeedPanelContextProps>({
    feed: [],
    addToFeed: (post: Post) => {},
})

export const FeedPanel = () => {
    const [feed, setFeed] = useState<Post[]>([])

    const addToFeed = (post: Post) => {
        const newFeed = feed.concat(post)
        setFeed(newFeed)
    }

    return (
        <FeedPanelContext.Provider value={{ feed, addToFeed }}>
            <Stack direction="column" divider={<Divider orientation="horizontal" flexItem />} spacing={3}>
                <PostWidget />
                <FeedList />
            </Stack>
        </FeedPanelContext.Provider>
    )
}
