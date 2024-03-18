import React from 'react'

import Typography from '@mui/material/Typography'

interface IconButtonTextProps {
    text: string
}

export const IconButtonText = ({ text }: IconButtonTextProps): JSX.Element => {
    return (
        <Typography fontSize={'0.875rem'} color={'gray'}>
            {text}
        </Typography>
    )
}
