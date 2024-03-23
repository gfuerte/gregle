import React, { useCallback, useState } from 'react'
import { differenceInDays, differenceInHours, parse } from 'date-fns'
import { Post } from '../../../../schema/Post'
import { IconButtonText } from '../../../shared/IconButtonText'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import IconButton from '@mui/material/IconButton'
import PublicIcon from '@mui/icons-material/Public'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'

interface FeedPostProps {
    post: Post
}

export const FeedPost = ({ post }: FeedPostProps) => {
    const [expand, setExpand] = useState<boolean>(true)

    const expandMoreLessClick = useCallback(() => {
        setExpand(!expand)
    }, [expand])

    const formatDatePosted = (date: string): string => {
        const parsedDate: Date = parse(date, 'MM-dd-yyyy HH', new Date())
        const today: Date = new Date()

        const hourDifference: number = differenceInHours(today, parsedDate)
        if (hourDifference < 24) return hourDifference === 0 ? 'now' : hourDifference + 'h'

        const dayDifference: number = differenceInDays(today, parsedDate)
        return dayDifference + 'd'
    }

    return (
        <Box maxWidth={525} component="section" sx={{ p: 2, borderRadius: 2, border: '1px solid lightgrey', backgroundColor: 'white' }}>
            <Stack direction="column" spacing={2}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={1}>
                        <Avatar alt="Gregle Avatar" sx={{ width: 50, height: 50, bgcolor: 'blue' }}>
                            G
                        </Avatar>
                        <Stack direction="column">
                            <Typography variant="subtitle1" sx={{ fontWeight: 550 }}>
                                {post.creator}
                            </Typography>
                            <Stack direction="row" alignItems="center" spacing={0.25}>
                                <Typography variant="caption">{formatDatePosted(post.date)}</Typography>
                                <Typography variant="caption">·</Typography>
                                <PublicIcon style={{ fontSize: '16px' }} />
                            </Stack>
                        </Stack>
                    </Stack>
                    <IconButton onClick={expandMoreLessClick}>{expand ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}</IconButton>
                </Stack>
                <Collapse in={expand}>
                    <Typography variant="subtitle2">{post.text}</Typography>
                    <Divider orientation="horizontal" flexItem sx={{ paddingTop: 2, marginBottom: 2 }} />
                    <Stack direction="row" justifyContent="space-around">
                        <Button startIcon={<FavoriteBorderIcon />} sx={{ textTransform: 'none', color: 'gray' }}>
                            <IconButtonText text="Like" />
                        </Button>
                        <Button startIcon={<ChatBubbleOutlineIcon />} sx={{ textTransform: 'none', color: 'gray' }}>
                            <IconButtonText text="Comment" />
                        </Button>
                        <Button startIcon={<SendIcon />} sx={{ textTransform: 'none', color: 'gray' }}>
                            <IconButtonText text="Send" />
                        </Button>
                    </Stack>
                </Collapse>
            </Stack>
        </Box>
    )
}
