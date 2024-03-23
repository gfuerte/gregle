import React, { createContext, useState } from 'react'
import { PostActionProps, PostWidgetContextProps, PostWidgetStateProps } from '../../../../types/PostWidgetProps'
import { PostButton } from './PostButton'
import { PostMediaButton } from './PostMediaButton'
import { PostModal } from './PostModal'
import { PostMoodButton } from './PostMoodButton'
import { PostRandomButton } from './PostRandomButton'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

const defaultPostWidgetValues: PostWidgetStateProps = {
    initialText: '',
    postText: '',
    openModal: false,
}

const defaultPostActions: PostActionProps = {
    openCloseModal: () => {},
    setInitialPostText: (initialText: string) => {},
    setPostText: (postText: string) => {},
}

export const PostWidgetContext = createContext<PostWidgetContextProps>({
    postWidgetState: defaultPostWidgetValues,
    postActions: defaultPostActions,
})

export const PostWidget = () => {
    const [postWidgetState, setPostWidgetState] = useState<PostWidgetStateProps>(defaultPostWidgetValues)
    const openCloseModal = () => {
        setPostWidgetState((prevState: PostWidgetStateProps) => ({
            ...prevState,
            openModal: !postWidgetState.openModal,
            initialText: postWidgetState.openModal ? '' : postWidgetState.initialText,
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
            <Box component="section" sx={{ p: 1.5, borderRadius: 2, border: '1px solid lightgrey', backgroundColor: 'white' }}>
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
