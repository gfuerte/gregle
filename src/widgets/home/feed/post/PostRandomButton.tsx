import React, { useCallback } from 'react'
import { IconButtonText } from './PostWidget'

import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import Button from '@mui/material/Button'

export const PostRandomButton = () => {
    const onPostRandomClick = useCallback(() => {
        console.log('post random')
    }, [])

    return (
        <Button onClick={onPostRandomClick} startIcon={<AutoFixHighIcon />} sx={{ textTransform: 'none', color: '#f2b21b' }}>
            <IconButtonText text="Greg-It for me" />
        </Button>
    )
}
