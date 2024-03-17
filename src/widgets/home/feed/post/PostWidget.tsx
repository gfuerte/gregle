import React, { Dispatch, SetStateAction, createContext, useState } from 'react'
import { PostButton } from './PostButton'
import { PostMediaButton } from './PostMediaButton'
import { PostModal } from './PostModal'
import { PostMoodButton } from './PostMoodButton'
import { PostRandomButton } from './PostRandomButton'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface PostWidgetStateProps {
    initialText: string
    postText: string
    openModal: boolean
}

const defaultPostWidgetValues: PostWidgetStateProps = {
    initialText: '',
    postText: '',
    openModal: false,
}

const defaultPostActions: {
    openCloseModal: () => void
    setInitialPostText: (initialText: string) => void
    setPostText: (postText: string) => void
} = {
    openCloseModal: () => {},
    setInitialPostText: (initialText: string) => {},
    setPostText: (postText: string) => {},
}

interface PostWidgetContextProps {
    postWidgetState: PostWidgetStateProps
    setPostWidgetState?: Dispatch<SetStateAction<PostWidgetStateProps>>
    postActions: typeof defaultPostActions
}

export const PostWidgetContext = createContext<PostWidgetContextProps>({
    postWidgetState: defaultPostWidgetValues,
    postActions: defaultPostActions,
})

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
    const [postWidgetState, setPostWidgetState] = useState<PostWidgetStateProps>(defaultPostWidgetValues)
    const openCloseModal = () => {
        setPostWidgetState((prevState: PostWidgetStateProps) => ({
            ...prevState,
            openModal: !postWidgetState.openModal,
            postText: postWidgetState.openModal ? '' : postWidgetState.postText,
        }))
    }

    const setInitialPostText = (initialText: string) => {
        setPostWidgetState((prevState: PostWidgetStateProps) => ({
            ...prevState,
            initialText,
        }))
    }

    const setPostText = (postText: string) => {
        setPostWidgetState((prevState: PostWidgetStateProps) => ({
            ...prevState,
            postText,
        }))
    }

    const postActions = {
        openCloseModal,
        setInitialPostText,
        setPostText,
    }

    return (
        <PostWidgetContext.Provider value={{ postWidgetState, setPostWidgetState, postActions }}>
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
            <PostModal />
        </PostWidgetContext.Provider>
    )
}
