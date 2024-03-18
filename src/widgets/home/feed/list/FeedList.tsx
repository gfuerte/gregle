import React, { useContext } from 'react'
import { FeedPanelContext } from '../FeedPanel'
import { FeedPost } from './FeedPost'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export const FeedList = () => {
    const { feed } = useContext(FeedPanelContext)

    const cleanComparisons: string[] = [
        "clean as a germaphobe's nightmares.",
        'clean as a cat avoiding a bath.',
        "clean as a politician's conscience during election season.",
        "clean as a sitcom mom's kitchen after the commercial break.",
        'clean as a bachelor pad when expecting guests.',
        "clean as a chef's apron before the dinner rush.",
        "clean as a dog pretending it didn't just dig up the garden.",
        "clean as a kid's hands after eating chocolate cake.",
        "clean as a mime's imaginary window.",
        "clean as a vacuum cleaner salesman's pitch.",
    ]

    const getRandomCleanComparison = (): string => {
        const randomIndex = Math.floor(Math.random() * cleanComparisons.length)
        return cleanComparisons[randomIndex]
    }

    return (
        <Stack direction="column" spacing={1.5}>
            {feed.length === 0 && <Typography sx={{ color: 'gray', alignSelf: 'center' }}>Your feed is {getRandomCleanComparison()}</Typography>}
            {feed.map(post => {
                return <FeedPost post={post} />
            })}
        </Stack>
    )
}
