import React, { useCallback } from 'react'
import { IconButtonText } from '../../../shared/IconButtonText'

import Button from '@mui/material/Button'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'

export const PostMoodButton = () => {
    const onPostMoodClick = useCallback(() => {
        console.log('post mood')
    }, [])

    return (
        <Button onClick={onPostMoodClick} startIcon={<SentimentVerySatisfiedIcon />} sx={{ textTransform: 'none', color: 'green' }}>
            <IconButtonText text="Feeling/activity" />
        </Button>
    )
}
