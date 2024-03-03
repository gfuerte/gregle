import React from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../../../assets/gregle.png'

import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

export const LogoButton = () => {
    const navigate = useNavigate()

    const handleButtonClick = (event: React.SyntheticEvent) => {
        navigate('/gregle/home')
    }

    return (
        <Stack>
            <Button sx={{ width: '100%', height: '100%' }} onClick={handleButtonClick}>
                <img src={image} height="35" width="110" />
            </Button>
        </Stack>
    )
}
