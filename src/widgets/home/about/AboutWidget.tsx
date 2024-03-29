import React from 'react'
import image from '../../../assets/gradient.png'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

export const AboutWidget = () => {
    return (
        <Box
            maxHeight={425}
            component="section"
            sx={{
                p: 2,
                borderRadius: 2,
                border: '1px solid lightgrey',
                backgroundColor: 'white',
                backgroundImage: `url("${image}")`,
                backgroundSize: '100% 65px',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Stack width="100%" direction="column" py={1}>
                <Stack alignItems="center">
                    <Avatar alt="Gregle Avatar" sx={{ width: 64, height: 64, bgcolor: 'blue', border: '3px solid white' }}>
                        G
                    </Avatar>
                    <h3 style={{ fontWeight: '550', marginBottom: 0 }}>Greg Greg Greg</h3>
                    <p style={{ fontSize: '12px' }}>Relation to Greg</p>
                </Stack>
                <Divider flexItem />
                <Stack py={2}>
                    <Stack direction="row" justifyContent="space-between">
                        <p style={{ fontSize: '12px' }}>Date Joined:</p>
                        <p style={{ fontSize: '12px' }}>March 3, 2024</p>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <p style={{ fontSize: '12px' }}>Mutual Friends with Greg:</p>
                        <p style={{ fontSize: '12px' }}>14</p>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <p style={{ fontSize: '12px' }}>Number of Greg-Its:</p>
                        <p style={{ fontSize: '12px' }}>15</p>
                    </Stack>
                </Stack>
                <Divider flexItem />
                <Stack spacing={2} py={2}>
                    <p style={{ fontSize: '12px' }}>
                        Favorite memory of Greg: <br /> when he was born
                    </p>
                    <p style={{ fontSize: '12px' }}>
                        How you met Greg: <br /> college i guess
                    </p>
                </Stack>
            </Stack>
        </Box>
    )
}
