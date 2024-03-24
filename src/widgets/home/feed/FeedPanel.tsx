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
    const testFeed1: Post = {
        creator: 'Greg Greg Greg',
        date: '03-24-2024 02',
        text: 'First post LFG!!!!!',
        likes: 0,
        comments: [],
    }

    const testFeed2: Post = {
        creator: 'xXGR3GL3_US3RXx',
        date: '02-29-2024 02',
        text: 'leap day post >;0',
        likes: 0,
        comments: [],
    }

    const testFeed3: Post = {
        creator: 'Elon Musk',
        date: '02-24-2024 02',
        text: 'hi',
        likes: 0,
        comments: [],
    }

    const [feed, setFeed] = useState<Post[]>([testFeed1, testFeed2, testFeed3])

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
