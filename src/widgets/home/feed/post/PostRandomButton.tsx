import React, { useCallback, useContext } from 'react'
import { PostWidgetContext } from './PostWidget'
import { IconButtonText } from '../../../shared/IconButtonText'

import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import Button from '@mui/material/Button'

export const PostRandomButton = () => {
    const { setPostWidgetState } = useContext(PostWidgetContext)

    const onPostRandomClick = useCallback(() => {
        const randomText = `It's a long, long way from Ba Sing Se! But the Girls in the City they look so Pretty!!`

        setPostWidgetState!(prevState => ({
            ...prevState,
            initialText: randomText,
            postText: randomText,
            openModal: true,
        }))
    }, [setPostWidgetState])

    return (
        <Button onClick={onPostRandomClick} startIcon={<AutoFixHighIcon />} sx={{ textTransform: 'none', color: '#f2b21b' }}>
            <IconButtonText text="Greg-It for me" />
        </Button>
    )
}
