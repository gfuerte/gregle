import React, { useCallback } from 'react'

import Button from '@mui/material/Button'

export const PostButton = () => {
    const onPostButtonClick = useCallback(() => {
        console.log('post clicked')
    }, [])

    return (
        <Button
            onClick={onPostButtonClick}
            variant="outlined"
            sx={{ borderRadius: 8, flexGrow: 1, color: 'gray', borderColor: 'gray', justifyContent: 'flex-start', textTransform: 'none' }}
        >
            What's going on? Greg-It!
        </Button>
    )
}
