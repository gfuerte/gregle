import React, { useCallback } from 'react'
import { IconButtonText } from '../../../shared/IconButtonText'

import Button from '@mui/material/Button'
import CollectionsIcon from '@mui/icons-material/Collections'

export const PostMediaButton = () => {
    const onPostMediaClick = useCallback(() => {
        console.log('post media')
    }, [])

    return (
        <Button onClick={onPostMediaClick} startIcon={<CollectionsIcon />} sx={{ textTransform: 'none', color: '#c70e0e' }}>
            <IconButtonText text="Photo/video" />
        </Button>
    )
}
