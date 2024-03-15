import React from 'react'
import { PostButton } from './PostButton'
import { PostMediaButton } from './PostMediaButton'
import { PostMoodButton } from './PostMoodButton'
import { PostRandomButton } from './PostRandomButton'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
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

export const PostWidget = () => {
    return (
        <Box minWidth={525} component="section" sx={{ p: 1.5, borderRadius: 2, border: '1px solid lightgrey', backgroundColor: 'white' }}>
            <Stack direction="column" alignItems="stretch" spacing={1}>
                <Stack direction="row" spacing={1}>
                    <Avatar alt="Gregle Avatar" sx={{ width: 48, height: 48, bgcolor: 'blue' }}>
                        G
                    </Avatar>
                    <PostButton />
                </Stack>
                <Stack direction="row" spacing={1} justifyContent="space-around" alignItems="flex-start">
                    <PostMediaButton />
                    <PostMoodButton />
                    <PostRandomButton />
                </Stack>
            </Stack>
        </Box>
    )
}
