import React, { Fragment, useContext } from 'react'
import { PostWidgetContext } from './PostWidget'
import Typewriter from '../../../shared/Typewriter'

import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import Avatar from '@mui/material/Avatar'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'
import CollectionsIcon from '@mui/icons-material/Collections'
import Divider from '@mui/material/Divider'
import Fade from '@mui/material/Fade'
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const modalBoxStyle = {
    position: 'absolute' as 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
}

export const PostModal = () => {
    const { postWidgetState, postActions } = useContext(PostWidgetContext)
    const { openModal, initialText, postText } = postWidgetState

    const { openCloseModal, setInitialPostText, setPostText } = postActions

    return (
        <Fragment>
            <Modal
                open={openModal}
                onClose={openCloseModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openModal}>
                    <Box sx={modalBoxStyle}>
                        <Stack direction="column" divider={<Divider orientation="horizontal" flexItem />} spacing={2}>
                            <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
                                <Stack direction="row" spacing={1}>
                                    <Avatar alt="Gregle Avatar" sx={{ width: 50, height: 50, bgcolor: 'blue' }}>
                                        G
                                    </Avatar>
                                    <Stack direction="column">
                                        <Typography variant="h6">Greg Greg Greg</Typography>
                                        <Typography variant="body2">Post to Anyone</Typography>
                                    </Stack>
                                </Stack>
                                <IconButton onClick={openCloseModal}>
                                    <CloseIcon />
                                </IconButton>
                            </Stack>
                            <Stack direction="column">
                                {initialText !== '' ? (
                                    <Stack sx={{ minHeight: 200 }}>
                                        <Typography sx={{ padding: '3px 0px' }}>
                                            <Typewriter text={initialText} typingSpeed={40} setInitialPostText={setInitialPostText} />
                                        </Typography>
                                    </Stack>
                                ) : (
                                    <TextField
                                        onChange={e => setPostText(e.target.value)}
                                        value={postText}
                                        autoFocus
                                        onFocus={e => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
                                        fullWidth
                                        multiline
                                        minRows={8}
                                        maxRows={8}
                                        variant="standard"
                                        placeholder="What's going on? Greg-It!"
                                        sx={{ minHeight: 200 }}
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                    />
                                )}

                                <Stack direction="row" spacing={3}>
                                    <CollectionsIcon sx={{ color: '#c70e0e' }} />
                                    <SentimentVerySatisfiedIcon sx={{ color: 'green' }} />
                                    <AutoFixHighIcon sx={{ color: '#f2b21b' }} />
                                </Stack>
                            </Stack>
                            <Stack alignItems="flex-end">
                                <Button onClick={openCloseModal} disabled={false} variant="contained" sx={{ textTransform: 'none', borderRadius: 3 }}>
                                    Post
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Fade>
            </Modal>
        </Fragment>
    )
}
