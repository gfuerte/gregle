import { Dispatch, SetStateAction } from 'react'

export interface PostWidgetStateProps {
    initialText: string
    postText: string
    openModal: boolean
}

export interface PostActionProps {
    openCloseModal: () => void
    setInitialPostText: (initialText: string) => void
    setPostText: (postText: string) => void
}

export interface PostWidgetContextProps {
    postWidgetState: PostWidgetStateProps
    setPostWidgetState?: Dispatch<SetStateAction<PostWidgetStateProps>>
    postActions: PostActionProps
}
