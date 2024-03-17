import React, { Fragment, useContext } from 'react'
import { PostWidgetContext } from './PostWidget'

import Button from '@mui/material/Button'

export const PostButton = () => {
    const { postActions } = useContext(PostWidgetContext)
    const { openCloseModal } = postActions

    return (
        <Fragment>
            <Button
                onClick={openCloseModal}
                variant="outlined"
                sx={{ borderRadius: 8, flexGrow: 1, color: 'gray', borderColor: 'gray', justifyContent: 'flex-start', textTransform: 'none' }}
            >
                What's going on? Greg-It!
            </Button>
        </Fragment>
    )
}
